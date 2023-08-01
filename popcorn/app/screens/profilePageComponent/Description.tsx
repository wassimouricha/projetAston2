// ProfileInfo.tsx
import React from "react";
import { View, Image, TouchableOpacity, Alert, ImageSourcePropType } from "react-native";
import { Text } from "../../components";
import { colors } from "../../theme";


interface ProfileProps {
    description: string;
  }
  

export const ProfileDescription : React.FC<ProfileProps>= ({

    description
}) => (
    <View>
        <Text preset="subheading" style={{fontWeight:'800', fontSize:17,marginLeft: 5}}>Description : </Text>
        <Text style={{ marginLeft: 5, fontSize: 13, color:colors.palette.darkergray }}>
            {description}
        </Text>
    </View>
  );



