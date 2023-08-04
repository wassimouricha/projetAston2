import { fetchMovieDetails, fetchMovies, fetchSerieDetails , fetchFilmMayLikeDetails} from "../utils/apiService";

const popularMoviesEndpoint = 'movie/popular';
const popularSeriesEndpoint = 'tv/popular';
const filmMayLikeEndpoint = 'movie/top_rated';
export const FilmILike = []; // Tableau pour stocker les films préférés
export const SeriesILike = []; // Tableau pour stocker les séries préférées



const getMoviesData = async () => {
  try {
    const moviesData = await fetchMovies(popularMoviesEndpoint);
    const films = await Promise.all(
      moviesData.map(async (movie: any) => {
        const movieDetails = await fetchMovieDetails(movie.id);
        const genres = movieDetails.genres.slice(0, 1).map((genre: any) => genre.name); // Récupérer le  premier genres du film
        return {
          affiche: { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` },
          genre: genres[0] || "Inconnu",
          annee: movie.release_date.substring(0, 4),
          duree: `${movieDetails.runtime} min`,
          titre: movie.title,
          synopsis: movie.overview,
          realisateur:  movieDetails.director || "Inconnu",
          distributions: movieDetails.actors || "Inconnu",
        };
      })
    );
    return films;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de films :', error);
    throw error;
  }
};

const getSeriesData = async () => {
  try {
    const seriesData = await fetchMovies(popularSeriesEndpoint);
    const series = await Promise.all(
      seriesData.map(async (serie: any) => {
        const serieDetails = await fetchSerieDetails(serie.id);
        const genres = serieDetails.genres.slice(0, 1).map((genre: any) => genre.name); // Récupérer le  premier genres du film
        const numberOfSeasons = `${serieDetails.number_of_seasons} saisons` || "Nombre de saisons inconnu"; // Vérifier si la propriété number_of_seasons existe
        return {
          affiche: { uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}` },
          genre:  genres[0] || "Inconnu",
          annee: serie.first_air_date.substring(0, 4),
          duree: numberOfSeasons,
          titre: serie.name,
          synopsis: serie.overview,
          realisateur: serieDetails.director || "Inconnu",
          distributions: serieDetails.actors,
        };
      })
    );
    return series;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de séries :', error);
    throw error;
  }
};

const getFilmMayLikeData = async () => {
  try {
    const filmMayLikeData = await fetchMovies(filmMayLikeEndpoint);
    const FilmMayLike = await Promise.all(
      filmMayLikeData.map(async (movie: any) => {
        const movieDetails = await fetchFilmMayLikeDetails(movie.id);
        const genres = movieDetails.genres.slice(0, 1).map((genre: any) => genre.name); // Récupérer le premier genre du film
        return {
          affiche: { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` },
          genre: genres[0] || "Inconnu",
          annee: movie.release_date.substring(0, 4),
          duree: `${movieDetails.runtime} min`,
          titre: movie.title,
          synopsis: movie.overview,
          realisateur: movieDetails.director || "Inconnu",
          distributions: movieDetails.actors || "Inconnu",
        };
      })
    );
    return FilmMayLike;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de films recommandés :', error);
    throw error;
  }
};



export {
  getMoviesData,
  getSeriesData,
  getFilmMayLikeData,
};


// Fonction pour remplir les films préférés
export const fillFilmILike = async () => {
  try {
    const moviesData = await fetchMovies("movie/popular");
    await Promise.all(
      moviesData.map(async (movie: any) => {
        const movieDetails = await fetchMovieDetails(movie.id);
        const genres = movieDetails.genres.slice(0, 1).map((genre: any) => genre.name); // Récupérer le premier genre du film

        FilmILike.push({
          affiche: { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` },
          genre: genres[0] || "Inconnu",
          annee: movie.release_date.substring(0, 4),
          duree: `${movieDetails.runtime} min`,
          titre: movie.title,
          synopsis: movie.overview,
          realisateur: movieDetails.director || "Inconnu",
          distributions: movieDetails.actors || "Inconnu",
        });
      })
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des données de films :", error);
    throw error;
  }
};

// Fonction pour remplir les séries préférées
export const fillSeriesILike = async () => {
  try {
    const seriesData = await fetchMovies("tv/popular");
    await Promise.all(
      seriesData.map(async (serie: any) => {
        const serieDetails = await fetchSerieDetails(serie.id);
        const genres = serieDetails.genres.slice(0, 1).map((genre: any) => genre.name); // Récupérer le premier genre de la série

        SeriesILike.push({
          affiche: { uri: `https://image.tmdb.org/t/p/w500${serie.poster_path}` },
          genre: genres[0] || "Inconnu",
          annee: serie.first_air_date.substring(0, 4),
          duree: `${serieDetails.number_of_seasons} saisons` || "Nombre de saisons inconnu",
          titre: serie.name,
          synopsis: serie.overview,
          realisateur: serieDetails.director || "Inconnu",
          distributions: serieDetails.actors,
        });
      })
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des données de séries :", error);
    throw error;
  }
};