import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList } from "react-native";
import { SPACING_LARGE, SPACING_SMALL } from "../../shared/constants/Dimens";
import beach from "../../shared/assets/images/beach.jpg";
import culture from "../../shared/assets/images/culture.jpg";
import mountain from "../../shared/assets/images/mountain.jpg";
import nightLiving from "../../shared/assets/images/night-living.jpg";
import sport from "../../shared/assets/images/sport.jpg";
import { PAGE_CHOOSE_TEMPERATURE } from "../../shared/constants/Pages";
import TypeListHeader from "./TypeListHeader";
import TypeListFooter from "./TypeListFooter";
import TypeItemComponent from "./TypeItemComponent";

const ChooseTypesPage = ({ navigation }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes([
      { id: 1, name: "Montagne", selected: false, image: mountain },
      { id: 2, name: "Plage", selected: false, image: beach },
      { id: 3, name: "Vie Nocturne", selected: false, image: nightLiving },
      { id: 4, name: "Culture", selected: false, image: culture },
      { id: 5, name: "Sport", selected: false, image: sport },
    ]);
  }, []);

  let pressType = (type) => {
    let index = types.indexOf(type);
    type.selected = type.selected ? false : true;
    let newTypes = JSON.parse(JSON.stringify(types));
    newTypes[index] = type;
    setTypes(newTypes);
  };

  let goToNextPage = () => {
    let chosenTypes = [];
    for (const type of types) {
      if (type.selected) {
        chosenTypes.push(type.name);
      }
    }
    navigation.navigate(PAGE_CHOOSE_TEMPERATURE, {
      filters: { types: chosenTypes },
    });
  };

  return (
    <View style={styles.globalWrapper}>
      <StatusBar style="dark" />

      <FlatList
        ListHeaderComponent={<TypeListHeader navigation={navigation} />}
        data={types}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.flatListRowStyle}
        numColumns="2"
        scrollEnabled={true}
        renderItem={({ item }) => (
          <TypeItemComponent item={item} onPress={(item) => pressType(item)} />
        )}
        ListFooterComponent={
          <TypeListFooter onButtonClick={() => goToNextPage()} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    marginTop: SPACING_LARGE,
  },
  flatListRowStyle: {
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: SPACING_SMALL,
  },
});

export default ChooseTypesPage;
