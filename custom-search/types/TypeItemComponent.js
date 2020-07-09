import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextComponent from "../../shared/components/TextComponent";
import { SPACING_NORMAL, SPACING_SMALL } from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";
import {
  COLOR_WHITE,
} from "../../shared/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChecBoxChecked from "../../shared/icons/checkBox-checked.svg";
import ChecBoxUnchecked from "../../shared/icons/checkBox-unchecked.svg";


const TypeItemComponent = ({ onPress, item }) => {
  return (
    <TouchableOpacity style={styles.typeSelect} onPress={() => onPress(item)}>
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
            <TextComponent style={styles.typeLabel}>{item.name}</TextComponent>
            
          </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default TypeItemComponent;
