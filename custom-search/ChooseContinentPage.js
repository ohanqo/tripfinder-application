import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Switch, View } from "react-native";
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
  const [continents, setContinents] = useState([{}]);
  let { filters } = route.params;

  useEffect(() => {
    setContinents([
      { id: 1, name: "Europe", selected: true },
      { id: 2, name: "Amérique du Nord", selected: true },
      { id: 3, name: "Amérique du Sud", selected: true },
      { id: 4, name: "Asie", selected: true },
    ]);
  }, []);

  const goToResults = () => {
    let continentsSelected = [];

    for (const continent of continents) {
      if (continent.selected) {
        continentsSelected.push(continent.name);
      }
    }

    filters.continent = continentsSelected;
    navigation.navigate(PAGE_SEARCH_RESULTS, { filters: filters });
  };

  let pressContient = (continent) => {
    let index = continents.indexOf(continent);
    continent.selected = continent.selected ? false : true;
    let newContinents = JSON.parse(JSON.stringify(continents));
    newContinents[index] = continent;
    setContinents(newContinents);
  };

  return (
    <View style={styles.globalWrapper}>
      <HeaderComponent navigation={navigation}>
        <TextComponent style={styles.headline}>
          Choisissez les continents qui vous intéressent
        </TextComponent>
      </HeaderComponent>
      <View style={styles.continentsWrapper}>
        {continents.map((item, index) => {
          return (
            <View style={styles.continentWrapper} key={index}>
              <TextComponent>{item.name}</TextComponent>
              <Switch
                value={item.selected}
                onValueChange={() => pressContient(item)}
              />
            </View>
          );
        })}
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
