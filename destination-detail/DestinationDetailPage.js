import React from "react";
import TextComponent from "../shared/components/TextComponent";

const DestinationDetailPage = ({ navigation, route }) => {
  const { destination } = route.params;
  return <TextComponent>{destination.name}</TextComponent>;
};

export default DestinationDetailPage;
