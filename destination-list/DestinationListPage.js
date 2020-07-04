import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GoBackComponent from "../shared/components/GoBackComponent";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_PRIMARY } from "../shared/constants/Colors";
import { FONT_HEADLINE } from "../shared/constants/Dimens";
import { PAGE_DESTINATION_DETAIL } from "../shared/constants/Pages";
import CityService from "../shared/services/CityService";
import DestinationItemComponent from "./DestinationItemComponent";

const DestinationListPage = ({ navigation }) => {
  // TODO: Extract and use Context to store all cities
  const [leftCities, setLeftCities] = useState([]);
  const [rightCities, setRightCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await CityService.getCities();
      const middleIndex = Math.round(response.length / 2);
      const leftList = response.splice(0, middleIndex);

      setLeftCities(leftList);
      setRightCities(response);
    }
    fetchData();
  }, []);

  const onItemClick = (item) => {
    navigation.navigate(PAGE_DESTINATION_DETAIL, { destination: item });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <GoBackComponent
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />

        <TextComponent style={styles.headline}>
          <TextComponent style={styles.headlineColorized}>
            Bonjour
          </TextComponent>
          , voici nos meilleures destinations
        </TextComponent>

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
