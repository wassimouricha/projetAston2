import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState,} from "react"
import { TextStyle, ViewStyle , Image, ImageStyle, ImageBackground, View, ScrollView, TextInput, Touchable, TouchableOpacity, Alert, ImageSourcePropType} from "react-native"
import {  Button, Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import {
  getMoviesData,
  getSeriesData,
  getFilmMayLikeData,
} from "../data/filmData";
import { FilmItem, FilmMayLikeItem } from "./homePageComponent/FilmSeriesComponents"
import { GoCardDetail } from "../utils/GoCardDetail"



interface HomePageProps  extends AppStackScreenProps<"Home"> {}
const thierry = require("../../assets/images/thierry.jpg")


export const HomePage: FC<HomePageProps> = observer(function HomePage(_props) {

  const [films, setFilms] = useState([]); // État pour stocker les films
  const [series, setSeries] = useState([]); // État pour stocker les séries
  const [filmMayLike, setFilmMayLike] = useState([]); // État pour stocker les films recommandés

  useEffect(() => {
    // Récupérez les données des films
    getMoviesData()
      .then((data) => setFilms(data))
      .catch((error) => console.error("Erreur lors de la récupération des données de films :", error));

    // Récupérez les données des séries
    getSeriesData()
      .then((data) => setSeries(data))
      .catch((error) => console.error("Erreur lors de la récupération des données de séries :", error));

    // Récupérez les données des films recommandés
    getFilmMayLikeData()
      .then((data) => setFilmMayLike(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données de films recommandés :", error)
      );
  }, []);

  const loggedName = "Thierry"
  // état local pour stocker la valeur de recherche dans le composant
  const [searchText, setSearchText] = useState("");
  // filtrer les films par rapport à la valeur de recherche dans la section sortie de la semaine
  // lorsqu'on va taper le titre d'un film dans l'input le composant va filtrer les films et afficher
  // uniquement les films qui contiennent le texte tapé dans l'input
  const filteredFilms = films.filter((film) =>
  // la recherche est insensible à la casse ce qui veut dire que si on tape "a" ou "A" on aura le même résultat
  film.titre.toLowerCase().includes(searchText.toLowerCase())
);

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
                      onChangeText={(text)  => setSearchText(text)}
                    />
                
                </View>


                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text preset="subheading" >Sortie de la semaine</Text>
                    </View>
                    <View>

                              </View>
                                {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                                
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {filteredFilms.length === 0 ? (
                                      <Text  preset="subheading"  style={$enterDetails }>Oups, nous n'avons rien trouvé !</Text>
                                    ) : (
                                      filteredFilms.map((film, index) => (
                                        <FilmItem
                                          key={index}
                                          affiche={film.affiche}
                                          genre={film.genre}
                                          annee={film.annee}
                                          duree={film.duree}
                                          titre={film.titre}
                                          synopsis={film.synopsis}
                                          realisateur={film.realisateur}
                                          distributions={film.distributions}
                                          onPress={() =>
                                            GoCardDetail(
                                              _props,
                                              film.titre,
                                              film.annee,
                                              film.duree,
                                              film.genre,
                                              film.affiche,
                                              film.synopsis,
                                              film.realisateur,
                                              film.distributions
                                            )
                                          }
                                        />
                                      ))
                                    )}
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
                synopsis={film.synopsis}
                realisateur={film.realisateur}
                distributions={film.distributions}
                onPress={() => GoCardDetail(_props,film.titre, film.annee, film.duree, film.genre, film.affiche, film.synopsis , film.realisateur , film.distributions )}
              />
            ))}
          </ScrollView>
        
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
                      <Text preset="subheading" >Vous aimerez peut-être </Text>
                    </View>

                      {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {filmMayLike.map((film, index) => (
                      <FilmMayLikeItem
                        key={index}
                        affiche={film.affiche}
                        genre={film.genre}
                        duree={film.duree}
                        titre={film.titre}
                        synopsis={film.synopsis}
                        realisateur={film.realisateur}
                        distributions={film.distributions}
                        annee={film.annee}
                        onPress={() => GoCardDetail( _props,film.titre,  film.annee, film.duree, film.genre,film.affiche,  film.synopsis , film.realisateur , film.distributions )}      />
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


const $enterDetails: TextStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: colors.palette.red,
  fontSize: 12,
  flexWrap: "wrap",
  marginLeft:50
};


const $loggedName: TextStyle = {
  color: colors.palette.red,
}

