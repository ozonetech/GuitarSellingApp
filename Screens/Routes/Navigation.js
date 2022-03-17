import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../Homescreen";
import FeedPage from "../FeedPage/FeedPage";

export default function Navigation() {
  const Stack = createStackNavigator();
  const Screenoptions = { headerShown: false };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homescreen"
        screenOptions={Screenoptions}
      >
        <Stack.Screen name="Homescreen" component={Homescreen}></Stack.Screen>
        <Stack.Screen name="Feedpage" component={FeedPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
