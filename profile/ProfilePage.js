import React, { useContext } from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { StoreContext } from "../shared/context/Context";
import {
  SPACING_NORMAL,
  SPACING_LARGER,
  FONT_LARGER,
  FONT_HEADLINE,
  SPACING_LARGE,
} from "../shared/constants/Dimens";
import { FONT_BOLD } from "../shared/constants/Fonts";
import { COLOR_WHITE, COLOR_RED } from "../shared/constants/Colors";
import headerImage from "../shared/assets/images/airplane.jpg";
import ConnectedComponent from "./ConnectedComponent";
import DisconnectedComponent from "./DisconnectedComponent";

const ProfilePage = ({ navigation }) => {
  const { state } = useContext(StoreContext);

  return (
    <View style={styles.globalWrapper}>
      <ImageBackground
        source={headerImage}
        style={styles.backgroundHeaderImage}
        imageStyle={styles.backgroundHeaderImage}
      >
        <TextComponent style={styles.headline}>
          {state.user !== undefined
            ? "Accédez à votre profil"
            : "Connectez vous pour accéder à votre profil"}
        </TextComponent>
      </ImageBackground>
      {state.user !== undefined ? (
        <ConnectedComponent user={state.user} navigation={navigation} />
      ) : (
        <DisconnectedComponent navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  globalWrapper: {
    display: "flex",
    flex: 1,
  },
  backgroundHeaderImage: {
    width: Dimensions.get("window").width,
    height: 250,
    display: "flex",
    flexDirection: "row",
  },
  backButton: {
    paddingStart: SPACING_NORMAL,
  },
  headline: {
    fontSize: FONT_LARGER,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
    fontSize: FONT_HEADLINE,
    paddingBottom: SPACING_LARGE,
    paddingStart: SPACING_NORMAL,
    marginTop: SPACING_LARGER,
    alignSelf: "flex-end",
  },
});

export default ProfilePage;
