import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import skiiImage from "../assets/skii.png";

export const CategoryListItem = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.title}>{category.name}</Text>
      <Image style={styles.image} source={skiiImage} />
    </TouchableOpacity>
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
    marginRight: 16,
    marginLeft: 16,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
