// Interested in migrating from FlatList to FlashList? Check out the recipe in our Ignite Cookbook
// https://infinitered.github.io/ignite-cookbook/docs/MigratingToFlashList
import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
} from "react-native";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import Swiper from "react-native-deck-swiper";
import { getMoviesData, getMoviesDataForSwipe, getSuggestedFilm } from "../data/filmData";
import { Card } from "../components/Card";
import { suggestMovie } from "../utils/apiService";

const background = require("../../assets/images/background.png");

interface SwipePageProps extends AppStackScreenProps<"Friends"> { }

export const SwipePage: FC<SwipePageProps> = observer(function SwipePage(
  _props
) {

  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedMovies, setLikedMovies] = useState([]);
  const [suggestedFilm, setSuggestedFilm] = useState(null);
  const NUMBER_OF_MOVIES = 15;

  useEffect(() => {
    getMoviesDataForSwipe()
      .then((data) => setMovies(data.slice(0, NUMBER_OF_MOVIES)))
  }, []);

  const handleSwipeRight = () => {
    const likedMovie = movies[currentIndex];
    setLikedMovies([...likedMovies, likedMovie]);
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipteLeft = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSipedAll = () => {
    const genresIDsArray = likedMovies.map(item => item.genresID).flat();
    const genreID = findMostGenreId(genresIDsArray);
    console.log("ALL");

    getSuggestedFilm(genreID)
      .then((data) => setSuggestedFilm(data))
  }

  function findMostGenreId(movies: any[]): any | undefined {
    if (movies.length === 0) {
      return undefined; // Retourne undefined si le tableau est vide
    }

    const compteurOccurrences: { [cle: string]: number } = {};

    let mostGenreId: any = movies[0];
    let maxOccurrences = 1;

    for (const element of movies) {
      if (compteurOccurrences[element]) {
        compteurOccurrences[element]++;
      } else {
        compteurOccurrences[element] = 1;
      }

      if (compteurOccurrences[element] > maxOccurrences) {
        maxOccurrences = compteurOccurrences[element];
        mostGenreId = element;
      }
    }

    return mostGenreId;
  }


  if (movies.length === 0) {
    return <Text>Chargement en cours...</Text>;
  }

  if (currentIndex === NUMBER_OF_MOVIES) {
    if (!suggestedFilm) {
      return (
        <View style={styles.container}>
          <Text>Chargement en cours...</Text>
        </View>
      );
    } else {
      console.log(suggestedFilm.titre);

      return (
        <View style={styles.container}>
          <Image source={suggestedFilm.affiche} style={styles.poster} />
          <Text style={styles.title}>{suggestedFilm.title}</Text>
          <Text style={styles.duration}>Durée : {suggestedFilm.duree}</Text>
          <Text style={styles.synopsis}>Synopsis : {suggestedFilm.synopsis}</Text>
          <Text style={styles.director}>Réalisateur : {suggestedFilm.realisateur}</Text>
          <Text style={styles.genre}>Genre : {suggestedFilm.genre}</Text>
          <Text style={styles.actors}>Acteurs : {suggestedFilm.distributions}</Text>
        </View>
      );
    }
  } else {

    return (
      <View>
        <Swiper
          cards={movies}
          renderCard={(movie) => (
            <View style={styles.card}>
              {movie ? (
                <>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: movie.affiche.uri }}
                  />
                  <Text style={styles.titre}>{movie.titre}</Text>
                  <Text style={styles.vote_average}>{movie.duree}</Text>
                </>
              ) : (
                <Text>Loading...</Text>
              )}
            </View>
          )}
          onSwipedRight={handleSwipeRight}
          onSwipedLeft={handleSwipteLeft}
          onSwipedAll={handleSipedAll}
          cardIndex={currentIndex}
          disableBottomSwipe //désactiver le swipe vers le bas
          disableTopSwipe //désactiver le swipe vers le haut
          animateOverlayLabelsOpacity //affichage en fondu du LIKE/DISLIKE
          animateCardOpacity //Disparition en fondu de la card
          overlayLabels={
            {
              left: {
                title: 'DISLIKE',
                style: {
                  label: {
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: 26
                  },
                  wrapper: {
                    flexDisrection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: -20
                  }
                }
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: 'green',
                    color: 'white',
                    fontSize: 26
                  },
                  wrapper: {
                    flexDisrection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 20
                  }
                }
              }
            }
          }
        />
      </View>
    );
  }
})

// #region Styles
const styles = StyleSheet.create({
  card: {
    flex: 0.80,
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    textAlign: 'center'
  },
  cardImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    flex: 1,
    resizeMode: 'contain'
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vote_average: {
    fontSize: 16,
    color: '#ff9900'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  duration: {
    fontSize: 16,
    marginBottom: 5,
  },
  synopsis: {
    fontSize: 16,
    marginBottom: 5,
  },
  director: {
    fontSize: 16,
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    marginBottom: 5,
  },
  actors: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  actorItem: {
    fontSize: 16,
    marginLeft: 20, // Pour l'espacement par rapport à la liste des acteurs
  },
});
// #endregion

// @demo remove-file