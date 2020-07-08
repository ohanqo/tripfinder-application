import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_BLACK,
} from "../shared/constants/Colors";
import {
  FONT_LARGER,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_MEDIUM,
  SPACING_NORMAL,
  SPACING_SMALLER,
  FONT_HEADLINE,
  SPACING_SMALL,
  FONT_LARGE,
  FONT_SMALL,
  SPACING_TINY,
} from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import travelImage from "../shared/assets/images/travel.jpg";
import CityService from "../shared/services/CityService";
import GoBackComponent from "../shared/components/GoBackComponent";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SERVER_URL } from "../shared/services/service";
import { LocationIcon } from "../shared/icons/location-icon.svg";
import LocationComponent from "../shared/components/LocationComponent";

const SearchResultPage = ({ route, navigation }) => {
  let { filters } = route.params;
  const [citiesResult, setCitiesResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await CityService.searchCities(filters);
      setCitiesResult(response);
    }

    fetchData();
  }, []);

  return (
    <View style={styles.globalWrapper}>
      <StatusBar style="light" />
      <ImageBackground
        source={travelImage}
        style={styles.backgroundHeaderImage}
        imageStyle={styles.backgroundHeaderImage}
      >
        <View style={styles.darkerBackground}>
          <GoBackComponent
            style={styles.backButton}
            isWhite={true}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0.2,0.5,0.8)"]}
            style={styles.typeInfoLineWrapper}
          >
            <TextComponent style={styles.headline}>
              Résultat de votre recherche
            </TextComponent>
          </LinearGradient>
        </View>
      </ImageBackground>

      <FlatList
        data={citiesResult}
        horizontal={false}
        scrollEnabled={true}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityWrapper}>
            <Image
              style={styles.cityPicture}
              source={{ uri: `${SERVER_URL}${item.filename}` }}
            />
          <View style={styles.cityInfoWrapper}>
            <View style={styles.cityLineWrapper}>
              <TextComponent style={styles.cityName}>{item.name}</TextComponent>
              <LocationComponent
                isWhite={false}
                locationName={item.country_name}
              />
            </View>
            <View style={styles.cityLineWrapper}>
              <TextComponent style={styles.cityName}>
                {item.temperature}°C
              </TextComponent>
              <TextComponent style={styles.continentName}>{item.continent_name}</TextComponent>
            </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backgroundHeaderImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
  },
  backButton: {
    paddingStart: SPACING_NORMAL,
  },
  darkerBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: SPACING_LARGER,
  },
  headline: {
    fontSize: FONT_LARGER,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
    fontSize: FONT_HEADLINE,
    paddingBottom: SPACING_LARGE,
    paddingStart: SPACING_NORMAL,
    marginTop: SPACING_LARGER,
  },
  flatList: {
    justifyContent: "center",
  },
  cityWrapper: {
    borderRadius: SPACING_NORMAL,
    overflow: "hidden",
    backgroundColor: COLOR_WHITE,
    marginTop: SPACING_LARGE,
    padding: SPACING_MEDIUM,
  },
  cityPicture: {
    width: Dimensions.get("window").width - 90,
    height: Dimensions.get("window").width / 2 - 30,
    borderRadius: SPACING_SMALL,
  },
  cityInfoWrapper: {
    paddingVertical: SPACING_SMALL,  
  },
  cityLineWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING_TINY,
  },
  cityName: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_LARGE,
  },
  continentName: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_SMALL,
    color: COLOR_PRIMARY,
  },
});

export default SearchResultPage;
