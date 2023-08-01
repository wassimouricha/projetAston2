// ProfileInfo.tsx
import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Text } from "../../components";
import { colors } from "../../theme";

const friends = require("../../../assets/icons/community.png");
const bookmark = require("../../../assets/images/bookmarks.png");

const ProfileFriendInfo = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={friends}
          style={{ tintColor: colors.palette.red, marginLeft: 5, marginTop: 10 }}
        />
        <Text preset="subheading" style={{ marginLeft: 5, fontSize: 15 }}>
          Amis :
        </Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 150,
            backgroundColor: colors.palette.red,
            borderRadius: 50,
            alignItems: "center",
            margin: 5,
          }}
          onPress={() => Alert.alert("Voir plus")}
        >
          <Text style={{ color: colors.palette.black }}>Voir mes amis</Text>
        </TouchableOpacity>
        <Image
          source={bookmark}
          style={{ height: 30, width: 40, marginTop: 5, tintColor: colors.palette.red }}
        />
        <Text preset="subheading" style={{ marginLeft: 5, fontSize: 15 }}>
          Favoris :
        </Text>
      </View>
    </View>
  );
};

export default ProfileFriendInfo;
