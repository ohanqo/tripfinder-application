import React from "react";
import TextComponent from "../shared/components/TextComponent";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PAGE_LOGIN, PAGE_REGISTER } from "../shared/constants/Pages";
import { COLOR_WHITE, COLOR_PRIMARY, COLOR_LIGHT_GREY } from "../shared/constants/Colors";
import {
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_LARGE,
  SPACING_SMALLER,
  SPACING_MEDIUM,
  FONT_NORMAL,
  FONT_LARGE,
} from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_MEDIUM } from "../shared/constants/Fonts";

const DisconnectedComponent = ({ navigation }) => {
  return (
    <View style={styles.globalWrapper}>
      <TextComponent style={styles.subHeadLine}>En vous connectant vous débloquerez toutes les fonctionnalités de Trip Finder</TextComponent>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate(PAGE_LOGIN)}
      >
        <TextComponent style={styles.loginButtonText}>Connexion</TextComponent>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate(PAGE_REGISTER)}
      >
        <TextComponent style={styles.registerButtonText}>
          S'inscrire
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginHorizontal: SPACING_LARGE,
    marginVertical: 50,
  },
  subHeadLine: {
    textAlign: "center",
    fontSize: FONT_LARGE,
    fontFamily: FONT_BOLD,
    color: COLOR_LIGHT_GREY,
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_WHITE,
    marginVertical: SPACING_LARGER,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderWidth: 2,
    borderRadius: SPACING_SMALLER,
    borderColor: COLOR_PRIMARY,
  },
  loginButtonText: {
    color: COLOR_PRIMARY,
    fontFamily: FONT_BOLD,
  },
  registerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    marginBottom: SPACING_LARGER,
    
  },
  registerButtonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
  },
});
export default DisconnectedComponent;
