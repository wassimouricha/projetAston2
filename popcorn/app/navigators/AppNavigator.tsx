/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { ImageSourcePropType, useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import {
  FavPage,
  FriendsPage,
  ProfilePage,
  ModificationProfilePage,
  FirstScreen,
  HomePage, 
  LoginScreen, 
  RegisterScreen,
  WelcomeScreen,
  loadingSignInScreen,
} from "../screens"
import { DemoNavigator, TabParamList, } from "./MenuNavigator" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import CardDetailScreen from "../screens/homePageComponent/CardDetailScreen"



/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  First: undefined
  Home: undefined
  Login: undefined 
  Favoris: undefined
  Profile: undefined
  ModificationProfile: undefined
  Friends: undefined
  CardDetailScreen: { 
    titre?: string; 
    annee?: string;
    affiche?: ImageSourcePropType;
    genre?:string;
    duree?:string;
    synopsis?:string; 
    realisateur?:string; 
    distributions?:string;
  }; // Ajoutez les paramètres ici
  Register: undefined 
  loadingSignInScreen: undefined 
  Guest: undefined
  Demo: NavigatorScreenParams<TabParamList> // @demo remove-current-line
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? "Welcome" : "First"} 
    >
  
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
          <Stack.Screen name="Demo" component={DemoNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={LoginScreen}  />
          <Stack.Screen name="Favoris" component={FavPage}  />
          <Stack.Screen name="Friends" component={FriendsPage}  />
          <Stack.Screen name="Profile" component={ProfilePage}  />
          <Stack.Screen name="ModificationProfile" component={ModificationProfilePage}  />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
          <Stack.Screen name="loadingSignInScreen" component={loadingSignInScreen} />
          <Stack.Screen name="Guest" component={WelcomeScreen} />
          <Stack.Screen name="Demo" component={LoginScreen} />
        </>
      )}

      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
