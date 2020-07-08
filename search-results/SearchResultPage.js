import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CityService from "../shared/services/CityService";
import { StatusBar } from "expo-status-bar";
import { StoreContext } from "../shared/context/Context";
import SearchHeader from "./SearchHeader";
import CityItemComponent from "./CityItemComponent";
import NotFoundComponent from "./NotFoundComponent";

const SearchResultPage = ({ route, navigation }) => {
  let { filters, typedSearch } = route.params;
  const [citiesResult, setCitiesResult] = useState([]);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const { state } = useContext(StoreContext);

  useEffect(() => {
    async function fetchData() {
      let response = await CityService.searchCities(filters);
      if (response.message !== "Request failed with status code 401") {
        setCitiesResult(response);
      } else {
        setCitiesResult([]);
      }

      setHasFetchedData(true);
    }

    if (filters !== undefined) {
      fetchData();
    } else {
      const cities = JSON.parse(JSON.stringify(state.cities));
      let citiesMatching = [];
      for (const city of cities) {
        if (
          city.name.toLowerCase().includes(typedSearch.toLowerCase()) ||
          city.continent_name
            .toLowerCase()
            .includes(typedSearch.toLowerCase()) ||
          city.country_name.toLowerCase().includes(typedSearch.toLowerCase())
        ) {
          citiesMatching.push(city);
        }
      }
      setCitiesResult(citiesMatching);
      setHasFetchedData(true);
    }
  }, []);

  return (
    <View style={styles.globalWrapper}>
      <StatusBar style="light" />

      {citiesResult.length === 0 && hasFetchedData ? (
        <NotFoundComponent navigation={navigation} />
      ) : (
        <FlatList
          data={citiesResult}
          ListHeaderComponent={<SearchHeader navigation={navigation} />}
          horizontal={false}
          scrollEnabled={true}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CityItemComponent navigation={navigation} city={item} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flatList: {
    justifyContent: "center",
  },
});

export default SearchResultPage;
