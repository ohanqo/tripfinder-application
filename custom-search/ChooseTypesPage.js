import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextComponent from "../shared/components/TextComponent";
import {
  SPACING_LARGE,
  SPACING_LARGER,
  FONT_NORMAL,
  FONT_LARGER,
  SPACING_NORMAL,
  SPACING_MEDIUM,
  SPACING_SMALL,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import {
  COLOR_LIGHT_GREY,
  COLOR_WHITE,
  COLOR_PRIMARY,
} from "../shared/constants/Colors";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import BackIcon from "../shared/icons/back.svg";
import ChecBoxChecked from "../shared/icons/checkBox-checked.svg";
import ChecBoxUnchecked from "../shared/icons/checkBox-unchecked.svg";
import beach from "../shared/assets/images/beach.jpg";
import culture from "../shared/assets/images/culture.jpg";
import mountain from "../shared/assets/images/mountain.jpg";
import nightLiving from "../shared/assets/images/night-living.jpg";
import sport from "../shared/assets/images/sport.jpg";
import { PAGE_CHOOSE_TEMPERATURE } from "../shared/constants/Pages";

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
    <ScrollView style={styles.globalWrapper}>
      <StatusBar style="dark" />

      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon width={SPACING_MEDIUM} height={SPACING_MEDIUM} />
        </TouchableOpacity>
        <TextComponent style={styles.headline}>
          Qu'aimez vous faire lorsque vous voyagez ?
        </TextComponent>
      </View>

      <TextComponent style={styles.subHeadline}>
        Sélectionnez autant de centres d'intérêt que vous le souhaitez
      </TextComponent>

      <FlatList
        data={types}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatListStyle}
        columnWrapperStyle={styles.flatListRowStyle}
        numColumns="2"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.typeSelect}
            onPress={() => pressType(item)}
          >
            <ImageBackground
              source={item.image}
              style={styles.typeImage}
              imageStyle={styles.typeImage}
            >
              <View style={styles.typeInfoWrapper}>
                <LinearGradient
                  colors={["transparent", "rgba(0,0.2,0.5,0.8)"]}
                  style={styles.typeInfoLineWrapper}
                >
                  <TextComponent style={styles.typeLabel}>
                    {item.name}
                  </TextComponent>
                  {item.selected ? (
                    <ChecBoxChecked width="20" height="20" />
                  ) : (
                    <ChecBoxUnchecked width="20" height="20" />
                  )}
                </LinearGradient>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          goToNextPage();
        }}
      >
        <TextComponent style={styles.buttonText}>Suivant</TextComponent>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    marginTop: SPACING_LARGE,
    flex: 1,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingRight: SPACING_NORMAL,
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: SPACING_NORMAL,
    alignItems: "center",
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
  },
  subHeadline: {
    fontSize: FONT_NORMAL,
    fontFamily: FONT_BOLD,
    color: COLOR_LIGHT_GREY,
    textAlign: "center",
    paddingHorizontal: SPACING_LARGER,
  },
  flatListStyle: {
    marginTop: SPACING_LARGE,
  },
  flatListRowStyle: {
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: SPACING_SMALL,
  },
  typeSelect: {
    width: Dimensions.get("window").width / 2 - 20,
    height: Dimensions.get("window").width / 2 - 20,
    borderRadius: SPACING_NORMAL,
  },
  typeImage: {
    flex: 1,
    borderRadius: SPACING_NORMAL,
  },
  typeInfoWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  typeInfoLineWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING_SMALL,
    paddingVertical: SPACING_SMALL,
    borderRadius: SPACING_NORMAL,
  },
  typeLabel: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_NORMAL,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    marginHorizontal: SPACING_NORMAL,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    textAlign: "center",
  },
});

export default ChooseTypesPage;
