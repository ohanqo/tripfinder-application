import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Picker,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import beach from "../shared/assets/images/beach.jpg";
import culture from "../shared/assets/images/culture.jpg";
import formBackgroundImage from "../shared/assets/images/login-background.jpg";
import mountain from "../shared/assets/images/mountain.jpg";
import nightLiving from "../shared/assets/images/night-living.jpg";
import sport from "../shared/assets/images/sport.jpg";
import GoBackComponent from "../shared/components/GoBackComponent";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_ERROR,
  COLOR_GHOST,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from "../shared/constants/Colors";
import {
  FONT_LARGE,
  FONT_LARGER,
  FONT_SMALL,
  SPACING_LARGE,
  SPACING_LARGER,
  SPACING_NORMAL,
  SPACING_SMALL,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_REGULAR } from "../shared/constants/Fonts";
import { PAGE_HOME } from "../shared/constants/Pages";
import ChecBoxChecked from "../shared/icons/checkBox-checked.svg";
import ChecBoxUnchecked from "../shared/icons/checkBox-unchecked.svg";
import CityService from "../shared/services/CityService";
import CountryService from "../shared/services/CountryService";
import extractError from "../shared/utils/ExtractErrorMessage";

const createMessages = {
  title: "Ajout d'une destination",
  image: "Ajouter une image",
  confirm: "Publier la destination",
};

const editMessages = {
  title: "Édition d'une destination",
  image: "Modifier l'image",
  confirm: "Mise à jour de la destination",
};

