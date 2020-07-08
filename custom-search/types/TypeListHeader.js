import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import HeaderComponent from "../../shared/components/HeaderComponent";
import TextComponent from "../../shared/components/TextComponent";
import { COLOR_LIGHT_GREY, COLOR_PRIMARY, COLOR_WHITE } from "../../shared/constants/Colors";
import {
  FONT_LARGER,
  FONT_NORMAL,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";
import { TouchableOpacity } from "react-native-gesture-handler";

const TypeListHeader = ({ navigation, onNextButtonClick }) => {
  return (
    <>
      <HeaderComponent navigation={navigation} style={styles.header}>
        <TextComponent style={styles.headline}>
          Qu'aimez vous faire lorsque vous voyagez ?
        </TextComponent>
      </HeaderComponent>

      <TextComponent style={styles.subHeadline}>
        Sélectionnez le centre d'intérêt de votre choix
      </TextComponent>

      <TouchableOpacity style={styles.button} onPress={onNextButtonClick}>
        <TextComponent style={styles.buttonText}>Passer</TextComponent>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width - 40,
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
  },
  subHeadline: {
    fontSize: FONT_NORMAL,
    fontFamily: FONT_BOLD,
    color: COLOR_LIGHT_GREY,
    textAlign: "center",
    paddingHorizontal: SPACING_LARGER,
    marginBottom: SPACING_LARGE,
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    margin: SPACING_NORMAL,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    textAlign: "center",
  },
});

export default TypeListHeader;
