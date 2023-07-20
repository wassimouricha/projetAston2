import { observer } from "mobx-react-lite"
import React, { FC,} from "react"
import { TextStyle, ViewStyle , Image, ImageStyle, ImageBackground, View, ScrollView, TextInput, Touchable, TouchableOpacity, Alert, ImageSourcePropType} from "react-native"
import {  Button, Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { films, series, FilmMayLike } from "../data/filmData"
import { FilmItem, FilmMayLikeItem } from "./homePageComponent/FilmSeriesComponents"



interface HomePageProps  extends AppStackScreenProps<"Home"> {titre?: string; annee?: string;}
const thierry = require("../../assets/images/thierry.jpg")


export const HomePage: FC<HomePageProps> = observer(function HomePage(_props) {

  const loggedName = "Thierry"
  const handleFilmItemClick = (filmTitre , anneeTitre) => {
    // Ici, vous pouvez implémenter l'action à effectuer lorsqu'un FilmItem est cliqué.
    // Par exemple, afficher une alerte avec le titre du film.
    Alert.alert('Film sélectionné', `Vous avez sélectionné le film : ${filmTitre} sortie en  : ${anneeTitre}`);
  };
  
    // Attention pour l'instant cela ne fonctionne que lorsque l'on est non connecté
    function GoCardDetail(titre: string, annee: string , affiche: ImageSourcePropType) {
      console.log("CardDetail");
      _props.navigation.navigate("DetailScreen", { titre, annee , affiche}); // Passer les paramètres ici
    }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
          <View style={{ marginTop: 20 }}>
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    <Image source={thierry} style={{ height: 70, width: 70, marginRight: 10, borderRadius: 40, marginLeft: 60 }} />
    <View>
      <Text preset="subheading" style={{ width: 300 }}>
        Salut{" "}
        <Text preset="subheading" style={$loggedName}>
          {loggedName}
        </Text>
        <Text> !</Text>
      </Text>
      <Text style={{ width: 250, fontSize: 12 }}>
        C'est quoi ton film aujourd'hui ?
      </Text>
    </View>
  </View>
                <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   {/* Input de recherche */}
                   <Image source={require("../../assets/images/search.png")} style={{ height: 30, width: 30, marginRight:20}} />
                      <TextInput
                      placeholder="Rechercher votre film/série..."
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {

                      }}
                    />
                
                </View>


                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text preset="subheading" >Sortie de la semaine</Text>
                    </View>
                    <View>

                              </View>
                                {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {films.map((film, index) => (
              <FilmItem
                key={index}
                affiche={film.affiche}
                genre={film.genre}
                annee={film.annee}
                duree={film.duree}
                titre={film.titre}
                onPress={() => GoCardDetail(film.titre, film.annee, film.affiche)}
              />
            ))}
          </ScrollView>

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
            <Text preset="subheading" >Série à la une </Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {series.map((film, index) => (
              <FilmItem
                key={index}
                affiche={film.affiche}
                genre={film.genre}
                annee={film.annee}
                duree={film.duree}
                titre={film.titre}
                onPress={() => GoCardDetail(film.titre, film.annee, film.affiche)}
              />
            ))}
          </ScrollView>
        
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
                      <Text preset="subheading" >Vous aimerez peut-être </Text>
                    </View>

                      {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {FilmMayLike.map((film, index) => (
                      <FilmMayLikeItem
                        key={index}
                        affiche={film.affiche}
                        genre={film.genre}
                        duree={film.duree}
                        titre={film.titre}
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

