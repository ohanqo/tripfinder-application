import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SPACING_NORMAL,
  FONT_LARGER,
  SPACING_LARGE,
  FONT_NORMAL,
  SPACING_LARGER,
  SPACING_MEDIUM,
} from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";
import { COLOR_LIGHT_GREY } from "../../shared/constants/Colors";
import BackIcon from "../../shared/icons/back.svg";
import TextComponent from "../../shared/components/TextComponent";
import HeaderComponent from "../../shared/components/HeaderComponent";

const TypeListHeader = ({ navigation }) => {
  return (
    <>
      <HeaderComponent navigation={navigation}>
        <TextComponent style={styles.headline}>
          Qu'aimez vous faire lorsque vous voyagez ?
        </TextComponent>
      </HeaderComponent>

      <TextComponent style={styles.subHeadline}>
        Sélectionnez autant de centres d'intérêt que vous le souhaitez
      </TextComponent>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default TypeListHeader;
