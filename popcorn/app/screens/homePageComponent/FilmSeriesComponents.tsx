import React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Text } from "../../components";
import { ImageSourcePropType } from "react-native";
import { colors } from "../../theme";

interface FilmItemProps {
  affiche: ImageSourcePropType;
  genre: string;
  annee: string;
  synopsis: string;
  realisateur: string;
  distributions: string;
  duree: string;
  titre: string;
  onPress: () => void;
}

export const FilmItem: React.FC<FilmItemProps> = ({
  affiche,
  genre,
  annee,
  duree,
  titre,
  synopsis,
  realisateur,
  distributions,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flex: 1,
        borderRadius: 30,
        overflow: "hidden",
        marginTop: 20,
        marginHorizontal: 10,
      }}
    >
      <ImageBackground source={affiche} style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{ paddingTop: 40 }}>
            <View style={{ height: 200 }}>
              <View style={{ flex: 2, width: 330, flexDirection: "column-reverse" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
                  <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize: 12 }}>
                    {genre}
                  </Text>
                  <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize: 12 }}>
                    {annee}
                  </Text>
                  <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize: 12 }}>
                    {duree}
                  </Text>
                </View>
                <Text preset="subheading" style={{ color: colors.palette.neutral100, alignItems: "center", marginHorizontal: 15 }}>
                  {titre}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

interface FilmMayLikeItemProps {
  affiche: ImageSourcePropType;
  genre: string;
  duree: string;
  titre: string;
  synopsis: string;
  realisateur: string;
  distributions: string;
}


export const FilmMayLikeItem: React.FC<FilmMayLikeItemProps> = ({ affiche, genre, duree, titre }) => (
  <View style={{ flex: 1, borderRadius: 30, overflow: "hidden", marginTop: 20, marginHorizontal: 10, width: 150 }}>
    <ImageBackground source={affiche} style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ paddingTop: 40 }}>
          <View style={{ height: 200 }}>
            <View style={{ flex: 2, width: 150, flexDirection: "column-reverse", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
                <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize: 8 }}>
                  {genre}
                </Text>
                <Text preset="subheading" style={{ color: colors.palette.neutral100, fontSize: 8 }}>
                  {duree}
                </Text>
              </View>
              <Text preset="subheading" style={{ color: colors.palette.neutral100, alignItems: "center", marginHorizontal: 15, fontSize: 8, width: 120 }}>
                {titre}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);
