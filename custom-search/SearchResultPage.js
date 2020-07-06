import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Switch } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SPACING_LARGE,
  SPACING_NORMAL,
  FONT_LARGER,
  SPACING_MEDIUM,
  SPACING_LARGER,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import BackIcon from "../shared/icons/back.svg";
import SliderLabels from "./SliderLabels";
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_LIGHT_GREY,
} from "../shared/constants/Colors";
import { FONT_BOLD } from "../shared/constants/Fonts";

const SearchResultPage = ({ route, navigation }) => {
  let { filters } = route.params;

  useEffect(() => {
    console.log(filters);
  }, []);

  return (
    <View style={styles.globalWrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon width={SPACING_MEDIUM} height={SPACING_MEDIUM} />
        </TouchableOpacity>
        <TextComponent style={styles.headline}>
          Résultats de votre recherche
        </TextComponent>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          goToNextPage();
        }}
      >
        <TextComponent style={styles.buttonText}>
          Voir les résultats
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    marginTop: SPACING_LARGE,
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backButton: {
    alignSelf: "flex-start",
    paddingRight: SPACING_NORMAL,
  },
  headerWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: SPACING_NORMAL,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
    marginRight: SPACING_LARGER,
    paddingRight: SPACING_LARGE,
  },
  continentsWrapper: {
    display: "flex",
    width: "100%",
    paddingHorizontal: SPACING_NORMAL,
  },
  continentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SPACING_NORMAL,
  },
  continentName: {},
  button: {
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_NORMAL,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    marginHorizontal: SPACING_NORMAL,
    width: Dimensions.get("window").width - SPACING_LARGER,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    textAlign: "center",
  },
});

export default SearchResultPage;
