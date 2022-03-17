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
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function FeedHeader() {
  return (
    <View style={styles.firstColumn}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Your Feed</Text>
      <View style={styles.Icon}>
        <TouchableOpacity>
          <View style={styles.notifyCounter}>
            <Text
              style={{
                fontSize: 9,
                color: "#fff",
                textAlign: "center",
                top: -0.5,
              }}
            >
              2
            </Text>
          </View>
          <FontAwesome
            style={styles.iconCircle}
            name="bell-o"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            style={styles.iconCircle}
            name="shoppingcart"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  firstColumnIcon: { flexDirection: "row" },

  Icon: { flexDirection: "row" },
  iconCircle: {
    marginHorizontal: 10,
    padding: 10,
    borderColor: "#D4D4D4",
    borderWidth: 2,
    borderRadius: 25,
    textAlign: "center",
  },
  notifyCounter: {
    backgroundColor: "#D36135",
    width: 15,
    height: 15,
    position: "absolute",
    borderRadius: 10,
    top: 10,
    left: 35,
    borderWidth: 2,
    borderColor: "#fff",
    zIndex: 1,
  },
});
