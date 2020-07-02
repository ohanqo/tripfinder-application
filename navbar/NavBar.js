import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { PAGE_HOME, PAGE_PROFIL } from "../shared/constants/Pages";
import HomePage from "../home/HomePage";
import ProfilePage from "../profile/ProfilePage";

import ProfileSelected from "../shared/icons/profile-selected.svg";
import Profile from "../shared/icons/profile.svg";
import HomeSelected from "../shared/icons/home-selected.svg";
import Home from "../shared/icons/home.svg";
import TextComponent from "../shared/components/TextComponent";

const NavBar = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name={PAGE_HOME}
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSelected width="30" height="30" />
            ) : (
              <Home width="30" height="30" />
            ),
        }}
      />
      <Tab.Screen
        name={PAGE_PROFIL}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileSelected width="30" height="30" />
            ) : (
              <Profile width="30" height="30" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
