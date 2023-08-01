import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, ViewStyle , Image, ImageStyle, Pressable} from "react-native"
import { Button, Icon, Screen, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"




interface LoginScreenProps extends AppStackScreenProps<"Login"> {}
const logo = require("../../assets/images/logopop.png")
const popcornlogo = require("../../assets/images/popcornlogo.png")

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: {
      authEmail,
      authPassword,
      setAuthEmail,
      setAuthPassword,
      setAuthToken,
      validationErrors,
    },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // ici je pré-remplis les inputs 
    setAuthEmail("wassim.bouricha@popcorn.fr")
    setAuthPassword("wassim")
  }, [])

  const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

  const handleLogin = async () => {

    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    // fait une requete au serveur afin d'avoir le token d'authentification
    // si ok , reset les champs et donne le token
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // pour l'instant c'est un fake token.
    setAuthToken(String(Date.now()))
  }

  // pour afficher mon icone droit de mot de passe
  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

   // pour afficher mon icone gauche de mot de passe
  const PasswordLeftAccessory = useMemo(
    () =>
      function PasswordLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={"lock"}
            color={colors.palette.red}
            containerStyle={props.style}
          
          />
        )
      },
    [isAuthPasswordHidden],
  )
   // pour afficher mon icone gauche de l'email
  const EmailLeftAccessory = useMemo(
    () =>
      function PasswordLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={"user"}
            color={colors.palette.red}
            containerStyle={props.style}
          
          />
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  function GoFirst() {
    console.log("firstPAGE")
    _props.navigation.navigate("First")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Pressable onPress={GoFirst}>
      <Image style={$signupLogo} source={logo} resizeMode="contain"  />
      </Pressable>
      <Image style={$popcornLogo} source={popcornlogo} resizeMode="contain" />

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        inputWrapperStyle={$ContainertextField}
        label="Adresse E-mail"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        placeholderTx="loginScreen.emailFieldPlaceholder"
        LeftAccessory={ EmailLeftAccessory }
        helper={errors?.authEmail}
        status={errors?.authEmail ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />
      


      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        inputWrapperStyle={$ContainertextField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        label="Mot de passe"
        placeholderTx="loginScreen.passwordFieldPlaceholder"
        helper={errors?.authPassword}
        status={errors?.authPassword ? "error" : undefined}
        onSubmitEditing={handleLogin}
        LeftAccessory={ PasswordLeftAccessory }
        RightAccessory={PasswordRightAccessory}
      />


      <Button
        testID="login-button"
        text="Se connecter"
        style={$tapButton}
        textStyle={{color: colors.palette.secondary100, }}
        preset="reversed"
        onPress={handleLogin}
      />


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
