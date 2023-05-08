import { observer } from "mobx-react-lite"
import React, { FC,} from "react"
import { TextStyle, ViewStyle , Image, ImageStyle} from "react-native"
import { Button, Screen, Text, } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"


interface FirstScreenProps  extends AppStackScreenProps<"First"> {}
const logo = require("../../assets/images/logopop.png")
const popcornlogo = require("../../assets/images/popcornlogo.png")

export const FirstScreen: FC<FirstScreenProps> = observer(function FirstScreen(_props) {
  // const { navigation } = _props;

  function GoLogin() {
    console.log("developed by : wassim")
    _props.navigation.navigate("Login")
  }




  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Image style={$signupLogo} source={logo} resizeMode="contain" />
      {/* <Text text="Bienvenue sur "   preset="subheading" style={$enterDetails} /> */}
      <Image style={$popcornLogo} source={popcornlogo} resizeMode="contain" />
      <Text text="Votre référence cinéma et séries !"   preset="subheading" style={$enterDetails} />

      <Button
        testID="login-button"
        text="Se connecter"
        style={$tapButton}
        textStyle={{color: colors.palette.secondary100, }}
        preset="reversed"
        onPress={GoLogin}
      />
      <Button
        testID="login-button"
        text="S'inscire"
        style={$tapButton}
        textStyle={{color: colors.palette.secondary100, }}
        preset="reversed"
        onPress={GoLogin}
      />

    <Text text="Continuer en tant que visiteur"   preset="subheading" style={$hint} />

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


