import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FeedHeader from "./Components/FeedHeader";
import FeedBanner from "./Components/FeedBanner";
import GuitarCollection from "./Components/GuitarCollection";
import ImageData from "./Data/ImageData.json";

export default function FeedPage() {
  const ScreenWidth = Dimensions.get("window").width;

  const [Images, setImages] = useState([
    { src: require("../../assets/photo11.png"), key: "1" },
    { src: require("../../assets/photo12.png"), key: "2" },
    { src: require("../../assets/photo13.png"), key: "3" },
  ]);
  return (
    <SafeAreaView
      style={[
        Platform.OS === "ios" ? styles.IosAreaView : styles.AndroidAreaView,
        styles.container,
      ]}
    >
      <View style={{ paddingHorizontal: 10 }}>
        <FeedHeader></FeedHeader>
        <FeedBanner></FeedBanner>
        <View style={styles.afterBannerText}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Recommended for you
          </Text>
          <Text style={{ color: "#666666" }}>Based on Search</Text>
        </View>
        <ScrollView scrollEnabled={true}>
          <GuitarCollection></GuitarCollection>
        </ScrollView>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Text style={{ color: "black", fontSize: 20 }}>$2999</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  AndroidAreaView: { top: 45 },
  afterBannerText: { marginVertical: 20 },
});
