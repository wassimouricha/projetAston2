import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import {
  ViewStyle,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer";
import { LoggedProfile } from "../data/loggedProfileData";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileFriendInfo } from "./profilePageComponent/ProfileFriendInfo";
import { ProfileDescription } from "./profilePageComponent/Description";
import { ProfilePersonal } from "./profilePageComponent/PersonalInfo";
import { handleNavigateToModification } from "../utils/GoModificationProfilePage";




const background = require("../../assets/images/background.png");
const logout = require("../../assets/images/logout.png");

interface ProfilePageProps extends AppStackScreenProps<"Profile"> {}


export const ProfilePage: FC<ProfilePageProps> = observer(function ProfilePage(
  _props
) {


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        style={{ height: 350, alignItems: "center", zIndex: 20 }}
      >
        <View style={$buttonContainerOnlyRight}>
          <TouchableOpacity
            style={$DisLikeButton}
            onPress={() => Alert.alert("Se déconnecter")}
          >
            <Image
              source={logout}
              style={{ height: 30, width: 30, marginTop: 10, alignItems: "center" }}
            />
          </TouchableOpacity>
        </View>
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
              textInButton="Modifier le profil"
              onPress={() =>
                handleNavigateToModification(_props)
              }
            />
          ))}
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ zIndex: -20, marginTop: 80 }}>
        {LoggedProfile.map((profile, index) => (
            <ProfileFriendInfo
              key={index}
              fav={profile.fav}
              likes={profile.likes}
              dislikes={profile.dislikes}
              amis={profile.amis}
            />
          ))}
        {LoggedProfile.map((profile, index) => (
            <ProfileDescription
            key={index}
              description={profile.description}
            />
          ))}
        {LoggedProfile.map((profile, index) => (
            <ProfilePersonal
              key={index}
              mail={profile.mail}
              age={profile.age}
              adresse={profile.adresse}
            />
          ))}
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
