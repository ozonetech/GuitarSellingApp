import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

export default function GuitarCollection() {
  const [people, setPeople] = useState([
    { image: require("../../../assets/photo11.png"), key: "1" },
    { image: require("../../../assets/photo12.png"), key: "2" },
    { image: require("../../../assets/photo13.png"), key: "3" },
    { image: require("../../../assets/photo13.png"), key: "4" },
    { image: require("../../../assets/photo13.png"), key: "5" },
    { image: require("../../../assets/photo13.png"), key: "6" },
    { image: require("../../../assets/photo13.png"), key: "7" },
    { image: require("../../../assets/photo13.png"), key: "8" },
    { image: require("../../../assets/photo13.png"), key: "9" },
  ]);
  return (
    <View>
      <Picker>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {people.map((item) => {
            return (
              <View style={styles.guitarShowView} key={item.key}>
                <Image
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                  source={item.image}
                ></Image>
              </View>
            );
          })}
        </ScrollView>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  guitarShow: { flexDirection: "row", width: "100%" },
  guitarShowView: {
    flexDirection: "row",
    width: 200,
    height: 250,
    backgroundColor: "#cccccc",
    borderRadius: 20,
    margin: 10,
    overflow: "scroll",
  },
  // guitarCollection: {
  //   backgroundColor: "grey",
  //   borderRadius: 25,
  //   width: "100%",
  //   height: 250,
  //   alignSelf: "center",
  // },
  // AllGuitar: {
  //   flexDirection: "row",
  // },
  // wrapper: {},
});
