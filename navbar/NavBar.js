import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "../home/HomePage";
import ProfilePage from "../profile/ProfilePage";
import { SPACING_NORMAL, SPACING_SMALL } from "../shared/constants/Dimens";
import { PAGE_HOME, PAGE_PROFIL } from "../shared/constants/Pages";
import HomeSelected from "../shared/icons/home-selected.svg";
import Home from "../shared/icons/home.svg";
import OrangeDot from "../shared/icons/orange-dot.svg";
import ProfileSelected from "../shared/icons/profile-selected.svg";
import Profile from "../shared/icons/profile.svg";
import WaveBackGround from "../shared/icons/wave-navbar.svg";

const NavBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.navBar,
      }}
    >
      <Tab.Screen
        name={PAGE_HOME}
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.optionSelected}>
                <WaveBackGround
                  style={styles.waveBackground}
                  width="130"
                  height="95"
                />
                <HomeSelected width="35" height="35" />
                <OrangeDot style={styles.orangeDot} width="6" height="6" />
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
                <WaveBackGround
                  style={styles.waveBackground}
                  width="130"
                  height="95"
                />
                <ProfileSelected width="35" height="35" />
                <OrangeDot style={styles.orangeDot} width="6" height="6" />
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
  navBar: {
    borderTopWidth: 0,
  },
  optionSelected: {
    alignItems: "center",
    paddingVertical: SPACING_NORMAL,
    minWidth: 100,
  },
  optionUnselected: {
    opacity: 0.7,
  },
  orangeDot: {
    marginVertical: SPACING_SMALL,
  },
  waveBackground: {
    position: "absolute",
    bottom: 0,
  },
});

export default NavBar;
