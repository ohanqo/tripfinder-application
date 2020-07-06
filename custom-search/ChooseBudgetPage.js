import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {
  SPACING_LARGE,
  SPACING_NORMAL,
  FONT_LARGER,
  SPACING_LARGER,
  SPACING_SMALLER,
  SPACING_SMALL,
} from "../shared/constants/Dimens";
import SliderLabelsComponent from "./SliderLabelsComponent";
import { COLOR_PRIMARY, COLOR_WHITE } from "../shared/constants/Colors";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { PAGE_CHOOSE_CONTINENT } from "../shared/constants/Pages";
import HeaderComponent from "../shared/components/HeaderComponent";

const ChooseBudgetPage = ({ route, navigation }) => {
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(600);
  let { filters } = route.params;

  const changeBudget = (e) => {
    setMinBudget(e[0]);
    setMaxBudget(e[1]);
  };

  const goToNextPage = () => {
    filters.minBudget = minBudget;
    filters.maxBudget = maxBudget;

    navigation.navigate(PAGE_CHOOSE_CONTINENT, { filters: filters });
  };

  return (
    <View style={styles.globalWrapper}>
      <HeaderComponent navigation={navigation}>
        <TextComponent style={styles.headline}>
          Choisissez votre budget pour le week-end
        </TextComponent>
      </HeaderComponent>

      <MultiSlider
        enableLabel={true}
        values={[0, 600]}
        max={600}
        customLabel={(e) => {
          return <SliderLabelsComponent props={e} isEuros={true} />;
        }}
        onValuesChangeFinish={(e) => {
          changeBudget(e);
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          goToNextPage();
        }}
      >
        <TextComponent style={styles.buttonText}>Suivant</TextComponent>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    marginTop: SPACING_LARGE,
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: SPACING_SMALL,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingRight: SPACING_NORMAL,
  },
  headerWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: SPACING_NORMAL,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_NORMAL,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    marginHorizontal: SPACING_NORMAL,
    width: Dimensions.get("window").width - SPACING_LARGER,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    textAlign: "center",
  },
});

export default ChooseBudgetPage;
