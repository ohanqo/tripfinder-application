import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import headerBackground from "../shared/assets/images/landscape.png";
import LocationComponent from "../shared/components/LocationComponent";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from "../shared/constants/Colors";
import {
  FONT_SMALL,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALL,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_LIGHT, FONT_MEDIUM } from "../shared/constants/Fonts";
import { PAGE_DESTINATION_LIST } from "../shared/constants/Pages";
import { SET_CITIES } from "../shared/constants/Types";
import { StoreContext } from "../shared/context/Context";
import ArrowRight from "../shared/icons/arrow-right.svg";
import SearchIcon from "../shared/icons/search-icon.svg";
import CityService from "../shared/services/CityService";
import { SERVER_URL } from "../shared/services/service";

const HomePage = ({ navigation }) => {
  const [cities, setCities] = useState([]);
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    async function fetchData() {
      const response = await CityService.getCities();
      dispatch({ type: SET_CITIES, payload: response });

      const firstCities = response.filter((_, index) => index < 5);
      setCities(firstCities);
    }

    fetchData();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={headerBackground} />
      <TextComponent style={styles.headline}>Découverte</TextComponent>
      <View style={styles.inputWrapper}>
        <SearchIcon style={styles.icon} width="20" height="20" />
        <TextInput style={styles.input} placeholder="Où voulez vous aller ?" />
      </View>

      <View style={styles.forYouWrapper}>
        <TextComponent style={styles.title}>Pour vous</TextComponent>
        <TouchableOpacity
          style={styles.btnSeeAllWrapper}
          onPress={() => navigation.navigate(PAGE_DESTINATION_LIST)}
        >
          <TextComponent style={styles.btnSeeAll}>
            {"Tout voir >"}
          </TextComponent>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cities}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityCard}>
            <Image
              style={styles.cityPicture}
              source={{ uri: `${SERVER_URL}${item.filename}` }}
            />
            <TextComponent style={styles.cityName}>{item.name}</TextComponent>
            <LocationComponent
              isWhite={false}
              locationName={item.country_name}
            />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.searchButton}>
        <TextComponent style={styles.searchButtonText}>
          Recherche personnalisée
        </TextComponent>
        <ArrowRight width="15" height="15" />
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: 250,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 1,
    position: "absolute",
  },
  headline: {
    fontSize: 30,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
    alignSelf: "flex-start",
    marginStart: "5%",
    marginTop: 150,
    marginBottom: 35,
  },
  inputWrapper: {
    display: "flex",
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
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 15,
  },
  icon: {
    marginStart: 10,
  },
  input: {
    paddingHorizontal: 10,
    height: 50,
    fontFamily: FONT_MEDIUM,
    flex: 1,
  },
  forYouWrapper: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: FONT_BOLD,
    fontSize: 22,
    alignSelf: "flex-start",
  },
  btnSeeAllWrapper: {
    padding: 10,
  },
  btnSeeAll: {
    fontFamily: FONT_LIGHT,
    fontSize: FONT_SMALL,
    color: COLOR_GREY,
  },
  flatlist: {
    paddingLeft: 10,
  },
  cityCard: {
    padding: 10,
  },
  cityPicture: {
    width: 110,
    height: 110,
    borderRadius: SPACING_SMALL,
  },
  cityName: {
    fontFamily: FONT_BOLD,
    paddingVertical: SPACING_SMALLER,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryName: {
    color: COLOR_PRIMARY,
    fontFamily: FONT_BOLD,
    fontSize: 12,
  },
  searchButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_LARGER,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
  },
  searchButtonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    marginRight: SPACING_SMALL,
  },
});

export default HomePage;
