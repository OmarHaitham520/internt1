import React from "react";
import { Text, View, StyleSheet,Button } from "react-native";
const clothDetail = (props) => {
  return (
    <View>
      <Text>cloth detail</Text>
      <Button
        title="BACK To Categories!"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});
export default clothDetail;
//specific item