const DestinationFormPage = ({ navigation, destination = null }) => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState(destination?.name);
  const [countryId, setCountryId] = useState(0);
  const [budget, setBudget] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState(0);
  const [types, setTypes] = useState([
    { id: 1, name: "Montagne", selected: false, image: mountain },
    { id: 2, name: "Plage", selected: false, image: beach },
    { id: 3, name: "Vie Nocturne", selected: false, image: nightLiving },
    { id: 4, name: "Culture", selected: false, image: culture },
    { id: 5, name: "Sport", selected: false, image: sport },
  ]);

  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await CountryService.getCountries();
      setCountries(response);
    };

    fetchCountries();
  }, []);

  const displayWipAlert = () => {
    Alert.alert(
      "Attention",
      "Cette fonctionnalité n'est pas disponible pour le moment.",
      [{ text: "OK" }],
      { cancelable: false },
    );
  };

  const selectType = (type) => {
    let index = types.indexOf(type);
    type.selected = type.selected ? false : true;
    let newTypes = JSON.parse(JSON.stringify(types));
    newTypes[index] = type;
    setTypes(newTypes);
  };

  const postCity = async () => {
    const selectedTypes = types
      .filter((item) => item.selected)
      .map((item) => item.id);

    const dto = {
      country_id: countryId,
      name,
      budget,
      temperature,
      description,
      types: selectedTypes,
    };

    try {
      const response = await CityService.postCity(dto);
      const potentialErrors = response?.response?.data?.errors ?? null;

      if (potentialErrors) {
        setErrorMessage(extractError(potentialErrors));
      } else {
        navigation.navigate(PAGE_HOME);
      }
    } catch (error) {
      setErrorMessage("Une erreur est survenue");
    }
  };

  const isAnEdition = () => destination?.id !== undefined;

  const messages = isAnEdition() ? editMessages : createMessages;

  return (
    <View style={styles.formWrapper}>
      <ImageBackground
        style={styles.formBackground}
        imageStyle={styles.formBackgroundImage}
        source={formBackgroundImage}
      >
        <View style={styles.formImageDarkLayer}>
          <GoBackComponent
            style={styles.formGoBack}
            isWhite={true}
            onPress={navigation.goBack}
          />

          <TouchableOpacity
            style={styles.formImageButton}
            onPress={displayWipAlert}
          >
            <TextComponent style={styles.formImageButtonText}>
              {messages.image}
            </TextComponent>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={styles.formLayer}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ScrollView>
            <TextComponent style={styles.formTitle}>
              {messages.title}
            </TextComponent>

            <Picker
              style={styles.formInput}
              selectedValue={countryId}
              onValueChange={(value) => setCountryId(value)}
            >
              {countries.map((item, index) => (
                <Picker.Item
                  key={index.toString()}
                  label={item.name}
                  value={item.id}
                />
              ))}
            </Picker>

            <TextInput
              placeholderTextColor={COLOR_GHOST}
              style={styles.formInput}
              placeholder="Nom"
              onChangeText={(s) => setName(s)}
            />

            <TextInput
              placeholderTextColor={COLOR_GHOST}
              keyboardType="numeric"
              style={styles.formInput}
              placeholder="Budget"
              onChangeText={(s) => setBudget(s)}
            />

            <TextInput
              placeholderTextColor={COLOR_GHOST}
              keyboardType="numeric"
              style={styles.formInput}
              placeholder="Température"
              onChangeText={(s) => setTemperature(s)}
            />

            <TextInput
              placeholderTextColor={COLOR_GHOST}
              style={styles.formInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Description"
              onChangeText={(s) => setDescription(s)}
            />

            <TextComponent style={styles.typesTitle}>
              Centre d'intérêts
            </TextComponent>
            <View style={styles.typesWrapper}>
              {types.map((item, index) => (
                <TouchableOpacity
                  style={styles.typeSelect}
                  key={index}
                  onPress={() => selectType(item)}
                >
                  <ImageBackground
                    source={item.image}
                    style={styles.typeImage}
                    imageStyle={styles.typeImage}
                  >
                    <View style={styles.typeInfoWrapper}>
                      <LinearGradient
                        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                        style={styles.typeInfoLineWrapper}
                      >
                        <TextComponent style={styles.typeLabel}>
                          {item.name}
                        </TextComponent>
                        {item.selected ? (
                          <ChecBoxChecked width="20" height="20" />
                        ) : (
                          <ChecBoxUnchecked width="20" height="20" />
                        )}
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>

            {errorMessage ? (
              <TextComponent style={styles.formErrorMessage}>
                {errorMessage}
              </TextComponent>
            ) : null}

            <View style={styles.formSpacing} />

            <TouchableOpacity style={styles.formButton} onPress={postCity}>
              <TextComponent style={styles.formButtonText}>
                {messages.confirm}
              </TextComponent>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
  },
  formBackground: {
    flex: 1,
  },
  formGoBack: {
    marginStart: SPACING_LARGER,
    marginTop: 60,
  },
  formBackgroundImage: {
    height: Dimensions.get("window").height * 0.5,
    width: "100%",
    resizeMode: "cover",
  },
  formLayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: COLOR_WHITE,
    display: "flex",
    flexDirection: "column",
    padding: SPACING_LARGER,
    paddingBottom: 0,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  formTitle: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_LARGER,
    marginBottom: SPACING_LARGE,
    marginTop: SPACING_NORMAL,
  },
  formInput: {
    marginBottom: SPACING_LARGE,
    borderBottomWidth: 1,
    borderColor: COLOR_GHOST,
    paddingBottom: SPACING_SMALLER,
    fontFamily: FONT_REGULAR,
  },
  formErrorMessage: {
    fontSize: FONT_SMALL,
    color: COLOR_ERROR,
    marginBottom: SPACING_LARGE,
  },
  formSpacing: {
    flexGrow: 1,
  },
  formButton: {
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
  formButtonText: {
    color: COLOR_PRIMARY,
    fontFamily: FONT_BOLD,
  },
  formRegisterButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_LARGE,
    borderRadius: SPACING_SMALLER,
    marginBottom: SPACING_LARGER,
  },
  formRegisterButtonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
  },
  formImageDarkLayer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
  },
  formImageButton: {
    borderWidth: 2,
    borderColor: COLOR_WHITE,
    alignSelf: "center",
    marginTop: SPACING_LARGER,
    padding: SPACING_SMALL,
    borderRadius: 10,
  },
  formImageButtonText: {
    color: COLOR_WHITE,
  },
  flatListStyle: {
    marginTop: SPACING_LARGE,
  },
  flatListRowStyle: {
    justifyContent: "space-evenly",
    marginBottom: SPACING_SMALL,
  },
  typeSelect: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    borderRadius: SPACING_NORMAL,
    marginBottom: SPACING_NORMAL,
  },
  typeImage: {
    flex: 1,
    borderRadius: SPACING_NORMAL,
  },
  typeInfoWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  typeInfoLineWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING_SMALL,
    paddingVertical: SPACING_SMALL,
    borderRadius: SPACING_NORMAL,
  },
  typeLabel: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
  },
  typesWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  typesTitle: {
    color: COLOR_GHOST,
    fontSize: FONT_LARGE,
    marginTop: SPACING_LARGER,
    marginBottom: SPACING_LARGE,
  },
});

export default DestinationFormPage;
