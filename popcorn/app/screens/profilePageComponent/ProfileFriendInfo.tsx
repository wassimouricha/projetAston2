// ProfileInfo.tsx
import React from "react";
import { View, Image, TouchableOpacity, Alert, ImageSourcePropType } from "react-native";
import { Text } from "../../components";
import { colors } from "../../theme";

const friends = require("../../../assets/icons/community.png");
const bookmark = require("../../../assets/images/bookmarks.png");
const heart = require("../../../assets/icons/blackheart.png");
const cross = require("../../../assets/icons/x.png");

interface ProfileProps {
    nom: string;
    prenom: string;
    description: string;
    mail: string;
    age: string;
    adresse: string;
    statut: string;
    amis: number;
    likes: number;
    dislikes: number;
    fav: number;
    photo: ImageSourcePropType;
    onPress: () => void;
  }
  

export const ProfileFriendInfo : React.FC<ProfileProps>= ({
    nom,
    prenom,
    description,
    mail,
    age,
    adresse,
    statut,
    amis,
    likes,
    dislikes,
    fav,
    photo,
    onPress,
}) => (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={friends}
          style={{ tintColor: colors.palette.red, marginLeft: 5, marginTop: 5 }}
        />
        <Text preset="subheading" style={{ marginLeft: 5, fontSize: 12 }}>
          Amis : {amis}
        </Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 120,
            backgroundColor: colors.palette.red,
            borderRadius: 50,
            alignItems: "center",
            margin: 5,
          }}
          onPress={() => Alert.alert("Voir mes amis")}
        >
          <Text style={{ color: colors.palette.black, fontSize:12 }}>Voir mes amis</Text>
        </TouchableOpacity>
        <Image
          source={bookmark}
          style={{ height: 30, width: 40, marginTop: 5, tintColor: colors.palette.red }}
        />
        <Text preset="subheading" style={{ marginLeft: 5, fontSize: 12 }}>
          Favoris : {fav}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={heart}
          style={{ tintColor: colors.palette.green, marginLeft: 1,height: 30, width: 30, marginTop:5,}}
        />
        <Text preset="subheading" style={{ marginLeft: 3, fontSize: 12 }}>
          Aimés : {likes}
        </Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 120,
            backgroundColor: colors.palette.red,
            borderRadius: 50,
            alignItems: "center",
            margin: 5,
          }}
          onPress={() => Alert.alert("Voir mes films")}
        >
          <Text style={{ color: colors.palette.black, fontSize:12 }}>Mes films</Text>
        </TouchableOpacity>
        <Image
          source={cross}
          style={{ height: 30, width: 30, marginTop: 5, tintColor: colors.palette.red }}
        />
        <Text preset="subheading" style={{ marginLeft: 5, fontSize: 12 }}>
          Pas aimés : {dislikes}
        </Text>
      </View>
    </View>
  );



