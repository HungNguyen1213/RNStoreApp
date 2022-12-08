import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import skiiImage from "../assets/skii.png";

export const CategoryListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryListItem</Text>
      <Image style={styles.image} source={skiiImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 64,
    width: 64,
  },
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    marginBottom: 16,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
