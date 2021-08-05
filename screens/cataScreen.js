import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
//import { CATERGORIES } from "../data/dummy-data";
const dataURl = "http://ffb9908d13c8.ngrok.io/CATERGORIES";
const cataScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(dataURl)
      .then((response) => {
        debugger;
        response.json();
        console.log("response",response);
      })
      
      //.then((json) => setData(json.CATERGORIES))
      .catch((error) =>{
        console.log("error",error);
        alert(error);
      } )
      .finally(setLoading(false));
  });

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "categoryCloth",
            params: { categoryId: itemData.item.id },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      //keyExtractor={(item, index) => item.id}
      // data={CATERGORIES}
      data={data}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

cataScreen.navigationOptions = {
  headerTitle: "Cloth Categories",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 140,
  },
});
export default cataScreen;
//all categories
