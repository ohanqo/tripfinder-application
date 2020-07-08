import React, { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { PAGE_LOGIN, PAGE_REGISTER } from "../shared/constants/Pages";
import { StoreContext } from "../shared/context/Context";

const ProfilePage = ({ navigation }) => {
  const { state } = useContext(StoreContext);

  useEffect(() => {
    console.log(state.user);
  }, []);

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

      <TextComponent>
        {state?.user?.is_admin === 1 ? "Est Admin" : "N'est pas admin"}
      </TextComponent>
    </View>
  );
};

export default ProfilePage;
