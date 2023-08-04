import { AppStackScreenProps } from "../navigators/AppNavigator";

export function handleNavigateToMyFriends(_props: AppStackScreenProps<"Profile">) {
  console.log("Friends");
  _props.navigation.navigate("Friends");
}
