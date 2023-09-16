import axios from "axios";
// ici est mon fichier permettant de faire des requêtes à l'API themoviedb
// l'URL de base de l'API themoviedb
const baseURL = "https://api.themoviedb.org/3";

//  clé d'API themoviedb ici
const apiKey = "278c4d8a90056d4bdf066f2e7609e2b7";

// Fonction pour effectuer des requêtes GET à l'API themoviedb
export const fetchMovies = async (endpoint: string, params?: any) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`, {
      params: {
        api_key: apiKey,
        language: "fr-FR",
        ...params,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

//fonction pour récupérer les détails d'un film spécifique par son ID
export const fetchMovieDetails = async (movieId: number) => {
    try {
      const response = await axios.get(`${baseURL}/movie/${movieId}`, {
        params: {
          api_key: apiKey,
          language: "fr-FR",
        },
      });
  
      const creditsResponse = await axios.get(`${baseURL}/movie/${movieId}/credits`, {
        params: {
          api_key: apiKey,
        },
      });
  
      const movieDetails = response.data;
      const creditsData = creditsResponse.data;
  
      // Pour le réalisateur, nous prenons le premier membre de l'équipe de direction
      const director = creditsData.crew.find((crewMember: any) => crewMember.job === "Director");
      const actors = creditsData.cast.slice(0, 3).map((actor: any) => actor.name); //
      return {
        ...movieDetails,
        director: director ? director.name : "Inconnu",
        actors: actors.join(", ") || "Inconnu",
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du film :', error);
      throw error;
    }
  };

  //fonction pour récupérer les détails d'une série spécifique par son ID
export const fetchSerieDetails = async (serieId: number) => {
    try {
      const response = await axios.get(`${baseURL}/tv/${serieId}`, {
        params: {
          api_key: apiKey,
          language: "fr-FR",
        },
      });
  
      const creditsResponse = await axios.get(`${baseURL}/tv/${serieId}/credits`, {
        params: {
          api_key: apiKey,
        },
      });
  
      const serieDetails = response.data;
      const creditsData = creditsResponse.data;
  
      // Pour le réalisateur, nous prenons le premier membre de l'équipe de direction
      const director = creditsData.crew.find((crewMember: any) => crewMember.job === "Director");
      const actors = creditsData.cast.slice(0, 3).map((actor: any) => actor.name); // Récupérer les 3 premiers acteurs de la série
      return {
        ...serieDetails,
        director: director ? director.name : "Inconnu",
        actors: actors.join(", ") || "Inconnu",
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la série :', error);
      throw error;
    }
  };

  //fonction pour récupérer les détails d'un film recommandé spécifique par son ID
export const fetchFilmMayLikeDetails = async (movieId: number) => {
    try {
      const response = await axios.get(`${baseURL}/movie/${movieId}`, {
        params: {
          api_key: apiKey,
          language: "fr-FR",
        },
      });
  
      const creditsResponse = await axios.get(`${baseURL}/movie/${movieId}/credits`, {
        params: {
          api_key: apiKey,
        },
      });
  
      const movieDetails = response.data;
      const creditsData = creditsResponse.data;
  
      // Pour le réalisateur, nous prenons le premier membre de l'équipe de direction
      const director = creditsData.crew.find((crewMember: any) => crewMember.job === "Director");
      const actors = creditsData.cast.slice(0, 3).map((actor: any) => actor.name);
  
      return {
        ...movieDetails,
        director: director ? director.name : "Inconnu",
        actors: actors.join(", ") || "Inconnu",
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du film recommandé :', error);
      throw error;
    }
  };

  // Fonction pour effectuer des requêtes GET à l'API themoviedb pour le swipe
export const fetchMoviesForSwipe = async (endpoint: string, params?: any) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`, {
      params: {
        api_key: apiKey,
        language: "fr-FR",
        page: Math.floor(Math.random() * 20) + 1,
        ...params
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const suggestMovie = async (endpoint: string, params?: any) => {
  try {
    // Requête à l'API TMDb pour obtenir un film en adéquation avec les genres likés
    const response = await axios.get(`${baseURL}/${endpoint}` ,
      {
        params: {
          api_key: apiKey,
          language: 'fr-FR',
          sort_by: 'popularity.desc',
          with_genres: params,
          page: 1,
        },
      }
    );

    if (response.data.results.length > 0) {
      
      // Retournez le film suggéré
      return response.data.results;
    } else {
      console.log('Aucun film suggéré trouvé.');
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la suggestion de film :', error);
    return null;
  }
};
  