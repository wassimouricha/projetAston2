import { observer } from "mobx-react-lite"
import React, { FC,} from "react"
import { TextStyle, ViewStyle , Image, ImageStyle, View, ScrollView,  ImageSourcePropType, TextInput} from "react-native"
import { Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"

import { Friends } from "../data/friendsData"
import { FriendsItem } from "./friendsPageComponent/friendsComponent"



interface FriendsPageProps  extends AppStackScreenProps<"Friends"> {titre?: string; annee?: string;}

const thierry = require("../../assets/images/thierry.jpg")
const loggedName = "Thierry"
export const FriendsPage: FC<FriendsPageProps> = observer(function FriendsPage(_props) {

    // Attention pour l'instant cela ne fonctionne que lorsque l'on est non connecté
    function GoCardDetail(titre: string, annee: string , duree:string , genre:string ,affiche: ImageSourcePropType , synopsis: string , realisateur: string , distributions: string) {
      console.log("CardDetail");
      _props.navigation.navigate("CardDetailScreen", { titre, annee , duree, genre, affiche , synopsis, realisateur ,   distributions}); // Passer les paramètres ici
    }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
          <View style={{ marginTop: 20 }}>
                             {/* Composant du top widget*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={thierry} style={{ height: 50, width: 50, marginRight: 10, borderRadius: 40, marginLeft: 40 }} />
                        <View>
                        <Text preset="subheading" style={{ width: 300 }}>
                        <Text style={{ width: 250, fontSize: 12 }}>
                            Les amis de mes amis sont mes amis
                        </Text>
                        </Text>

                        </View>
                        </View>

                    <View>

                    <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   {/* Input de recherche d'amis */}
                   <Image source={require("../../assets/images/search.png")} style={{ height: 30, width: 30, marginRight:20}} />
                      <TextInput
                      placeholder="Rechercher parimis mes amis"
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {

                      }}
                    />
                
                </View>
                             {/* Titre*/}
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text preset="subheading" >Mes amis </Text>
                    </View>

                              </View>
                      {/* Composant de liste d'amis*/}
                      <ScrollView  showsHorizontalScrollIndicator={false}>
                    {Friends.map((friend, index) => (
                      <FriendsItem
                        key={index}
                        photo={friend.photo}
                        nom={friend.nom}
                        prenom={friend.prenom}
                        description={friend.description}
                        age={friend.age}
                        mail={friend.mail}
                        statut={friend.statut}
                        pays={friend.pays}
                        onPress={() => (console.log("ok")
                            // GoCardDetail(friend.titre, friend.annee, friend.duree, friend.genre, friend.affiche, friend.synopsis, friend.realisateur, friend.distributions)  
                     
                                )}   
                        onPress2={() => (console.log("retirer"))}        
                        />
                    ))}
                  </ScrollView>
              </View>
   



    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  display:"flex",
  alignContent:"center",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

// const $signIn: TextStyle = {
//   marginBottom: spacing.small,
// }

const $enterDetails: TextStyle = {
  display:"flex",
  marginBottom: spacing.large,
  alignItems: "center",
  justifyContent:"center",
  color: colors.palette.red,
  paddingHorizontal: spacing.large,
  width: 500,
  fontSize: 15,
}

const $hint: TextStyle = {
  marginBottom: spacing.medium,
  paddingHorizontal: spacing.large,
  color: colors.palette.red,
  width: 500,
  fontSize: 15,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

const $signupLogo: ImageStyle = {
  display:"flex",
  justifyContent:"center",
  height: 269,
  width: 350,
  alignItems: "center",
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}
const $popcornLogo: ImageStyle = {
  display:"flex",
  justifyContent:"center",
  width: 350,
  alignItems: "center",
}

const $loggedName: TextStyle = {
  color: colors.palette.red,
}

