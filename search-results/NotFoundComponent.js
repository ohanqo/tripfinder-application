import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from '../shared/components/TextComponent';

const NotFoundComponent = () => {

  return(
    <View style={styles.componentWrapper}>
      <TextComponent>Désolé, aucune ville ne correspond à vos critères de recherche</TextComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  componentWrapper: {
    width: "100%"
  }
})

export default NotFoundComponent;