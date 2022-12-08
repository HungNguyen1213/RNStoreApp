import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories } from "./screen/Categories";
import { Category } from "./screen/Category";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
          }}
          component={Categories}
        />
        <Stack.Screen
          name="Category"
          options={({ route }) => ({
            title: route.params.name,
          })}
          component={Category}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
