import React, { useState } from "react";
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
  COLOR_ERROR,
  COLOR_GHOST,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from "../../shared/constants/Colors";
import {
  FONT_LARGER,
  FONT_SMALL,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALLER,
} from "../../shared/constants/Dimens";
import { FONT_BOLD, FONT_REGULAR } from "../../shared/constants/Fonts";
import { PAGE_NAVBAR, PAGE_REGISTER } from "../../shared/constants/Pages";
import extractError from "../../shared/utils/ExtractErrorMessage";
import AuthenticationRepository from "../AuthenticationRepository";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const login = async () => {
    const dto = { email, password };

    try {
      const response = await AuthenticationRepository.login(dto);
      const potentialErrors = response?.response?.data?.errors ?? null;

      if (response?.access_token) {
        navigation.replace(PAGE_NAVBAR);
      } else {
        setErrorMessage(extractError(potentialErrors));
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Une erreur est survenue.");
    }
  };

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
            onChangeText={(s) => setEmail(s)}
          />

          <TextInput
            placeholderTextColor={COLOR_GHOST}
            style={styles.loginInput}
            placeholder="Mot de passe"
            secureTextEntry={true}
            onChangeText={(s) => setPassword(s)}
          />

          {errorMessage ? (
            <TextComponent style={styles.loginErrorMessage}>
              {errorMessage}
            </TextComponent>
          ) : null}

          <TouchableOpacity style={styles.loginButton} onPress={login}>
            <TextComponent style={styles.loginButtonText}>
              Se connecter
            </TextComponent>
          </TouchableOpacity>

          <View style={styles.loginSpacing} />

          <TouchableOpacity
            style={styles.loginRegisterButton}
            onPress={() => navigation.replace(PAGE_REGISTER)}
          >
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
    fontFamily: FONT_REGULAR,
  },
  loginErrorMessage: {
    fontSize: FONT_SMALL,
    color: COLOR_ERROR,
    marginBottom: SPACING_LARGE,
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
    borderWidth: 2,
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
