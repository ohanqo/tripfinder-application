import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import LocationComponent from "../shared/components/LocationComponent";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_WHITE } from "../shared/constants/Colors";
import { SPACING_MEDIUM, SPACING_SMALL } from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { SERVER_URL } from "../shared/services/service";

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
          <TextComponent style={styles.itemName}>{item.name}</TextComponent>
          <LocationComponent isWhite={true} locationName={item.country_name} />
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
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: SPACING_SMALL,
    justifyContent: "flex-end",
    display: "flex",
  },
  itemName: {
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
  },
});

export default DestinationItemComponent;
