// ProfileInfo.tsx
import React from "react";
import { View, Image, TouchableOpacity, Alert, ImageSourcePropType } from "react-native";
import { Text } from "../../components";

const clock = require("../../../assets/icons/clock.png");
const card = require("../../../assets/icons/card.png");
const pin = require("../../../assets/icons/pin.png");


interface ProfileProps {
    mail: string;
    age: string;
    adresse: string;
  }
  

export const ProfilePersonal : React.FC<ProfileProps>= ({

    mail,
    age,
    adresse,
}) => (
    <View>
        <Text preset="subheading" style={{fontWeight:'800', fontSize:17,marginLeft: 5}}>Informations Personelles : </Text>
        <View style={{flexDirection:'row'}}>
        <Image
          source={card}
          style={{ marginLeft: 1,height: 25, width: 25, marginTop:5,}}
        />
        <Text style={{ marginLeft: 5, fontSize: 13, }}>
           E-Mail: {mail}
        </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image
          source={clock}
          style={{ marginLeft: 1,height: 25, width: 25, marginTop:5,}}
        />

        <Text style={{ marginLeft: 5, fontSize: 13, }}>
           Age: {age}
        </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image
          source={pin}
          style={{ marginLeft: 1,height: 25, width: 25, marginTop:5,}}
        />

        <Text style={{ marginLeft: 5, fontSize: 13, }}>
           Adresse : {adresse}
        </Text>
        </View>
    </View>
  );



