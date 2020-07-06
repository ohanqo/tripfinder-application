import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import DestinationDetailPage from "./destination-detail/DestinationDetailPage";
import DestinationListPage from "./destination-list/DestinationListPage";
import OnboardingPage from "./onboarding/OnboardingPage";
import {
  FONT_BOLD,
  FONT_LIGHT,
  FONT_MEDIUM,
  FONT_REGULAR,
} from "./shared/constants/Fonts";
import {
  PAGE_DESTINATION_DETAIL,
  PAGE_DESTINATION_LIST,
  PAGE_ONBOARDING,
  PAGE_NAVBAR,
  PAGE_CHOOSE_TYPES,
  PAGE_CHOOSE_TEMPERATURE,
  PAGE_CHOOSE_BUDGET,
  PAGE_CHOOSE_CONTINENT,
} from "./shared/constants/Pages";
import NavBar from "./navbar/NavBar";
import ChooseTypesPage from "./custom-search/ChooseTypesPage";
import ChooseTemperaturePage from "./custom-search/ChooseTemperaturePage";
import ChooseBudgetPage from "./custom-search/ChooseBudgetPage";
import ChooseContinentPage from "./custom-search/ChooseContinentPage";

const Stack = createStackNavigator();

export const App = () => {
  useEffect(() => {
    try {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    } catch (error) {
      console.error(error);
    }
  }, []);

  let [fontsLoaded] = useFonts({
    [FONT_BOLD]: require("./shared/assets/fonts/Metropolis-Bold.otf"),
    [FONT_LIGHT]: require("./shared/assets/fonts/Metropolis-Light.otf"),
    [FONT_MEDIUM]: require("./shared/assets/fonts/Metropolis-Medium.otf"),
    [FONT_REGULAR]: require("./shared/assets/fonts/Metropolis-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={PAGE_ONBOARDING}
        >
          <Stack.Screen name={PAGE_ONBOARDING} component={OnboardingPage} />
          <Stack.Screen name={PAGE_NAVBAR} component={NavBar} />
          <Stack.Screen
            name={PAGE_DESTINATION_LIST}
            component={DestinationListPage}
          />
          <Stack.Screen
            name={PAGE_DESTINATION_DETAIL}
            component={DestinationDetailPage}
          />
          <Stack.Screen
            name={PAGE_CHOOSE_TEMPERATURE}
            component={ChooseTemperaturePage}
          />
          <Stack.Screen
            name={PAGE_CHOOSE_BUDGET}
            component={ChooseBudgetPage}
          />
          <Stack.Screen
            name={PAGE_CHOOSE_CONTINENT}
            component={ChooseContinentPage}
          />

          <Stack.Screen name={PAGE_CHOOSE_TYPES} component={ChooseTypesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
