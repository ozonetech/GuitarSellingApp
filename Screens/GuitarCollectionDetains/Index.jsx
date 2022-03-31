import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const movement = ["38%", "80.5%"];
  const [changePosition, setChangePosition] = useState(movement[0]);

  const changePositionCliked = () => {
    const styleId = movement.indexOf(changePosition) + 1;
    if (styleId === movement.length) {
      return setChangePosition(movement[0]);
    }
    // return setChangePosition(movement[styleId]);
  };
  const changeSecondPosition = () => {
    if (setChangePosition(movement[1])) {
      return setChangePosition(movement[styleId]);
    }
  };
  const Favouritedcolor = ["Red"];
  const [Favourited, setFavourited] = useState(Favouritedcolor[0]);

  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#E8E8E8",
          height: "65%",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "92%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={[styles.backIcon]}
            onPress={Navigation.goBack}
          >
            <AntDesign name="arrowleft" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.backIcon]}>
            <MaterialIcons
              name="favorite-border"
              size={28}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ zIndex: 1 }}>
          <Image
            source={require("../../assets/photo12.png")}
            resizeMode={"cover"}
            style={{
              height: "100%",
              top: -50,
              alignSelf: "center",
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.secondSection}>
        <View style={styles.allSmallGuitar}>
          <View style={styles.guitarsmall1}>
            <Image
              source={require("../../assets/photo13.png")}
              resizeMode={"contain"}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </View>

          <View style={styles.guitarsmall1}>
            <Image
              source={require("../../assets/photo12.png")}
              resizeMode={"center"}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </View>

          <View style={styles.guitarsmall1}>
            <Animated.Image
              source={require("../../assets/photo11.png")}
              resizeMode={"contain"}
              style={{
                width: "100%",
                height: "100%",
                transform: [{ scaleY: 1 }],
              }}
            />
          </View>
        </View>
        <View style={styles.allColorRing}>
          <View style={[styles.selectedRing, { left: changePosition }]}></View>
          <TouchableOpacity onPress={changePositionCliked}>
            <View style={styles.colorRing}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={changeSecondPosition}>
            <View
              style={[styles.colorRing, { backgroundColor: "#4D8489" }]}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  guitarsmall1: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 50,
    borderRadius: 10,
    margin: 5,
  },
  allSmallGuitar: {
    flexDirection: "row",
  },
  backIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "rgba(18,18,18,.2)",
    borderWidth: 2,
    top: "10%",
    left: "5%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  secondSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: 100,
    width: "95%",
    alignSelf: "center",
  },
  colorRing: {
    width: 22,
    height: 22,
    borderRadius: 30,
    backgroundColor: "#B57200",
    alignSelf: "center",
    margin: 10,
  },
  allColorRing: {
    flexDirection: "row",
  },
  selectedRing: {
    borderWidth: 1.5,
    borderColor: "rgba(18,18,18,.3)",
    width: 35,
    height: 35,
    borderRadius: 32,
    alignSelf: "center",
  },
});
