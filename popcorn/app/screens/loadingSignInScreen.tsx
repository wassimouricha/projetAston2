import { observer } from "mobx-react-lite"
import React, { FC, useEffect, } from "react"
import { ViewStyle , Image, ImageStyle, TextStyle, } from "react-native"
import {  Screen, Text  } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import  Gif  from 'react-native-gif';



interface loadingSignInScreenProps extends AppStackScreenProps<"loadingSignInScreen"> {}
const popgif = require("../../assets/images/popgif.gif")
const loadinggif = require("../../assets/images/loading.gif")
const popcornlogo = require("../../assets/images/popcornlogo.png")

export const loadingSignInScreen: FC<loadingSignInScreenProps> = observer(function LoadingSignInScreen(_props) {

  useEffect(() => {
 setTimeout(() => {
    // Naviguer vers la page suivante
    console.log("LoginPage")
    _props.navigation.navigate("Login")
  }, 3000); // 3000ms = 3 secondes
  }, [])



  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      
        <Gif source={popgif} style={{ width: '100%', height: 200 }} />
        <Image style={$signupLogo} source={popcornlogo} resizeMode="contain"  />
        <Gif source={loadinggif} style={{ width: '100%', height: 100 }} />
        <Text text="Chargement de la page de connexion"   preset="subheading" style={$enterDetails} />

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  display:"flex",
  alignContent:"center",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}


const $signupLogo: ImageStyle = {
  display:"flex",
  justifyContent:"center",
  height: 269,
  width: 350,
  alignItems: "center",
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $enterDetails: TextStyle = {
    display:"flex",
    marginBottom: spacing.large,
    alignItems: "center",
    justifyContent:"center",
    color: colors.palette.red,
    paddingHorizontal: spacing.large,
    fontSize: 12,
  }