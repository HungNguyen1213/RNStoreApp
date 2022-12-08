import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { CategoryListItem } from "../components/CategoryListItem";

export const Categories = ({ navigation }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fakeData = [
      { id: 1, name: "Dung cu truot tuyet" },
      { id: 2, name: "Quan ao truot tuyet" },
      { id: 3, name: "Kinh mu" },
      { id: 4, name: "Dung cu truot tuyet" },
      { id: 5, name: "Quan ao truot tuyet" },
      { id: 6, name: "Kinh mu" },
      { id: 7, name: "Dung cu truot tuyet" },
      { id: 8, name: "Quan ao truot tuyet" },
      { id: 9, name: "Kinh mu" },
    ];
    setCategoryList(fakeData);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() =>
              navigation.navigate("Category", { name: `${item.name}` })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
