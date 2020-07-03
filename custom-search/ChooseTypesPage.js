import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import {
  SPACING_LARGE,
  SPACING_LARGER,
  FONT_HEADLINE,
  FONT_LARGE,
  FONT_NORMAL,
  FONT_SMALL,
  FONT_LARGER,
  SPACING_NORMAL,
  SPACING_MEDIUM,
} from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { COLOR_LIGHT_GREY, COLOR_BLACK, COLOR_GREY } from "../shared/constants/Colors";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import BackIcon from "../shared/icons/back.svg";

import beach from "../shared/assets/images/beach.jpg";
import culture from "../shared/assets/images/culture.jpg";
import mountain from "../shared/assets/images/mountain.jpg";
import nightLiving from "../shared/assets/images/night-living.jpg";
import sport from "../shared/assets/images/sport.jpg";

const ChooseTypesPage = ({ navigation }) => {
  return (
    <View style={styles.globalWrapper}>
      <StatusBar style="dark" />

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
          Qu'aimez vous faire lorsque vous voyagez ?
        </TextComponent>
      </View>

      <TextComponent style={styles.subHeadline}>
        Sélectionnez autant de centres d'intérret que vous le souhaitez
      </TextComponent>
      <FlatList
        data={types}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
        contentContainerStyle={styles.flatListStyle}
        numColumns="2"
        renderItem={({item}) => (
          <TouchableOpacity style={styles.typeSelect}>
            <ImageBackground
                source={item.image}
                style={styles.typeImage}
                imageStyle={styles.typeImage}
              />
            <TextComponent>{item.name}</TextComponent>
          </TouchableOpacity>
        )}
      />
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
    flexDirection: "row",
    paddingHorizontal: SPACING_NORMAL,
    alignItems: "center",
  },
  headline: {
    fontSize: FONT_LARGER,
    textAlign: "center",
    marginVertical: SPACING_LARGE,
  },
  subHeadline: {
    fontSize: FONT_NORMAL,
    fontFamily: FONT_BOLD,
    color: COLOR_LIGHT_GREY,
    textAlign: "center",
    paddingHorizontal: SPACING_LARGER,
  },
  flatList: {
    width: "100%",
    
    marginTop: SPACING_LARGE,
    backgroundColor: COLOR_GREY,
  },
  flatListStyle: {
    display: "flex",
    alignContent: "space-around",
  },
  typeSelect: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: SPACING_NORMAL,
    
  },
  typeImage: {
    flex: 1,
    borderRadius: SPACING_NORMAL,
  },
});

const types = [
  { id: 1, name: "Montagne", image: mountain },
  { id: 2, name: "Plage", image: beach },
  { id: 3, name: "Vie Nocturne", image: nightLiving },
  { id: 4, name: "Culture", image: culture },
  { id: 5, name: "Sport", image: sport },
];

export default ChooseTypesPage;
