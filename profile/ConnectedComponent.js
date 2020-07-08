import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { COLOR_WHITE, COLOR_RED, COLOR_PRIMARY } from "../shared/constants/Colors";
import TravelerIcon from "../shared/icons/traveler-icon.svg";
import MailIcon from "../shared/icons/mail-icon.svg";
import * as SecureStore from "expo-secure-store";
import {
  FONT_LARGE,
  FONT_LARGER,
  SPACING_NORMAL,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_SMALLER,
  SPACING_SMALL,
} from "../shared/constants/Dimens";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { AUHTENTICATION_TOKEN } from "../shared/constants/Preferences";
import { SET_USER } from "../shared/constants/Types";
import { StoreContext } from "../shared/context/Context";
import { PAGE_CREATE_CITY } from "../shared/constants/Pages";

const ConnectedComponent = ({ user, navigation }) => {
  const { dispatch } = useContext(StoreContext);

  const disconnectUser = async () => {
    await SecureStore.deleteItemAsync(AUHTENTICATION_TOKEN);
    dispatch({ type: SET_USER, payload: undefined });
  };

  return (
    <View style={styles.globalWrapper}>
      <View style={styles.lineInfoWrapper}>
        <TravelerIcon width={50} height={50} />
        <TextComponent style={styles.infoLabel}>{user.name}</TextComponent>
      </View>
      <View style={styles.lineInfoWrapper}>
        <MailIcon width={50} height={50} />
        <TextComponent style={styles.infoLabel}>{user.email}</TextComponent>
      </View>

      {user.is_admin ? (
        <TouchableOpacity
          style={styles.createCityButton}
          onPress={() => {
            navigation.navigate(PAGE_CREATE_CITY)
          }}
        >
          <TextComponent style={styles.buttonText}>
            Ajouter une ville
          </TextComponent>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={styles.disconnectButton}
        onPress={() => {
          disconnectUser();
        }}
      >
        <TextComponent style={styles.buttonText}>
          Déconnexion
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: SPACING_NORMAL,
  },
  lineInfoWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  infoLabel: {
    fontSize: FONT_LARGER,
    paddingStart: SPACING_NORMAL,
  },
  createCityButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    height: 50,
  },
  disconnectButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_RED,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    height: 50,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    marginRight: SPACING_SMALL,
  },
});
export default ConnectedComponent;
