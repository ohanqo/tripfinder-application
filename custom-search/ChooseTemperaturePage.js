import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {
  SPACING_LARGE,
  SPACING_NORMAL,
  FONT_LARGER,
  SPACING_MEDIUM,
  SPACING_LARGER,
  SPACING_SMALLER,
  SPACING_SMALL,
} from "../shared/constants/Dimens";
import BackIcon from "../shared/icons/back.svg";
import SliderLabelsComponent from "./SliderLabelsComponent";
import { COLOR_PRIMARY, COLOR_WHITE } from "../shared/constants/Colors";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { PAGE_CHOOSE_BUDGET } from "../shared/constants/Pages";
import HeaderComponent from "../shared/components/HeaderComponent";

const ChooseTemperaturePage = ({ route, navigation }) => {
  const [minTmp, setMinTmp] = useState(0);
  const [maxTmp, setMaxTmp] = useState(40);
  let { filters } = route.params;

  const changeTmp = (e) => {
    setMinTmp(e[0]);
    setMaxTmp(e[1]);
  };

  const goToNextPage = () => {
    filters.minTmp = minTmp;
    filters.maxTmp = maxTmp;

    navigation.navigate(PAGE_CHOOSE_BUDGET, { filters: filters });
  };

  return (
    <View style={styles.globalWrapper}>
      <HeaderComponent navigation={navigation}>
        <TextComponent style={styles.headline}>
          Choisissez votre température idéale
        </TextComponent>
      </HeaderComponent>

      <MultiSlider
        enableLabel={true}
        values={[0, 40]}
        max={40}
        customLabel={(e) => {
          return <SliderLabelsComponent props={e} isEuros={false} />;
        }}
        onValuesChangeFinish={(e) => {
          changeTmp(e);
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
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    
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

export default ChooseTemperaturePage;
