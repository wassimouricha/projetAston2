// Interested in migrating from FlatList to FlashList? Check out the recipe in our Ignite Cookbook
// https://infinitered.github.io/ignite-cookbook/docs/MigratingToFlashList
import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground
} from "react-native";
import { AppStackScreenProps } from "../navigators/AppNavigator";
import Swiper from "react-native-deck-swiper";
import { SwipeCard } from "./swipePageComponent/SwipeCard";
import testData from "../data/testData";

const background = require("../../assets/images/background.png");

interface SwipePageProps extends AppStackScreenProps<"Friends"> { }

export const SwipePage: FC<SwipePageProps> = observer(function SwipePage(
  _props
) {

  const [index, setIndex] = React.useState(0);

  const onSwiped = () => {
    setIndex((index + 1) % testData.length);
    console.log('SWIPE ' + index);
    console.log(testData.length - index);
  }

  return (

    <ImageBackground
      source={background}
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}
    >
      <View style={styles.container}>
        <Swiper
          cards={testData}
          cardIndex={index}
          renderCard={(card) => <SwipeCard card={card} />}
          onSwiped={onSwiped}
          stackSize={testData.length}
          stackScale={1} //écartement intérieur pour les éléments en dessous de la pile
          stackSeparation={1} //écartement vertical des éléments en dessous de la pile
          disableBottomSwipe //désactiver le swipe vers le bas
          disableTopSwipe //désactiver le swipe vers le haut
          animateOverlayLabelsOpacity //affichage en fondu du LIKE/DISLIKE
          animateCardOpacity //Disparition en fondu de la card
          overlayLabels={
            {
              left: {
                title: 'DISLIKE',
                style: {
                  label: {
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: 26
                  },
                  wrapper: {
                    flexDisrection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: -20
                  }
                }
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: 'green',
                    color: 'white',
                    fontSize: 26
                  },
                  wrapper: {
                    flexDisrection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 20
                  }
                }
              }
            }
          }
        />
      </View>
    </ImageBackground>
  )

})

// #region Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
// #endregion

// @demo remove-file