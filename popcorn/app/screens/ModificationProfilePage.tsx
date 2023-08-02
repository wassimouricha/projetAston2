import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import {
  ViewStyle,
  View,
  Alert,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer";
import { LoggedProfile } from "../data/loggedProfileData";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../theme";



const background = require("../../assets/images/background.png");
const community = require("../../assets/icons/community.png");
const clock = require("../../assets/icons/clock.png");
const pin = require("../../assets/icons/pin.png");

interface ModificationProfilePageProps extends AppStackScreenProps<"ModificationProfilePage"> {}

export const ModificationProfilePage: FC<ModificationProfilePageProps> = observer(function ModificationProfilePage(
  _props
) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        style={{ height: 350, alignItems: "center", zIndex: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 320,
            top: -90,
            zIndex: 20,
          }}
        >
          {LoggedProfile.map((profile, index) => (
            <ProfilePicContainer
              key={index}
              nom={profile.nom}
              prenom={profile.prenom}
              statut={profile.statut}
              photo={profile.photo}
              onPress={() =>
                Alert.alert(
                  "Profil",
                  "HAHAHAHAHAHAHAHAHAHAH Vous avez modifié sur le profil de " + profile.prenom + " " + profile.nom
                )
              }
            />
          ))}
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ zIndex: -20, marginTop: 60 }}>
          <View style={{marginLeft:20}}>
                <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   {/* Input de modification */}
                   <Image source={community} style={{ height: 30, width: 30, marginRight:20 , tintColor:colors.palette.red}} />
                      <TextInput
                      placeholder="Modifier votre pseudo"
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {
                      }}
                    />
                
                </View>
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   <Image source={clock} style={{ height: 30, width: 30, marginRight:20, tintColor:colors.palette.red}} />
                      <TextInput
                      placeholder="Modifier votre age"
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {
                      }}
                    />
                </View>
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   <Image source={pin} style={{ height: 30, width: 30, marginRight:20, tintColor:colors.palette.red}} />
                      <TextInput
                      placeholder="Modifier votre adresse"
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {
                      }}
                    />
                </View>
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   <Image source={community} style={{ height: 30, width: 30, marginRight:20, tintColor:colors.palette.red}} />
                      <TextInput
                      placeholder="Modifier votre légende"
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {
                      }}
                    />
                </View>
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, height:300, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                      <TextInput
                      placeholder="Modifier votre description"
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 250 }}
                      onChangeText={(text) => {
                      }}
                    />
                </View>
          </View>
 
        </View>
      </ScrollView>
    </View>
  );
});

const $DisLikeButton: ViewStyle = {
  alignItems: "center",
  justifyContent: "flex-start",
  width: 50,
  height: 50,
};

const $buttonContainerOnlyRight: ViewStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  marginTop: 30,
};
