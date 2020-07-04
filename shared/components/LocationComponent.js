import React from "react";
import { StyleSheet, View } from "react-native";
import { COLOR_PRIMARY, COLOR_WHITE } from "../constants/Colors";
import { FONT_SMALL } from "../constants/Dimens";
import { FONT_BOLD } from "../constants/Fonts";
import LocationBlueIcon from "../icons/location-icon.svg";
import LocationWhiteIcon from "../icons/location-white-icon.svg";
import TextComponent from "./TextComponent";

const LocationComponent = ({ locationName, isWhite = false }) => {
  return (
    <View style={styles.locationWrapper}>
      {isWhite ? (
        <LocationWhiteIcon width="15" height="15" />
      ) : (
        <LocationBlueIcon width="15" height="15" />
      )}
      <TextComponent
        style={{
          ...styles.countryName,
          color: isWhite ? COLOR_WHITE : COLOR_PRIMARY,
        }}
      >
        {locationName}
      </TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryName: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_SMALL,
  },
});

export default LocationComponent;
