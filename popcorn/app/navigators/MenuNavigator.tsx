import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import {  FavPage, FriendsPage, HomePage, ProfilePage } from "../screens"
import { DemoPodcastListScreen } from "../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type TabParamList = {
  DemoCommunity: undefined
  DemoShowroom: { queryIndex?: string; itemIndex?: string }
  SwipeMovies: undefined
  Accueil: undefined
  Profil: undefined
  Favoris: undefined
  Friends: undefined
  DemoDebug: undefined
  DemoPodcastList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HomePage}
        options={{
          tabBarLabel: translate("demoNavigator.accueilTab"),
          tabBarIcon: ({ focused }) => <Icon icon="home" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="Profil"
        component={ProfilePage}
        options={{
          tabBarLabel: translate("demoNavigator.profilTab"),
          tabBarIcon: ({ focused }) => <Icon icon="profil" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="SwipeMovies"
        component={DemoPodcastListScreen}
        options={{
          tabBarLabel: translate("demoNavigator.swipeMoviesTab"),
          tabBarIcon: () => <Icon icon="swipemovies" />,
        }}
      />

      <Tab.Screen
        name="Favoris"
        component={FavPage}
        options={{
          tabBarLabel: translate("demoNavigator.favorisTab"),
          tabBarIcon: ({ focused }) => <Icon icon="favoris" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="Friends"
        component={FriendsPage}
        options={{
          tabBarLabel: translate("demoNavigator.friendsTab"),
          tabBarIcon: ({ focused }) => <Icon icon="friends" color={focused && colors.tint} />,
        }}
      />


    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}

// @demo remove-file
