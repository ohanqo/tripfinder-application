import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import headerBackground from "../shared/assets/images/landscape.png";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_BLACK, COLOR_WHITE } from "../shared/constants/Colors";
import { SPACING_SMALLER } from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_MEDIUM } from "../shared/constants/Fonts";
import SearchIcon from "../shared/icons/search-icon.svg";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={headerBackground} />
      <TextComponent style={styles.headline}>Découverte</TextComponent>
      <View style={styles.inputWrapper}>
        <SearchIcon style={styles.icon} width="20" height="20" />
        <TextInput style={styles.input} placeholder="Où voulez vous aller ?" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: 250,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 1,
    position: "absolute",
  },
  headline: {
    fontSize: 30,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
    alignSelf: "flex-start",
    marginStart: "5%",
    marginTop: 150,
    marginBottom: 35,
  },
  inputWrapper: {
    display: "flex",
    marginTop: 0,
    backgroundColor: COLOR_WHITE,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: SPACING_SMALLER,
    width: "90%",

    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 15,
  },
  icon: {
    marginStart: 10,
  },
  input: {
    paddingHorizontal: 10,
    height: 50,
    fontFamily: FONT_MEDIUM,
    flex: 1,
  },
});

export default HomePage;
