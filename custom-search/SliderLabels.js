import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";
import TextComponent from "../shared/components/TextComponent";
import { FONT_LARGE } from "../shared/constants/Dimens";

const sliderRadius = 3;
const width = 50;
export default class SliderLabels extends React.Component {
  static propTypes = {
    oneMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    twoMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    oneMarkerLeftPosition: PropTypes.number,
    twoMarkerLeftPosition: PropTypes.number,

    oneMarkerPressed: PropTypes.bool,
    twoMarkerPressed: PropTypes.bool,
  };

  render() {
    const {
      oneMarkerValue,
      twoMarkerValue,
      oneMarkerLeftPosition,
      twoMarkerLeftPosition,
      oneMarkerPressed,
      twoMarkerPressed,
    } = this.props.props;

    const { isEuros } = this.props;

    return (
      <View style={{ position: "relative" }}>
        {Number.isFinite(oneMarkerLeftPosition) &&
          Number.isFinite(oneMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                { left: oneMarkerLeftPosition - width / 2 + sliderRadius },
                oneMarkerPressed && styles.markerPressed,
              ]}
            >
              <TextComponent style={styles.sliderLabelText}>
            {oneMarkerValue} {isEuros? '€' : '°'}
              </TextComponent>
            </View>
          )}

        {Number.isFinite(twoMarkerLeftPosition) &&
          Number.isFinite(twoMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                { left: twoMarkerLeftPosition - width / 2 + sliderRadius },
                twoMarkerPressed && styles.markerPressed,
              ]}
            >
              <TextComponent style={styles.sliderLabelText}>
                {twoMarkerValue} {isEuros? '€' : '°'}
              </TextComponent>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderLabel: {
    position: "absolute",
    bottom: 0,
    minWidth: width,
    padding: 8,
    backgroundColor: "#f1f1f1",
  },
  sliderLabelText: {
    alignItems: "center",
    textAlign: "center",
    fontStyle: "normal",
    fontSize: FONT_LARGE,
  },
});
