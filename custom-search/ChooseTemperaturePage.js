import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderComponent from "../shared/components/HeaderComponent";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_PRIMARY, COLOR_WHITE } from "../shared/constants/Colors";
import {
  FONT_LARGER,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { PAGE_CHOOSE_BUDGET } from "../shared/constants/Pages";
import SliderLabelsComponent from "./SliderLabelsComponent";

const ChooseTemperaturePage = ({ route, navigation }) => {
  const [minTemperature, setMinTemperature] = useState(1);
  const [maxTemperature, setMaxTemperature] = useState(40);
  let { filters } = route.params;

  const changeTemperature = (e) => {
    setMinTemperature(e[0]);
    setMaxTemperature(e[1]);
  };

  const goToNextPage = () => {
    filters.minTemperature = minTemperature;
    filters.maxTemperature = maxTemperature;

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
        values={[1, 40]}
        max={40}
        min={1}
        customLabel={(e) => {
          return <SliderLabelsComponent props={e} isEuros={false} />;
        }}
        onValuesChangeFinish={changeTemperature}
      />

      <TouchableOpacity style={styles.button} onPress={goToNextPage}>
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
    alignSelf: "center",
    width: Dimensions.get("window").width - 40,
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
