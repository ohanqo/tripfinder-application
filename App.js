import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import HomePage from "./home/HomePage";
import OnboardingPage from "./onboarding/OnboardingPage";
import {
  FONT_BOLD,
  FONT_LIGHT,
  FONT_MEDIUM,
  FONT_REGULAR,
} from "./shared/constants/Fonts";
import { PAGE_HOME, PAGE_ONBOARDING } from "./shared/constants/Pages";

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
          <Stack.Screen name={PAGE_HOME} component={HomePage} />
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
