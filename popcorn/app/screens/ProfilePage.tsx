import { observer } from "mobx-react-lite"
import React, { FC,} from "react"
import { TextStyle, ViewStyle , ImageStyle, View, Alert, ImageSourcePropType, ImageBackground, TouchableOpacity ,Image} from "react-native"
import {   Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer"
import { LoggedProfile } from "../data/loggedProfileData"


const background = require("../../assets/images/background.png")
const logout = require("../../assets/images/logout.png")
interface ProfilePageProps  extends AppStackScreenProps<"Profile"> {}

export const ProfilePage: FC<ProfilePageProps> = observer(function ProfilePage(_props) {

  return (
            <ImageBackground
              source={background}
              style={{ height: 350, alignItems: 'center' }}
            >
            <View style={ $buttonContainerOnlyRight}>
              <TouchableOpacity style={$DisLikeButton}  onPress={() =>  Alert.alert( "Se déconnecter" )}>
                <Image source={logout}  style={{ height: 30, width:30, marginTop:10 , alignItems:'center'}}></Image>
              </TouchableOpacity>
            </View>
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  , width:320 , top:-90}}>
                                {/* Composant de mon container pour la photo de profil */}
                                {LoggedProfile.map((profile, index) => (
                                        <ProfilePicContainer
                                            key={index}
                                            nom={profile.nom}
                                            prenom={profile.prenom}
                                            fav={profile.fav}
                                            likes={profile.likes}
                                            dislikes={profile.dislikes}
                                            age={profile.age}
                                            statut={profile.statut}
                                            adresse={profile.adresse}
                                            mail={profile.mail}
                                            description={profile.description}
                                            amis={profile.amis}
                                            photo={profile.photo}
                                            onPress={() =>  Alert.alert( "Profil", "Vous avez cliqué sur le profil de " + profile.prenom + " " + profile.nom)}
                                            />
                                            ))}
            </View>
          </ImageBackground>
  )
})
const $DisLikeButton: ViewStyle = {
  alignItems:'center',
  justifyContent:'flex-start',
  width:50,
  height:50,
}

const $buttonContainerOnlyRight: ViewStyle = {
  width: '100%',
  display: "flex",
  flexDirection: 'row-reverse',
  justifyContent:'space-between',
  paddingHorizontal: 20,
  marginTop:30
}