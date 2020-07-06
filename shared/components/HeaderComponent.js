import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SPACING_MEDIUM, SPACING_NORMAL } from "../constants/Dimens";
import BackIcon from "../icons/back.svg";

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

const styles = StyleSheet.create({
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
});
export default HeaderComponent;
