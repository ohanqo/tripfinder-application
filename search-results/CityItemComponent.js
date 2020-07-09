import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PAGE_DESTINATION_DETAIL } from "../shared/constants/Pages";
import { Image, View, StyleSheet } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import LocationComponent from "../shared/components/LocationComponent";
import { SPACING_NORMAL, SPACING_LARGE, SPACING_MEDIUM, SPACING_SMALL, SPACING_TINY, FONT_LARGE, FONT_SMALL } from "../shared/constants/Dimens";
import { COLOR_WHITE, COLOR_PRIMARY } from "../shared/constants/Colors";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { SERVER_URL } from "../shared/services/service";

const CityItemComponent = ({ navigation, city }) => {
  return (
    <TouchableOpacity
      style={styles.cityWrapper}
      onPress={() =>
        navigation.navigate(PAGE_DESTINATION_DETAIL, {
          destination: city,
        })
      }
    >
      <Image
        style={styles.cityPicture}
        source={{ uri: `${SERVER_URL}${city.filename}` }}
      />
      <View style={styles.cityInfoWrapper}>
        <View style={styles.cityLineWrapper}>
          <TextComponent style={styles.cityName}>{city.name}</TextComponent>
          <LocationComponent isWhite={false} locationName={city.country_name} />
        </View>
        <View style={styles.cityLineWrapper}>
          <TextComponent style={styles.cityName}>
            {city.temperature}°C
          </TextComponent>
          <TextComponent style={styles.continentName}>
            {city.continent_name}
          </TextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cityWrapper: {
    borderRadius: SPACING_NORMAL,
    overflow: "hidden",
    backgroundColor: COLOR_WHITE,
    marginTop: SPACING_LARGE,
    padding: SPACING_MEDIUM,
    marginHorizontal: SPACING_LARGE,
  },
  cityPicture: {
    width: "100%",
    height: 200,
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
})

export default CityItemComponent;
