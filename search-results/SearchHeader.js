import React from "react";
import { ImageBackground, View, StyleSheet, Dimensions } from "react-native";
import GoBackComponent from "../shared/components/GoBackComponent";
import { LinearGradient } from "expo-linear-gradient";
import TextComponent from "../shared/components/TextComponent";
import travelImage from "../shared/assets/images/travel.jpg";
import { SPACING_NORMAL, SPACING_LARGER, FONT_LARGER, FONT_HEADLINE, SPACING_LARGE } from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { COLOR_WHITE } from "../shared/constants/Colors";

const SearchHeader = ({navigation}) => {
  return (
    <ImageBackground
      source={travelImage}
      style={styles.backgroundHeaderImage}
      imageStyle={styles.backgroundHeaderImage}
    >
      <View style={styles.darkerBackground}>
        <GoBackComponent
          style={styles.backButton}
          isWhite={true}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0.2,0.5,0.8)"]}
          style={styles.typeInfoLineWrapper}
        >
          <TextComponent style={styles.headline}>
            Résultat de votre recherche
          </TextComponent>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundHeaderImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
  },
  backButton: {
    paddingStart: SPACING_NORMAL,
  },
  darkerBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: SPACING_LARGER,
  },
  headline: {
    fontSize: FONT_LARGER,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
    fontSize: FONT_HEADLINE,
    paddingBottom: SPACING_LARGE,
    paddingStart: SPACING_NORMAL,
    marginTop: SPACING_LARGER,
  },
})

export default SearchHeader;
