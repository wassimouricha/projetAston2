import { ImageSourcePropType, TouchableOpacity, View,Image } from "react-native";
import { Text } from "../../components";

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

export const ProfilePicContainer: React.FC<ProfileProps> = ({
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
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flex: 1,
        borderRadius: 30,
        overflow: "hidden",
        marginTop: 20,
        marginHorizontal: 10,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={photo} style={{ height: 250, width: 250, alignItems: "center", justifyContent: "center" }} />
        <Text>
          {nom} {prenom} {description} {mail} {age} {adresse} {statut} {amis} {likes} {dislikes} {fav}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
