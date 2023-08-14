import { observer } from "mobx-react-lite"
import React, { FC,} from "react"
import { TextStyle, ViewStyle , Image, ImageStyle, View, ScrollView,  ImageSourcePropType} from "react-native"
import { Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { FilmILikeItem } from "./homePageComponent/FilmSeriesComponents"
import { FilmILike , SeriesILike } from "../data/filmData"





interface FavPageProps  extends AppStackScreenProps<"Favoris"> {titre?: string; annee?: string;}

export const FavPage: FC<FavPageProps> = observer(function FavPage(_props){
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

                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text preset="subheading" >Mes films préférées </Text>
                    </View>
                    <View>

                              </View>
                      {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {FilmILike.map((film, index) => (
                      <FilmILikeItem
                        key={index}
                        affiche={film.affiche}
                        genre={film.genre}
                        duree={film.duree}
                        titre={film.titre}
                        synopsis={film.synopsis}
                        realisateur={film.realisateur}
                        distributions={film.distributions}
                        onPress={() => GoCardDetail(film.titre, film.annee, film.duree, film.genre, film.affiche, film.synopsis, film.realisateur, film.distributions)} annee={""}                      />
                    ))}
                  </ScrollView>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text preset="subheading" style={{marginTop:20}}>Mes Séries préférées </Text>
                    </View>
                      {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {SeriesILike.map((film, index) => (
                      <FilmILikeItem
                        key={index}
                        affiche={film.affiche}
                        genre={film.genre}
                        duree={film.duree}
                        titre={film.titre}
                        synopsis={film.synopsis}
                        realisateur={film.realisateur}
                        distributions={film.distributions}
                        onPress={() => GoCardDetail(film.titre, film.annee, film.duree, film.genre, film.affiche, film.synopsis, film.realisateur, film.distributions)} annee={""}                      />
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

