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
import { Text } from "../components";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer";
import { LoggedProfile } from "../data/loggedProfileData";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../theme";
import { ProfileFriendInfo } from "./profilePageComponent/ProfileFriendInfo";


const background = require("../../assets/images/background.png");
const logout = require("../../assets/images/logout.png");
const friends = require("../../assets/icons/community.png");
const bookmark = require("../../assets/images/bookmarks.png");

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
              onPress={() =>
                Alert.alert(
                  "Profil",
                  "Vous avez cliqué sur le profil de " + profile.prenom + " " + profile.nom
                )
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
 
          <Text>
            Les Gardiens de la Galaxie se lancent dans une nouvelle aventure qui va les mener jusqu'à la découverte de nouveaux personnages issus des comics Marvel et de la part sombre de leur héritage.
          </Text>
          <Text>
            Les Gardiens de la Galaxie se lancent dans une nouvelle aventure qui va les mener jusqu'à la découverte de nouveaux personnages issus des comics Marvel et de la part sombre de leur héritage.
          </Text>
          <Text>
            Les Gardiens de la Galaxie se lancent dans une nouvelle aventure qui va les mener jusqu'à la découverte de nouveaux personnages issus des comics Marvel et de la part sombre de leur héritage.
          </Text>
          <Text>
            Les Gardiens de la Galaxie se lancent dans une nouvelle aventure qui va les mener jusqu'à la découverte de nouveaux personnages issus des comics Marvel et de la part sombre de leur héritage.
          </Text>
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
