import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import HeaderComponent from "../../shared/components/HeaderComponent";
import TextComponent from "../../shared/components/TextComponent";
import { COLOR_LIGHT_GREY } from "../../shared/constants/Colors";
import {
  FONT_LARGER,
  FONT_NORMAL,
  SPACING_LARGE,
  SPACING_LARGER,
} from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";

const TypeListHeader = ({ navigation }) => {
  return (
    <>
      <HeaderComponent navigation={navigation} style={styles.header}>
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
});

export default TypeListHeader;
