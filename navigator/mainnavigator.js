import React from "react";
// In App.js in a new project

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SwipeMain from "../Screen/SwipeMain";
import Tab from "../Components/Tab";
import Home from "../Screen/Home";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TabS"
          component={Tab}
          options={{
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTitleStyle: {
              color: "#fff",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
