import React from "react";
import * as Animatable from "react-native-animatable";
import FeedPage from "../Screens/FeedPage/FeedPage";
import { useNavigation } from "@react-navigation/native";

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Touchable,
  TouchableOpacity,
  Platform,
} from "react-native";
import Swiper from "react-native-swiper";
import Swipper from "../Components/Swipper";

const height = Dimensions.get("window").height;

const screens = {
  feed: FeedPage,
};

export default function Homescreen() {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100%" }}>
      <Swipper></Swipper>
      <View style={Platform.OS === "ios" ? styles.iosText : styles.androidText}>
        <Text style={styles.homeBold}> Choose the Best Guitar for You</Text>
        <Text style={styles.homenarrow}>
          Browse from various top quality Branded Guitars easily.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Feedpage")}
        style={styles.homeButton}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  homeBold: {
    fontWeight: "bold",
    fontSize: 33,
    textAlign: "center",
  },
  homenarrow: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "300",
    color: "#666666",
  },
  homeText: {
    width: "60%",
    alignContent: "center",
    alignSelf: "center",
    bottom: height / 30,
  },
  iosText: {
    width: "70%",
    alignContent: "center",
    alignSelf: "center",
    bottom: height / 25,
  },
  androidText: {
    width: "70%",
    alignContent: "center",
    alignSelf: "center",
    bottom: height / 15,
  },
  homeButton: {
    backgroundColor: "#D36135",
    alignItems: "center",
    padding: 20,
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    bottom: height / 40,
    color: "#fff",
  },
});
