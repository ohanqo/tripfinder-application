import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import LoginPage from "./authentication/login/LoginPage";
import RegisterPage from "./authentication/register/RegisterPage";
import ChooseBudgetPage from "./custom-search/ChooseBudgetPage";
import ChooseContinentPage from "./custom-search/ChooseContinentPage";
import ChooseTemperaturePage from "./custom-search/ChooseTemperaturePage";
import ChooseTypesPage from "./custom-search/types/ChooseTypesPage";
import DestinationDetailPage from "./destination-detail/DestinationDetailPage";
import DestinationFormPage from "./destination-form/DestinationFormPage";
import DestinationListPage from "./destination-list/DestinationListPage";
import NavBar from "./navbar/NavBar";
import OnboardingPage from "./onboarding/OnboardingPage";
import SearchResultPage from "./search-results/SearchResultPage";
import {
  FONT_BOLD,
  FONT_LIGHT,
  FONT_MEDIUM,
  FONT_REGULAR,
} from "./shared/constants/Fonts";
import {
  PAGE_CHOOSE_BUDGET,
  PAGE_CHOOSE_CONTINENT,
  PAGE_CHOOSE_TEMPERATURE,
  PAGE_CHOOSE_TYPES,
  PAGE_DESTINATION_DETAIL,
  PAGE_DESTINATION_FORM,
  PAGE_DESTINATION_LIST,
  PAGE_LOGIN,
  PAGE_NAVBAR,
  PAGE_ONBOARDING,
  PAGE_REGISTER,
  PAGE_SEARCH_RESULTS,
} from "./shared/constants/Pages";
import { StoreProvider } from "./shared/context/Context";

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
      <StoreProvider>
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
            <Stack.Screen
              name={PAGE_CHOOSE_TYPES}
              component={ChooseTypesPage}
            />
            <Stack.Screen
              name={PAGE_SEARCH_RESULTS}
              component={SearchResultPage}
            />
            <Stack.Screen name={PAGE_REGISTER} component={RegisterPage} />
            <Stack.Screen name={PAGE_LOGIN} component={LoginPage} />
            <Stack.Screen
              name={PAGE_DESTINATION_FORM}
              component={DestinationFormPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
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
