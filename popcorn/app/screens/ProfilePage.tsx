import { observer } from "mobx-react-lite"
import React, { FC,} from "react"
import { TextStyle, ViewStyle , ImageStyle, View, Alert, ImageSourcePropType} from "react-native"
import {   Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer"
import { LoggedProfile } from "../data/loggedProfileData"



interface ProfilePageProps  extends AppStackScreenProps<"Profile"> {}

export const ProfilePage: FC<ProfilePageProps> = observer(function ProfilePage(_props) {

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
        
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View>

                              </View>
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
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  display:"flex",
  alignContent:"center",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

// const $signIn: TextStyle = {
//   marginBottom: spacing.small,
// }

const $enterDetails: TextStyle = {
  display:"flex",
  marginBottom: spacing.large,
  alignItems: "center",
  justifyContent:"center",
  color: colors.palette.red,
  paddingHorizontal: spacing.large,
  width: 500,
  fontSize: 15,
}

const $hint: TextStyle = {
  marginBottom: spacing.medium,
  paddingHorizontal: spacing.large,
  color: colors.palette.red,
  width: 500,
  fontSize: 15,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

const $signupLogo: ImageStyle = {
  display:"flex",
  justifyContent:"center",
  height: 269,
  width: 350,
  alignItems: "center",
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}
const $popcornLogo: ImageStyle = {
  display:"flex",
  justifyContent:"center",
  width: 350,
  alignItems: "center",
}

const $loggedName: TextStyle = {
  color: colors.palette.red,
}

