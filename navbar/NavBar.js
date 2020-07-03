import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PAGE_HOME, PAGE_PROFIL } from "../shared/constants/Pages";
import HomePage from "../home/HomePage";
import ProfilePage from "../profile/ProfilePage";
import ProfileSelected from "../shared/icons/profile-selected.svg";
import Profile from "../shared/icons/profile.svg";
import HomeSelected from "../shared/icons/home-selected.svg";
import Home from "../shared/icons/home.svg";
import OrangeDot from "../shared/icons/orange-dot.svg";
import WaveBackGround from "../shared/icons/wave-navbar.svg";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_PRIMARY,
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_WHITE,
} from "../shared/constants/Colors";
import { SPACING_SMALLER, SPACING_LARGE, SPACING_TINY, SPACING_SMALL, SPACING_MEDIUM, SPACING_LARGER, SPACING_NORMAL } from "../shared/constants/Dimens";

const NavBar = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style:{
          borderTopWidth: 0,
        }
      }}
    >
      <Tab.Screen
        name={PAGE_HOME}
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.optionSelected}>
                <WaveBackGround style={styles.waveBackground} width="130" height="95"/>
                <HomeSelected width="35" height="35" />
                <OrangeDot style={styles.orangeDot} width="6" height="6"/>
              </View>
            ) : (
              <View style={styles.optionUnselected}>
                <Home width="30" height="30" />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={PAGE_PROFIL}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.optionSelected}>
                <WaveBackGround style={styles.waveBackground} width="130" height="95"/>
                <ProfileSelected width="35" height="35" />
                <OrangeDot style={styles.orangeDot} width="6" height="6"/>
              </View>
            ) : (
              <View style={styles.optionUnselected}>
                <Profile width="30" height="30" />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  optionSelected: {
    alignItems: "center",
    paddingVertical: SPACING_NORMAL,
    minWidth: 100,
  },
  optionUnselected: {
    opacity: 0.7,
  },
  orangeDot: {
    marginVertical: SPACING_SMALL
  },
  waveBackground:{
    position:"absolute",
    bottom:0,
  }
});

export default NavBar;
