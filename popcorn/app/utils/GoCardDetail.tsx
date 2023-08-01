import { ImageSourcePropType } from "react-native";
import { AppStackScreenProps } from "../navigators/AppNavigator";


type HomeScreenProps = AppStackScreenProps<"Home">;
type FavorisScreenProps = AppStackScreenProps<"Favoris">;

export type ScreenProps = HomeScreenProps | FavorisScreenProps;

export function GoCardDetail(
  _props: ScreenProps,
  titre: string,
  annee: string,
  duree: string,
  genre: string,
  affiche: ImageSourcePropType,
  synopsis: string,
  realisateur: string,
  distributions: string,
  



) {
  console.log("CardDetail");
  _props.navigation.navigate("CardDetailScreen", {
    titre,
    annee,
    duree,
    genre,
    affiche,
    synopsis,
    realisateur,
    distributions,
  });
}
