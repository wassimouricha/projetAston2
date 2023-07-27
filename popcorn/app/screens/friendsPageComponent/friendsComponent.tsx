import { ImageSourcePropType, TouchableOpacity, View, ViewStyle,Image } from "react-native";
import { Text } from "../../components";


interface FriendsItemProps {
    photo: ImageSourcePropType;
    nom: string;
    prenom: string;
    description: string;
    mail: string;
    age: string;
    pays: string;
    statut: string;
    onPress: () => void;
  }

const thierry = require("../../../assets/images/thierry.jpg")
export const FriendsItem: React.FC<FriendsItemProps> = ({ 
  photo,
  nom,
  prenom,
  pays,
  age,
  statut,
  mail,
  description,
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
  <View style={{ flex: 1, borderRadius: 30, overflow: "hidden",  }}>
  
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  width:450}}>
  <Image source={photo} style={{ height: 50, width: 50, marginRight: 15, borderRadius: 40, marginLeft:25  }} />
                        <View>
                        <Text preset="subheading" style={{ width: 200 }}>
                        <Text preset="subheading" style={{  fontSize: 15 ,marginLeft:20 ,fontWeight: '800' }}>
                            {prenom} {nom}
                        </Text>
                     
                        </Text>
                        
                        </View>
                        <Text preset="subheading" style={{ width: 200, fontSize: 12 , marginLeft:10 , fontWeight: '800' }}>
                            retirer
                        </Text>
                        </View>

                    <View>
  </View>
  </View>
  </View>
  </TouchableOpacity>
);

const $LikeButton: ViewStyle = {

  alignItems:'center',
  justifyContent:'flex-start',
  width:50,
  height:50,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius:50,
}