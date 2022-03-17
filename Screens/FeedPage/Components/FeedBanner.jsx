import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

export default function FeedBanner() {
  return (
    <View style={styles.feedBanner}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 20,
        }}
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/757/235/802/music-background-dark-vinyl-wallpaper-thumb.jpg",
        }}
      ></Image>
      <Text style={styles.bannerText} numberOfLines={2}>
        ARTIST COLLECTION
      </Text>
      <View style={styles.feedBannerOverlay}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedBanner: {
    height: 220,
    width: "100%",
    paddingVertical: 10,
  },
  // feedBannerOverlay: {
  //   backgroundColor: "#000",
  //   width: "100%",
  //   height: "100%",
  //   position: "absolute",
  //   zIndex: 3,
  //   borderRadius: 20,
  //   opacity: 0.3,
  //   top: 20,
  //   borderColor: "#DEDEDE",
  //   borderWidth: 3,
  // },

  bannerText: {
    color: "#fff",
    zIndex: 5,
    fontSize: 22,
    position: "absolute",
    width: "50%",
    left: 20,
    fontWeight: "bold",
    top: "65%",
    letterSpacing: 3,
  },
});
