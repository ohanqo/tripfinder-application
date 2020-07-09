import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import GoBackComponent from "../shared/components/GoBackComponent";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_GREY_DIABLED,
} from "../shared/constants/Colors";
import {
  FONT_HEADLINE,
  SPACING_NORMAL,
  SPACING_LARGE,
  SPACING_LARGER,
} from "../shared/constants/Dimens";
import { PAGE_DESTINATION_DETAIL } from "../shared/constants/Pages";
import { StoreContext } from "../shared/context/Context";
import DestinationItemComponent from "./DestinationItemComponent";

const DestinationListPage = ({ navigation }) => {
  const [leftCities, setLeftCities] = useState([]);
  const [rightCities, setRightCities] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const { state } = useContext(StoreContext);

  useEffect(() => {
    const cities = JSON.parse(JSON.stringify(state.cities));
    const middleIndex = Math.round(cities.length / 2);
    const leftList = cities.splice(0, middleIndex);

    setLeftCities(leftList);
    setRightCities(cities);
  }, []);

  const onItemClick = (item) => {
    navigation.navigate(isEditMode? null/* mettre ici le nom de la page  */ : PAGE_DESTINATION_DETAIL, { destination: item });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <GoBackComponent style={styles.backIcon} onPress={navigation.goBack} />

        <TextComponent style={styles.headline}>
          <TextComponent style={styles.headlineColorized}>
            Bonjour
          </TextComponent>
          , voici nos meilleures destinations
        </TextComponent>

        {state?.user?.is_admin ? (
          <View style={styles.modeSelectorWrapper}>
            <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
              <TextComponent
                style={
                  isEditMode
                    ? styles.notSelectedModeButton
                    : styles.selectedModeButton
                }
              >
                Mode consultation
              </TextComponent>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)}>
              <TextComponent
                style={
                  isEditMode
                    ? styles.selectedModeButton
                    : styles.notSelectedModeButton
                }
              >
                Mode édition
              </TextComponent>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.destinationWrapper}>
          <View style={styles.listWrapper}>
            {leftCities.map((item, index) => {
              return (
                <DestinationItemComponent
                  item={item}
                  index={index}
                  heightOffset={0}
                  key={index}
                  onItemClick={onItemClick}
                />
              );
            })}
          </View>

          <View style={styles.listWrapper}>
            {rightCities.map((item, index) => {
              return (
                <DestinationItemComponent
                  item={item}
                  index={index}
                  heightOffset={1}
                  key={index}
                  onItemClick={onItemClick}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    marginTop: 60,
    marginStart: 10,
    padding: 10,
  },
  headline: {
    fontSize: FONT_HEADLINE,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  headlineColorized: {
    fontSize: FONT_HEADLINE,
    color: COLOR_PRIMARY,
  },
  modeSelectorWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: SPACING_LARGER,
  },
  selectedModeButton: {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_WHITE,
    padding: SPACING_NORMAL,
    borderRadius: SPACING_LARGE,
    overflow: "hidden",
  },

  notSelectedModeButton: {
    backgroundColor: COLOR_GREY_DIABLED,
    padding: SPACING_NORMAL,
    borderRadius: SPACING_LARGE,
    overflow: "hidden",
  },
  destinationWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  listWrapper: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
});

export default DestinationListPage;
