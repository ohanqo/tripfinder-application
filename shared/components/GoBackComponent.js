import React from "react";
import { TouchableOpacity } from "react-native";
import { SPACING_MEDIUM } from "../constants/Dimens";
import BackIcon from "../icons/back-icon.svg";

const GoBackComponent = ({ style, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      <BackIcon width={SPACING_MEDIUM} height={SPACING_MEDIUM} />
    </TouchableOpacity>
  );
};

export default GoBackComponent;
