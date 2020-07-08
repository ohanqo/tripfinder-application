import React from "react";
import { Button, View } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { PAGE_LOGIN, PAGE_REGISTER } from "../shared/constants/Pages";

const ProfilePage = ({ navigation }) => {
  return (
    <View>
      <TextComponent>Profile</TextComponent>
      <Button
        onPress={() => navigation.navigate(PAGE_REGISTER)}
        title="S'inscrire"
      />
      <Button
        onPress={() => navigation.navigate(PAGE_LOGIN)}
        title="Se connecter"
      />
    </View>
  );
};

export default ProfilePage;
