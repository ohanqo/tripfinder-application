import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  SPACING_MEDIUM, SPACING_NORMAL, FONT_LARGER, SPACING_LARGE, SPACING_LARGER, SPACING_SMALL,

} from "../constants/Dimens";
import BackIcon from "../icons/back.svg";
import { COLOR_LIGHT_GREY } from "../constants/Colors";
import TextComponent from "./TextComponent";

const HeaderComponent = ({ navigation, children }) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon width={SPACING_MEDIUM} height={SPACING_MEDIUM} />
      </TouchableOpacity>

      {children}

      <View></View>

    </View>
  );
};

const styles = StyleSheet.create(
  {
    headerWrapper: {
      display: "flex",
      flexDirection: "row",
      paddingHorizontal: SPACING_NORMAL,
      justifyContent: "space-between",
      alignItems: "center",
      
    },
    backButton: {
      alignSelf: "flex-start",
      paddingEnd: SPACING_NORMAL,
    },
    
    
  }
);
export default HeaderComponent;
