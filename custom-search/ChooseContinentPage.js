import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Switch, View, Picker } from "react-native";
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
import { PAGE_SEARCH_RESULTS } from "../shared/constants/Pages";

const ChooseContinentPage = ({ route, navigation }) => {
  const [continents, setContinents] = useState([""]);
  const [selectedContinent, setSelectedContinent] = useState(0);
  let { filters } = route.params;

  useEffect(() => {
    setContinents([
      "Tous",
      "Europe",
      "Amérique du Nord",
      "Amérique du Sud",
      "Asie",
      "Afrique",
      "Océanie",
    ]);
  }, []);

  const goToResults = () => {
    if (selectedContinent !== 0) {
      filters.continent = continents[selectedContinent];
    }

    navigation.navigate(PAGE_SEARCH_RESULTS, { filters: filters });
  };

  return (
    <View style={styles.globalWrapper}>
      <HeaderComponent navigation={navigation}>
        <TextComponent style={styles.headline}>
          Choisissez les continents qui vous intéressent
        </TextComponent>
      </HeaderComponent>
      <View style={styles.continentsWrapper}>
        <Picker
          selectedValue={selectedContinent}
          onValueChange={(index) => {
            setSelectedContinent(index);
          }}
        >
          {continents.map((item) => {
            return (
              <Picker.Item
                key={continents.indexOf(item).toString()}
                label={item}
                value={continents.indexOf(item)}
              />
            );
          })}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={goToResults}>
        <TextComponent style={styles.buttonText}>
          Voir les résultats
        </TextComponent>
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
    alignSelf: "center",
    width: Dimensions.get("window").width - 40,
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
  },
  continentsWrapper: {
    display: "flex",
    width: "100%",
    paddingHorizontal: SPACING_NORMAL,
  },
  continentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SPACING_NORMAL,
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

export default ChooseContinentPage;
