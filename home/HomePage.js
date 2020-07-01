import React from "react";
import { Text, Image, TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import headerBackground from "../shared/assets/images/landscape.png"
import { SPACING_NORMAL, SPACING_SMALL, SPACING_TINY, SPACING_SMALLER } from "../shared/constants/Dimens";
import { COLOR_BLACK, COLOR_WHITE, COLOR_PRIMARY } from "../shared/constants/Colors";
import SearchIcon from "../shared/icons/search-icon.svg";
import { FONT_BOLD } from "../shared/constants/Fonts";

const HomePage = ({ navigation }) => {
  return (<View style={styles.wrapper}>
    <Image style={styles.image} source={headerBackground}/>
    <TextComponent style={styles.headline}>Découverte</TextComponent>
    <View style={styles.inputWrapper}>
      <SearchIcon style={styles.icon} width="20" height="20"/>
      <TextInput style={styles.input} placeholder="Où voulez vous aller ?"/>
    </View>
    
    
  </View>);
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: "30%",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 1,
    position: "absolute"
  },
  headline: {
    fontSize: 30,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
    alignSelf: "flex-start",
    marginStart: "5%",
    marginTop: "30%",
    marginBottom: "8%",
  },
  inputWrapper: {
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
    shadowOffset:{
      width:1,
      height:1
    }

  },
  icon:{
    marginStart: 10,
  },
  input:{
    paddingStart:10,
    height: 50,
  }
});

export default HomePage;
