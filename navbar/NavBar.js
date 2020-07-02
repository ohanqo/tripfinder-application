import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { PAGE_HOME, PAGE_PROFIL } from "../shared/constants/Pages";
import HomePage from "../home/HomePage";
import ProfilePage from "../profile/ProfilePage";
import ProfileSelected from "../shared/icons/profile-selected.svg";
import Profile from "../shared/icons/profile.svg";
import HomeSelected from "../shared/icons/home-selected.svg";
import Home from "../shared/icons/home.svg";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_PRIMARY,
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_WHITE,
} from "../shared/constants/Colors";
import { SPACING_SMALLER } from "../shared/constants/Dimens";

const NavBar = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name={PAGE_HOME}
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSelected
                width="35"
                height="35"
                style={styles.optionSelected}
              />
            ) : (
              <Home width="30" height="30" style={styles.optionUnselected} />
            ),
        }}
      />
      <Tab.Screen
        name={PAGE_PROFIL}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileSelected
                width="35"
                height="35"
                style={styles.optionSelected}
              />
            ) : (
              <Profile width="30" height="30" style={styles.optionUnselected} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabSelected: {
    backgroundColor: COLOR_PRIMARY,
  },
  optionSelected: {
    marginBottom: SPACING_SMALLER,
  },
  optionUnselected: {
    opacity: 0.7,
  },
});

export default NavBar;
