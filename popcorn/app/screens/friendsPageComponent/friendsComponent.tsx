import { ImageSourcePropType, TouchableOpacity, View, ViewStyle,Image } from "react-native";
import { Text } from "../../components";


interface FriendsItemProps {
    id : number;
    photo: ImageSourcePropType;
    nom: string;
    prenom: string;
    description: string;
    mail: string;
    age: string;
    pays: string;
    statut: string;
    onPress: () => void;
    onPressRemove: (id: number) => void;
  }

export const FriendsItem: React.FC<FriendsItemProps> = ({ 
  id,
  photo,
  nom,
  prenom,
  pays,
  age,
  statut,
  mail,
  description,
  onPress,
  onPressRemove,
}) => (
  

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
  <TouchableOpacity onPress={onPress}><Image source={photo} style={{ height: 50, width: 50, marginRight: 15, borderRadius: 40, marginLeft:25  }} /></TouchableOpacity> 
                        <View>
                        <Text preset="subheading" style={{ width: 200 }}>
                        <Text preset="subheading" style={{  fontSize: 15 ,marginLeft:20 ,fontWeight: '800' }}>
                            {prenom} {nom}
                        </Text>
                     
                        </Text>
                        
                        </View>
                        <TouchableOpacity onPress={() => onPressRemove(id)}>  
                         <Text preset="subheading" style={{ width: 200, fontSize: 12 , marginLeft:10 , fontWeight: '800' }}>
                            retirer
                        </Text> 
                        </TouchableOpacity>
                        </View>

                    <View>
  </View>
  </View>
  </View>
);

const $LikeButton: ViewStyle = {

  alignItems:'center',
  justifyContent:'flex-start',
  width:50,
  height:50,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius:50,
}