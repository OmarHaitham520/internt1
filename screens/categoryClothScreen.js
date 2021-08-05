import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { CATERGORIES, hedoom } from "../data/dummy-data";
import ClothItem from '../comp/ClothItem';
const categoryClothScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedCloth = hedoom.filter(
    (cloth) => cloth.categoryIds.indexOf(catId) >= 0
  );
  const renderCloth = (itemData) => {
    return <ClothItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelectCloth={()=>{}}
        size={itemData.item.size}
        price={itemData.item.price}
    
           />;
  };
  return (
    <FlatList
      data={displayedCloth}
      keyExtractor={(item, index) => item.id}
      renderItem={renderCloth}
      style={{width:'100%'}}
      numColumns={2}
    />
  );
};
categoryClothScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATERGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});
export default categoryClothScreen;
//specific category alone
