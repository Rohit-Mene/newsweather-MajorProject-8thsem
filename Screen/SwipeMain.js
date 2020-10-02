import React, { Component } from "react";
import Swiper from "react-native-swiper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import Home from "./Home";
import Tab from "../Components/Tab";

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const Stack = createStackNavigator();
class SwipeMain extends Component {
  render() {
    return (
      <Swiper loop={false} showsPagination={false} index={1}>
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
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}
        >
          <Tab />
        </Swiper>
        {/*<View>
          <Text>Right</Text>
        </View>
 */}
      </Swiper>
    );
  }
}

export default SwipeMain;
