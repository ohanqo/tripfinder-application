import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RegisterBackgroundImage from "../../shared/assets/images/register-background.jpg";
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
import { PAGE_LOGIN } from "../../shared/constants/Pages";
import extractError from "../../shared/utils/ExtractErrorMessage";
import AuthenticationRepository from "../AuthenticationRepository";

const RegisterPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const register = async () => {
    const dto = {
      name,
      email,
      password,
    };

    try {
      const response = await AuthenticationRepository.register(dto);
      const potentialErrors = response?.response?.data?.errors ?? null;

      if (potentialErrors) {
        setErrorMessage(extractError(potentialErrors));
      } else {
        navigation.replace(PAGE_LOGIN);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Une erreur est survenue.");
    }
  };

  return (
    <View style={styles.registerWrapper}>
      <ImageBackground
        style={styles.registerBackground}
        imageStyle={styles.registerBackgroundImage}
        source={RegisterBackgroundImage}
      >
        <GoBackComponent
          style={styles.registerGoBack}
          isWhite={true}
          onPress={navigation.goBack}
        />

        <View style={styles.registerLayer}>
          <TextComponent style={styles.registerTitle}>
            Créer un compte
          </TextComponent>

          <TextInput
            placeholderTextColor={COLOR_GHOST}
            style={styles.registerInput}
            placeholder="Nom"
            onChangeText={(s) => setName(s)}
          />

          <TextInput
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor={COLOR_GHOST}
            style={styles.registerInput}
            placeholder="Email"
            onChangeText={(s) => setEmail(s)}
          />

          <TextInput
            textContentType="password"
            placeholderTextColor={COLOR_GHOST}
            secureTextEntry={true}
            style={styles.registerInput}
            placeholder="Mot de passe"
            onChangeText={(s) => setPassword(s)}
          />

          {errorMessage ? (
            <TextComponent style={styles.registerErrorMessage}>
              {errorMessage}
            </TextComponent>
          ) : null}

          <View style={styles.registerSpacing} />

          <TouchableOpacity style={styles.registerButton} onPress={register}>
            <TextComponent style={styles.registerButtonText}>
              S'inscrire
            </TextComponent>
          </TouchableOpacity>

          <View style={styles.registerAlreadyAnAccount}>
            <TextComponent style={styles.registerAlreadyAnAccountText}>
              Déjà un compte ?{" "}
            </TextComponent>

            <TouchableOpacity onPress={() => navigation.replace(PAGE_LOGIN)}>
              <TextComponent style={styles.registerAlreadyAnAccountTextAccent}>
                Connectez-vous
              </TextComponent>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  registerWrapper: {
    flex: 1,
  },
  registerBackground: {
    flex: 1,
  },
  registerGoBack: {
    marginStart: SPACING_LARGER,
    marginTop: 60,
  },
  registerBackgroundImage: {
    height: Dimensions.get("window").height * 0.5,
    width: "100%",
    resizeMode: "cover",
  },
  registerLayer: {
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
  registerTitle: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_LARGER,
    marginBottom: SPACING_LARGE,
    marginTop: SPACING_NORMAL,
  },
  registerInput: {
    marginBottom: SPACING_LARGE,
    borderBottomWidth: 1,
    borderColor: COLOR_GHOST,
    paddingBottom: SPACING_SMALLER,
    fontFamily: FONT_REGULAR,
  },
  registerErrorMessage: {
    fontSize: FONT_SMALL,
    color: COLOR_ERROR,
  },
  registerSpacing: {
    flexGrow: 1,
  },
  registerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_PRIMARY,
    marginBottom: SPACING_LARGER,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
  },
  registerButtonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
  },
  registerAlreadyAnAccount: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  registerAlreadyAnAccountText: {
    color: COLOR_GHOST,
    fontSize: FONT_SMALL,
  },
  registerAlreadyAnAccountTextAccent: {
    fontSize: FONT_SMALL,
    color: COLOR_PRIMARY,
  },
});

export default RegisterPage;
