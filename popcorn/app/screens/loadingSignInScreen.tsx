import { observer } from "mobx-react-lite"
import React, { FC, useEffect, } from "react"
import { ViewStyle , Image, ImageStyle, TextStyle, } from "react-native"
import {  Screen, Text  } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"



interface loadingSignInScreenProps extends AppStackScreenProps<"loadingSignInScreen"> {}
const logo = require("../../assets/images/logopop.png")
const popcornlogo = require("../../assets/images/popcornlogo.png")

export const loadingSignInScreen: FC<loadingSignInScreenProps> = observer(function LoadingSignInScreen(_props) {

  useEffect(() => {
 setTimeout(() => {
    // Naviguer vers la page suivante
    console.log("LoginPage")
    _props.navigation.navigate("Login")
  }, 2000); // 2000ms = 2 secondes
  }, [])



  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
        <Image style={$signupLogo} source={logo} resizeMode="contain"  />
        <Text text="Chargement de la page d'inscription"   preset="subheading" style={$enterDetails} />

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  display:"flex",
  alignContent:"center",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}

const $ContainertextField: ViewStyle = {
  borderRadius: 80,
  backgroundColor: colors.palette.gray  ,
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