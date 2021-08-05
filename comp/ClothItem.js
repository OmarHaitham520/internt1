import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
const ClothItem = (Cloprops) => {
  //console.log("props",Cloprops);
  return (
    <View style={styles.itemScreen}>
      <TouchableOpacity onPress={Cloprops.onSelectCloth}>
        <View>
          <View style={{ ...styles.clothRow, ...styles.clothHeader }}>
            <ImageBackground
              source={{ uri: Cloprops.image }}
              style={styles.bgImage}
            >
              <Text style={styles.text}>{Cloprops.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.clothRow, ...styles.clothDeatail }}>
            <Text>{Cloprops.size}EU</Text>
            <Text>{Cloprops.price}$</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  ); 
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    textAlign: "center",
    paddingHorizontal: 12,
  },

  itemScreen: {
    height: 150,
    width: "30%",
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
  },
  clothRow: {
    flexDirection: "row",
  },
  clothHeader: {
    height: "90%",
  },
  clothDeatail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  bgImage: {
    width: "100%",

    height: "100%",
  },
});
export default ClothItem;
