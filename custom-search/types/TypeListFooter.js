import React from "react";
import { StyleSheet } from "react-native";
import TextComponent from "../../shared/components/TextComponent";
import {
  SPACING_LARGE,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";
import { COLOR_WHITE, COLOR_PRIMARY } from "../../shared/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const TypeListFooter = ({ onButtonClick }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onButtonClick();
      }}
    >
      <TextComponent style={styles.buttonText}>Suivant</TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_NORMAL,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    marginHorizontal: SPACING_NORMAL,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    textAlign: "center",
  },
});

export default TypeListFooter;
