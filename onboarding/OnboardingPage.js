import { AppLoading } from "expo";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
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
import { PAGE_HOME } from "../shared/constants/Pages";
import { HAS_SEEN_ONBOARDING } from "../shared/constants/Preferences";

const OnboardingPage = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shouldPassOnboarding = async () => {
      const hasSeenOnboarding = await SecureStore.getItemAsync(
        HAS_SEEN_ONBOARDING,
      );

      !!hasSeenOnboarding ? navigation.replace(PAGE_HOME) : setIsLoading(false);
    };

    shouldPassOnboarding();
  }, []);

  const onButtonClick = async () => {
    SecureStore.setItemAsync(HAS_SEEN_ONBOARDING, "true");
    navigation.replace(PAGE_HOME);
  };

  const onboarding = () => (
    <View style={styles.background}>
      <OnboardingAnimation style={styles.image} />
      <TextComponent style={styles.text}>
        Trouver vos vacances idéales grâce à TripFinder
      </TextComponent>
      <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <TextComponent style={styles.buttonText}>
          Commencer à voyager
        </TextComponent>
      </TouchableOpacity>
    </View>
  );

  return isLoading ? <AppLoading /> : onboarding();
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
