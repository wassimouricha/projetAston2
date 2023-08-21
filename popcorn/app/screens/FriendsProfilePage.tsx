import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import {
  ViewStyle,
  View,
  Text,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { AppStackParamList, AppStackScreenProps } from "../navigators/AppNavigator";
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer";
import { LoggedProfile } from "../data/loggedProfileData";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileFriendInfo } from "./profilePageComponent/ProfileFriendInfo";
import { ProfileDescription } from "./profilePageComponent/Description";
import { ProfilePersonal } from "./profilePageComponent/PersonalInfo";


import { RouteProp } from "@react-navigation/native"; 
import {  FriendsProfile } from "../data/friendsData"; // Importez le tableau Friends

const background = require("../../assets/images/background.png");
const logout = require("../../assets/images/logout.png");

interface FriendsProfilePageProps extends AppStackScreenProps<"FriendsProfilePage"> {
  route: RouteProp<AppStackParamList, "FriendsProfilePage">;
  friend: FriendsProfile;
}

export const FriendsProfilePage: FC<FriendsProfilePageProps> = observer(function FriendsProfilePage(
  _props: FriendsProfilePageProps
) {
  // ici ça indique une erreur mais pourtant ça fonctionne ???
  const { friend } = _props.route.params;

  if (!friend) {
    return <Text>Friend not found.</Text>;
  }

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
     
            <ProfilePicContainer
              nom={friend.nom}
              prenom={friend.prenom}
              statut={friend.statut}
              photo={friend.photo}
              onPress={() =>
                console.log("ok")
              }
            />
        
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
              onPress2={() => console.log("ok")}
            />
          ))}

            <ProfileDescription
              description={friend.description}
            />


            <ProfilePersonal
              mail={friend.mail}
              age={friend.age}
              adresse={friend.pays}
            />

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
