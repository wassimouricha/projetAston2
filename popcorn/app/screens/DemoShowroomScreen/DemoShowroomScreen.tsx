import { Link, RouteProp, useRoute } from "@react-navigation/native"
import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import {
  Image,
  ImageStyle,
  SectionList,
  TextStyle,
  View,
  ViewStyle,
  ScrollView,
  ImageBackground, 
  TextInput ,
} from "react-native"
import {   Screen, Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import * as Demos from "./demos"


const logo = require("../../../assets/images/logo.png")
const thierry = require("../../../assets/images/thierry.jpg")
const films = [
  {
    affiche: require("../../../assets/images/spiderman.jpg"),
    genre: "Action",
    annee: "2023",
    duree: "2h30min",
    titre: "Spider-Man: Across the spider-verse",
  },
  {
    affiche: require("../../../assets/images/gardian.jpg"),
    genre: "Action",
    annee: "2023",
    duree: "2h30min",
    titre: "Gardiens de la galaxie 3",
  },
  {
    affiche: require("../../../assets/images/wick.jpg"),
    genre: "Action",
    annee: "2023",
    duree: "2h49min",
    titre: "John Wick - Chapitre 4",
  },
  {
    affiche: require("../../../assets/images/fraise.jpg"),
    genre: "Drame",
    annee: "2023",
    duree: "1H39min",
    titre: "Omar la fraise",
  },
]
const series = [
  {
    affiche: require("../../../assets/images/lastof.jpeg"),
    genre: "Drame",
    annee: "2023",
    duree: "1 saison",
    titre: "The Last of us",
  },
  {
    affiche: require("../../../assets/images/boys.jpg"),
    genre: "Action",
    annee: "2019",
    duree: "3 saisons",
    titre: "The Boys",
  },
  {
    affiche: require("../../../assets/images/mando.jpg"),
    genre: "Space western",
    annee: "2019",
    duree: "3 saisons",
    titre: "The Mandalorian",
  },
  {
    affiche: require("../../../assets/images/bear.jpg"),
    genre: "Comédie dramatique",
    annee: "2022",
    duree: "1 saison",
    titre: "The bear",
  },
]
const FilmMayLike = [
  {
    affiche: require("../../../assets/images/matrix.jpg"),
    genre: "SF",
    duree: "2h 15min",
    titre: "Matrix",
  },
  {
    affiche: require("../../../assets/images/nope.jpg"),
    genre: "Horreur",
    annee: "2022",
    duree: "2h 10min",
    titre: "Nope",
  },
  {
    affiche: require("../../../assets/images/prey.jpeg"),
    genre: "Action/SF",
    annee: "2019",
    duree: "1h 40min",
    titre: "Prey",
  },
  {
    affiche: require("../../../assets/images/kimi.jpg"),
    genre: "Comédie dramatique",
    annee: "2022",
    duree: "1h 29min",
    titre: "KIMI",
  },
]


export interface Demo {
  name: string
  description: string
  data: ReactElement[]
}

interface DemoListItem {
  item: { name: string; useCases: string[] }
  sectionIndex: number
  handleScroll?: (sectionIndex: number, itemIndex?: number) => void
}



export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {

    const listRef = useRef<SectionList>()
    const loggedName = "Thierry"

    // mon composant de carte film contenu dans le scrollview horizontal
    const FilmItem = ({ affiche, genre, annee, duree, titre }) => (
      <View style={{ flex: 1, borderRadius: 30, overflow: 'hidden', marginTop: 20, marginHorizontal: 10 }}>
        <ImageBackground source={affiche} style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ paddingTop: 40 }}>
              <View style={{ height: 200 }}>
                <View style={{ flex: 2, width: 330, flexDirection: 'column-reverse' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginHorizontal:15}}>
                    <Text preset="subheading" style={{ color: colors.palette.neutral100  , fontSize:12}}>{genre}</Text>
                    <Text preset="subheading" style={{ color: colors.palette.neutral100 , fontSize:12 }}>{annee}</Text>
                    <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize:12 }}>{duree}</Text>
                  </View>
                  <Text preset="subheading" style={{ color: colors.palette.neutral100, alignItems: 'center' ,marginHorizontal:15}}>{titre}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
    
    // mon deuxieme composant de carte film contenu dans le scrollview horizontal mais différent
    const FilmMayLikeItem = ({ affiche, genre, duree, titre }) => (
      <View style={{ flex: 1, borderRadius: 30, overflow: 'hidden', marginTop: 20, marginHorizontal: 10  , width:150}}>
        <ImageBackground source={affiche} style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ paddingTop: 40 }}>
              <View style={{ height: 200 }}>
                <View style={{ flex: 2, width: 150, flexDirection: 'column-reverse' ,justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:15}}>
                    <Text preset="subheading" style={{ color: colors.palette.neutral100  , fontSize:8}}>{genre}</Text>
                    <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize:8 }}>{duree}</Text>
                  </View>
                  <Text preset="subheading" style={{ color: colors.palette.neutral100, alignItems: 'center' ,marginHorizontal:15 ,  fontSize:8 , width:120}}>{titre}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
    

    return (

        <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>


          <SectionList
            ref={listRef}
            contentContainerStyle={$sectionListContentContainer}
            stickySectionHeadersEnabled={false}
            sections={Object.values(Demos)}
            renderItem={({ item }) => item}
            renderSectionFooter={() => <View style={$demoUseCasesSpacer} />}
            ListHeaderComponent={

              <View style={{marginTop:20}}>
                <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'  }}>
                  <Image source={thierry} style={{height: 70, width: 70, marginRight: 10 , borderRadius:40 , marginLeft :60}} />
                  <View>
                  <Text preset="subheading" style={ {width: 300 }}>
              Salut{" "}
              <Text preset="subheading" style={$loggedName}>
                {loggedName} 
              </Text>
              <Text> !</Text>
            </Text>
              <Text style={{width:250 , fontSize:12}}> C'est quoi ton film aujourd'hui ?</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' ,backgroundColor: colors.palette.gray, width:350 , borderRadius:40 , marginTop:10 , marginBottom:10}}>
                   {/* Input de recherche */}
                   <Image source={require("../../../assets/images/search.png")} style={{ height: 30, width: 30, marginRight:20}} />
                      <TextInput
                      placeholder="Rechercher votre film/série..."
                      style={{ backgroundColor: colors.palette.gray, margin: 10, paddingHorizontal: 10, borderRadius: 8, height: 40 }}
                      onChangeText={(text) => {

                      }}
                    />
                
                </View>


                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text preset="subheading" >Sortie de la semaine</Text>
                    </View>
                      {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {films.map((film, index) => (
                        <FilmItem key={index} {...film} />
                      ))}
                    </ScrollView>
        
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
                      <Text preset="subheading" >Série à la une </Text>
                    </View>
                            {/* Composant de scrolling horizontal contenant mes cartes des series a la une */}
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {series.map((film, index) => (
                        <FilmItem key={index} {...film} />
                      ))}
                    </ScrollView>
        
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , marginTop:20}}>
                      <Text preset="subheading" >Vous aimerez peut-être </Text>
                    </View>

                      {/* Composant de scrolling horizontal contenant mes cartes des sorties de la semaine */}
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {FilmMayLike.map((film, index) => (
                        <FilmMayLikeItem key={index} {...film} />
                      ))}
                    </ScrollView>
              </View>
            }
          />
        </Screen>
    )
  }

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  display:"flex",
  alignContent:"center",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $sectionListContentContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
}

const $demoUseCasesSpacer: ViewStyle = {
  paddingBottom: spacing.huge,
}

const $loggedName: TextStyle = {
  color: colors.palette.red,
}


