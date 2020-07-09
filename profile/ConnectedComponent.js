import * as SecureStore from "expo-secure-store";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_PRIMARY,
  COLOR_RED,
  COLOR_WHITE,
} from "../shared/constants/Colors";
import {
  FONT_LARGER,
  SPACING_LARGE,
  SPACING_NORMAL,
  SPACING_SMALL,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { PAGE_DESTINATION_FORM } from "../shared/constants/Pages";
import { AUHTENTICATION_TOKEN } from "../shared/constants/Preferences";
import { SET_USER } from "../shared/constants/Types";
import { StoreContext } from "../shared/context/Context";
import MailIcon from "../shared/icons/mail-icon.svg";
import TravelerIcon from "../shared/icons/traveler-icon.svg";

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
            navigation.navigate(PAGE_DESTINATION_FORM);
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
        <TextComponent style={styles.buttonText}>Déconnexion</TextComponent>
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
