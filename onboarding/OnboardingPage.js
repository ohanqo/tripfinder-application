import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import OnboardingAnimation from "../shared/assets/TripAnimation.svg";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_PRIMARY, COLOR_WHITE } from "../shared/constants/Colors";
import {
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_MEDIUM } from "../shared/constants/Fonts";
import { PAGE_NAVBAR } from "../shared/constants/Pages";

const OnboardingPage = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <OnboardingAnimation style={styles.image} />
      <TextComponent style={styles.text}>
        Trouver vos vacances idéales grâce à TripFinder
      </TextComponent>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace(PAGE_NAVBAR)}
      >
        <TextComponent style={styles.buttonText}>
          Commencer à voyager
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: COLOR_WHITE,
  },
  image: {
    marginTop: "50%",
    width: "100%",
    height: "50%",
  },
  text: {
    fontFamily: FONT_MEDIUM,
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_LARGER,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
  },
  buttonText: { color: COLOR_WHITE, fontFamily: FONT_BOLD },
});

export default OnboardingPage;
