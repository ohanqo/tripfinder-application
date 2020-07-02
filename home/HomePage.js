import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TextInput, View, FlatList } from "react-native";
import headerBackground from "../shared/assets/images/landscape.png";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_GREY,
  COLOR_PRIMARY,
} from "../shared/constants/Colors";
import { SPACING_SMALLER, FONT_SMALL, SPACING_LARGE, SPACING_MEDIUM, SPACING_SMALL } from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_MEDIUM, FONT_LIGHT } from "../shared/constants/Fonts";
import SearchIcon from "../shared/icons/search-icon.svg";
import LocationIcon from "../shared/icons/location.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import CityService from "../shared/services/city.services";

const HomePage = ({ navigation }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await CityService.getCities();
      setCities(response);
      console.log(cities);
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
        <TouchableOpacity style={styles.btnSeeAllWrapper}>
          <TextComponent style={styles.btnSeeAll}>
            {"Tout voir >"}
          </TextComponent>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cities}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityCard}>
            <Image
              style={styles.cityPicture}
              source={{ uri: `http://94.238.22.29:8921/${item.filename}` }}
            />
            <TextComponent style={styles.cityName}>{item.name}</TextComponent>
            <View style={styles.locationWrapper}>
              <LocationIcon width="15" height="15" />
              <TextComponent style={styles.countryName}>
                {item.country_name}
              </TextComponent>
            </View>
          </TouchableOpacity>
        )}
      />

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
  flatlist:{
    paddingLeft: 10,
  },
  cityCard: {
    padding: 10,
  },
  cityPicture: {
    width: 110,
    height: 110,
    borderRadius: SPACING_SMALL
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
});

export default HomePage;
