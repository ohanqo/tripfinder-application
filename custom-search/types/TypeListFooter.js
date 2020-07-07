import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextComponent from "../../shared/components/TextComponent";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../shared/constants/Colors";
import {
  SPACING_LARGE,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";

const TypeListFooter = ({ onButtonClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onButtonClick}>
      <TextComponent style={styles.buttonText}>Suivant</TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default TypeListFooter;
