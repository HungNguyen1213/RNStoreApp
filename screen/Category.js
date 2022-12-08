import { StyleSheet, View, Text } from "react-native";

export const Category = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
