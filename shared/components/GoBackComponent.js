import React from "react";
import { TouchableOpacity } from "react-native";
import { SPACING_MEDIUM } from "../constants/Dimens";
import BackIconWhite from "../icons/back-icon-white.svg";
import BackIcon from "../icons/back-icon.svg";

const GoBackComponent = ({ style, onPress, isWhite = false }) => {
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      {isWhite ? (
        <BackIconWhite width={SPACING_MEDIUM} height={SPACING_MEDIUM} />
      ) : (
        <BackIcon width={SPACING_MEDIUM} height={SPACING_MEDIUM} />
      )}
    </TouchableOpacity>
  );
};

export default GoBackComponent;
