import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import {
  ViewStyle,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import { ProfilePicContainer } from "./profilePageComponent/ProfilePicContainer";
import { LoggedProfile } from "../data/loggedProfileData";
import { ScrollView } from "react-native-gesture-handler";


const background = require("../../assets/images/background.png");

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
                  "HAHAHAHAHAHAHAHAHAHAHVous avez cliqué sur le profil de " + profile.prenom + " " + profile.nom
                )
              }
            />
          ))}
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ zIndex: -20, marginTop: 80 }}>
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
