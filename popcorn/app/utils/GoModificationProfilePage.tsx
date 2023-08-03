// navigationHelpers.ts

import { AppStackScreenProps } from "../navigators/AppNavigator";

export function handleNavigateToModification(_props: AppStackScreenProps<"Profile">) {
  console.log("ModificationProfilePage");
  _props.navigation.navigate("ModificationProfilePage");
}
