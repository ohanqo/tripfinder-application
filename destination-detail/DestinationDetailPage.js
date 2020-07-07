import { LinearGradient } from "expo-linear-gradient";
import { debounce } from "lodash";
import React from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import GoBackComponent from "../shared/components/GoBackComponent";
import TextComponent from "../shared/components/TextComponent";
import {
  COLOR_ACCENT,
  COLOR_BLACK,
  COLOR_WHITE,
} from "../shared/constants/Colors";
import {
  FONT_HEADLINE,
  FONT_LARGE,
  FONT_LARGER,
  SPACING_LARGE,
  SPACING_SMALLER,
} from "../shared/constants/Dimens";
import { FONT_BOLD, FONT_LIGHT } from "../shared/constants/Fonts";
import LineIcon from "../shared/icons/line-icon.svg";
import { SERVER_URL } from "../shared/services/service";

const layerHeight = {
  FRONT_DEFAULT: 10,
  FRONT_MAXIMIZE: 85,
  MIDDLE_DEFAULT: 20,
  MIDDLE_MAXIMIZE: 85,
};

export default class DestinationDetailPage extends React.Component {
  state = {
    pan: new Animated.ValueXY(),
    frontLayerHeight: new Animated.Value(layerHeight.FRONT_DEFAULT),
    middleLayerHeight: new Animated.Value(layerHeight.MIDDLE_DEFAULT),
  };

  delayedMiddleLayerFromDefaultToMaximized = debounce(
    this.animatedMiddleLayerFromDefaultToMaximized,
    300,
    {
      leading: true,
      trailing: false,
    },
  );

  animatedMiddleLayerFromDefaultToMaximized() {
    Animated.spring(this.state.middleLayerHeight, {
      toValue: layerHeight.MIDDLE_MAXIMIZE,
      speed: 0.5,
      bounciness: -5,
    }).start();
  }

  delayedMiddleLayerFromMaximizedToDefault = debounce(
    this.animatedMiddleLayerFromMaximizedToDefault,
    300,
    {
      leading: true,
      trailing: false,
    },
  );

  animatedMiddleLayerFromMaximizedToDefault() {
    Animated.spring(this.state.middleLayerHeight, {
      toValue: layerHeight.MIDDLE_DEFAULT,
      speed: 0.5,
      bounciness: -5,
    }).start();
  }

  delayedFrontLayerFromDefaultToMaximized = debounce(
    this.animatedFrontLayerFromDefaultToMaximized,
    300,
    {
      leading: true,
      trailing: false,
    },
  );

  animatedFrontLayerFromDefaultToMaximized() {
    Animated.spring(this.state.frontLayerHeight, {
      toValue: layerHeight.FRONT_MAXIMIZE,
      speed: 0.5,
      bounciness: -5,
    }).start();
  }

  delayedFrontLayerFromMaximizedToDefault = debounce(
    this.animatedFrontLayerFromMaximizedToDefault,
    300,
    {
      leading: true,
      trailing: false,
    },
  );

  animatedFrontLayerFromMaximizedToDefault() {
    Animated.spring(this.state.frontLayerHeight, {
      toValue: layerHeight.FRONT_DEFAULT,
      speed: 0.5,
      bounciness: -5,
    }).start();
  }

  render() {
    const { destination } = this.props.route.params;
    const { navigation } = this.props;

    return (
      <View style={styles.detailWrapper}>
        <ImageBackground
          style={styles.detailBackground}
          source={{
            uri: `${SERVER_URL}${destination.filename}`,
          }}
        >
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.4)"]}
            style={styles.detailBackgroundGradient}
          >
            <GoBackComponent
              style={styles.detailGoBack}
              isWhite={true}
              onPress={navigation.goBack}
            />

            <View style={styles.detailDestinationWrapper}>
              <Text style={styles.detailDestinationName}>
                {destination.name}
              </Text>
              <Text style={styles.detailDestinationCountry}>
                {destination.country_name}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <PanGestureHandler
          onGestureEvent={(event) => {
            const isSwipingToTop = event.nativeEvent.velocityY < 0;

            isSwipingToTop
              ? this.delayedMiddleLayerFromDefaultToMaximized()
              : this.delayedMiddleLayerFromMaximizedToDefault();
          }}
        >
          <Animated.View
            style={[
              styles.detailMiddleLayer,
              {
                height: this.state.middleLayerHeight.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          >
            <LineIcon style={styles.detailLine} width="40" height="40" />

            <TextComponent style={styles.detailMiddleLayerTitle}>
              Informations
            </TextComponent>
          </Animated.View>
        </PanGestureHandler>

        <PanGestureHandler
          onGestureEvent={(event) => {
            const isSwipingToTop = event.nativeEvent.velocityY < 0;

            isSwipingToTop
              ? this.delayedFrontLayerFromDefaultToMaximized()
              : this.delayedFrontLayerFromMaximizedToDefault();
          }}
        >
          <Animated.View
            style={[
              styles.detailFrontLayer,
              {
                height: this.state.frontLayerHeight.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          >
            <LineIcon style={styles.detailLine} width="40" height="40" />
            <TextComponent style={styles.detailFrontLayerTitle}>
              Description
            </TextComponent>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flex: 1,
    backgroundColor: COLOR_BLACK,
  },
  detailBackground: {
    height: Dimensions.get("window").height * 0.9,
    width: "100%",
    resizeMode: "cover",
  },
  detailBackgroundGradient: {
    width: "100%",
    height: "100%",
  },
  detailGoBack: {
    marginStart: SPACING_LARGE,
    marginTop: 60,
  },
  detailDestinationWrapper: {
    alignSelf: "flex-start",
    marginTop: "auto",
    marginStart: SPACING_LARGE,
    marginBottom: Dimensions.get("window").height * 0.15,
  },
  detailDestinationName: {
    fontSize: FONT_HEADLINE,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
  },
  detailDestinationCountry: {
    fontSize: FONT_LARGE,
    color: COLOR_WHITE,
    fontFamily: FONT_LIGHT,
  },
  detailMiddleLayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR_ACCENT,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingVertical: SPACING_SMALLER,
    paddingHorizontal: SPACING_LARGE,
  },
  detailLine: {
    alignSelf: "center",
  },
  detailFrontLayer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR_WHITE,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingVertical: SPACING_SMALLER,
    paddingHorizontal: SPACING_LARGE,
  },
  detailFrontLayerTitle: {
    fontSize: FONT_LARGER,
    fontFamily: FONT_BOLD,
  },
  detailMiddleLayerTitle: {
    fontSize: FONT_LARGER,
    fontFamily: FONT_BOLD,
    color: COLOR_WHITE,
  },
});
