import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LoginBackgroundImage from "../../shared/assets/images/login-background.jpg";
import GoBackComponent from "../../shared/components/GoBackComponent";
import TextComponent from "../../shared/components/TextComponent";
import {
  COLOR_GHOST,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from "../../shared/constants/Colors";
import {
  FONT_LARGER,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../../shared/constants/Dimens";
import { FONT_BOLD } from "../../shared/constants/Fonts";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.loginWrapper}>
      <ImageBackground
        style={styles.loginBackground}
        imageStyle={styles.loginBackgroundImage}
        source={LoginBackgroundImage}
      >
        <GoBackComponent
          style={styles.loginGoBack}
          isWhite={true}
          onPress={navigation.goBack}
        />

        <View style={styles.loginLayer}>
          <TextComponent style={styles.loginTitle}>Connexion</TextComponent>

          <TextInput
            placeholderTextColor={COLOR_GHOST}
            style={styles.loginInput}
            placeholder="Email"
          />

          <TextInput
            placeholderTextColor={COLOR_GHOST}
            style={styles.loginInput}
            placeholder="Mot de passe"
          />

          <TouchableOpacity style={styles.loginButton}>
            <TextComponent style={styles.loginButtonText}>
              Se connecter
            </TextComponent>
          </TouchableOpacity>

          <View style={styles.loginSpacing} />

          <TouchableOpacity style={styles.loginRegisterButton}>
            <TextComponent style={styles.loginRegisterButtonText}>
              Créer un compte
            </TextComponent>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
  },
  loginBackground: {
    flex: 1,
  },
  loginGoBack: {
    marginStart: SPACING_LARGER,
    marginTop: 60,
  },
  loginBackgroundImage: {
    height: Dimensions.get("window").height * 0.5,
    width: "100%",
    resizeMode: "cover",
  },
  loginLayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: Dimensions.get("window").height * 0.6,
    backgroundColor: COLOR_WHITE,
    display: "flex",
    flexDirection: "column",
    padding: SPACING_LARGER,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  loginTitle: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_LARGER,
    marginBottom: SPACING_LARGE,
    marginTop: SPACING_NORMAL,
  },
  loginInput: {
    marginBottom: SPACING_LARGE,
    borderBottomWidth: 1,
    borderColor: COLOR_GHOST,
    paddingBottom: SPACING_SMALLER,
  },
  loginSpacing: {
    flexGrow: 1,
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_WHITE,
    marginVertical: SPACING_LARGER,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderWidth: 1,
    borderRadius: SPACING_SMALLER,
    borderColor: COLOR_PRIMARY,
  },
  loginButtonText: {
    color: COLOR_PRIMARY,
    fontFamily: FONT_BOLD,
  },
  loginRegisterButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
  },
  loginRegisterButtonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
  },
});

export default LoginPage;
