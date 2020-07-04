import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import LocationComponent from "../shared/components/LocationComponent";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_WHITE, COLOR_PRIMARY } from "../shared/constants/Colors";
import { SPACING_MEDIUM, SPACING_SMALL } from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { SERVER_URL } from "../shared/services/service";
import { LinearGradient } from "expo-linear-gradient";

const DestinationItemComponent = ({
  item,
  index,
  heightOffset,
  onItemClick,
}) => {
  return (
    <TouchableOpacity
      style={[
        { height: index % 2 === heightOffset ? 150 : 250 },
        { ...styles.itemWrapper },
      ]}
      onPress={() => onItemClick(item)}
    >
      <ImageBackground
        style={styles.itemPicture}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: `${SERVER_URL}${item.filename}` }}
      >
        <View style={styles.itemContentWrapper}>
          <LinearGradient colors={[ "transparent", "rgba(0,0.2,0.5,0.8)"]}
          style={styles.gradientWrapper}>
            <TextComponent style={styles.itemName}>{item.name}</TextComponent>
            <LocationComponent
              isWhite={true}
              locationName={item.country_name}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    marginEnd: SPACING_MEDIUM,
    marginBottom: SPACING_MEDIUM,
    width: "100%",
  },
  itemPicture: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  itemContentWrapper: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    display: "flex",
  },
  gradientWrapper: {
    width: "100%",
    padding: SPACING_SMALL,
    borderRadius: 10,
  },
  itemName: {
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
  },
});

export default DestinationItemComponent;
