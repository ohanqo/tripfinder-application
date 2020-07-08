import React from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import SearchHeader from "./SearchHeader";
import LocationNotFoundIcon from "../shared/icons/unknown-location-icon.svg";
import { COLOR_PRIMARY } from "../shared/constants/Colors";
import { FONT_LARGER, SPACING_NORMAL } from "../shared/constants/Dimens";

const NotFoundComponent = ({ navigation }) => {
  return (
    <View style={styles.globalWrapper}>
      <SearchHeader navigation={navigation} />
      <View style={styles.notFoundWrapper}>
        <LocationNotFoundIcon width={100} height={100} />
        <TextComponent style={styles.label}>
          Désolé, aucune ville ne correspond à vos critères de recherche
        </TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    width: "100%",
  },
  notFoundWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLOR_PRIMARY,
  },
  label: {
    fontSize: FONT_LARGER,
    margin: SPACING_NORMAL,
    textAlign: "center",
  },
});

export default NotFoundComponent;
