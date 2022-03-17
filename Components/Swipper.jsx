import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Platform,
} from "react-native";
import Swiper from "react-native-swiper";
import React from "react";
import * as Animatable from "react-native-animatable";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const GuitarImage = {
  uri: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  uri: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  uri: "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  uri: "https://images.unsplash.com/photo-1588690224648-20426ab6274a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
  uri: "https://images.unsplash.com/photo-1543945696-4f1116f30c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
};

export default function Swipper() {
  return (
    <Swiper
      activeDotColor="#D36135"
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      activeDotStyle={Platform.OS === "ios" ? styles.iosDot : styles.androidDot}
      dotStyle={
        Platform.OS === "ios" ? styles.iosDotActive : styles.androidDotActive
      }
      smoothTransition={true}
    >
      <Animatable.View>
        <Animatable.Image
          animation="fadeIn"
          easing={"ease-in"}
          style={styles.slide1}
          source={{
            uri: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={{
            width: ScreenWidth,
            height: ScreenHeight / 1.5,
          }}
        ></Animatable.Image>
      </Animatable.View>
      <View style={styles.slide2}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={{
            width: ScreenWidth,
            height: ScreenHeight / 1.5,
            resizeMode: "cover",
          }}
        ></Image>
      </View>
      <View style={styles.slide3}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={{
            width: ScreenWidth,
            height: ScreenHeight / 1.5,
            resizeMode: "cover",
          }}
        ></Image>
      </View>
      <View style={styles.slide4}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1543945696-4f1116f30c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
          }}
          style={{
            width: ScreenWidth,
            height: ScreenHeight / 1.5,
            resizeMode: "cover",
          }}
        ></Image>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  HeroImage: { height: "100%" },
  wrapper: {
    height: ScreenHeight / 1.3,
  },
  slide1: {},
  slide2: {},
  slide3: {},
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  dotstyle: {
    bottom: ScreenHeight / 45,
  },
  dotstyle1: {
    bottom: ScreenHeight / 40,
    width: 15,
  },
  iosDot: {
    bottom: -3,
    width: 15,
  },
  androidDot: {
    bottom: 70,
    width: 15,
  },
  iosDotActive: {
    bottom: -3,
  },
  androidDotActive: {
    bottom: 70,
  },
});
