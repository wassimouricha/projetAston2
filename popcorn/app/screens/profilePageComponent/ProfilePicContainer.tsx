import { ImageSourcePropType, TouchableOpacity, View,Image, ViewStyle } from "react-native";
import { Button, Text } from "../../components";
import { colors, spacing } from "../../theme";

interface ProfileProps {
  nom: string;
  prenom: string;
  statut: string;
  photo: ImageSourcePropType;
  textInButton: string;
  onPress: () => void;
}

export const ProfilePicContainer: React.FC<ProfileProps> = ({
    nom,
    prenom,
    statut,
    photo,
    textInButton,
    onPress,
}) => (

    <View
          style={{
            flex: 1,
            height: 320,
            borderRadius: 50,
            overflow: "hidden",
            alignItems: "center",
            marginHorizontal: 10,
            shadowColor: "#000",
            padding: 20,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.58,
            shadowRadius: 6.00,
            elevation: 14,
            backgroundColor: colors.palette.white,
            marginTop: 100,
          }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={photo} style={{ height: 150, width: 150, alignItems: "center",borderRadius: 100 ,justifyContent: "center" }} />
        <Text preset="subheading">
          {prenom}  {nom}
        </Text>
    <Text style={{color:colors.palette.gray}}>
          {statut}
        </Text>
        <Button
        testID="modify-button"
        text={textInButton}
        style={$tapButton}
        textStyle={{color: colors.palette.black, fontSize: 18, fontWeight: "bold"}}
        preset="reversed"
        onPress={onPress}
      />
      </View>
    </View>
);



const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
  paddingHorizontal: spacing.large,
  borderRadius: 80,
}