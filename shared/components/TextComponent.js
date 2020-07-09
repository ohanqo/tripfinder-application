import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLOR_BLACK } from "../constants/Colors";
import { FONT_NORMAL } from "../constants/Dimens";
import { FONT_REGULAR } from "../constants/Fonts";

const TextComponent = ({ children, style }) => {
  return <Text style={[defaultStyle.text, { ...style }]}>{children}</Text>;
};

const defaultStyle = StyleSheet.create({
  text: {
    color: COLOR_BLACK,
    fontSize: FONT_NORMAL,
    fontFamily: FONT_REGULAR,
  },
});

export default TextComponent;
