import { AppStackScreenProps } from "../navigators/AppNavigator";

export function handleNavigateToMyMovies(_props: AppStackScreenProps<"Profile">) {
  console.log("Favoris");
  _props.navigation.navigate("Favoris");
}
