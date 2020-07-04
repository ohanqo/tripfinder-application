import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SPACING_LARGE,
  SPACING_NORMAL,
  FONT_LARGER,
  SPACING_MEDIUM,
  SPACING_LARGER,
} from "../shared/constants/Dimens";
import BackIcon from "../shared/icons/back.svg";
import { COLOR_PRIMARY } from "../shared/constants/Colors";

const ChooseTemperaturePage = ({ navigation }) => {
  return (
    <View style={styles.globalWrapper}>
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
          Choisissez votre température idéale
        </TextComponent>
      </View>
    </View>
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
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: SPACING_NORMAL,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
    marginRight: SPACING_LARGER,
    paddingRight: SPACING_LARGE,
  },
});

export default ChooseTemperaturePage;
