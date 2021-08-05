import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import cataScreen from "../screens/cataScreen";
import categoryClothScreen from "../screens/categoryClothScreen";
import clothDetail from "../screens/clothDetail";

const ClothNavigator = createStackNavigator({
  categoryScreen: cataScreen,
  categoryCloth: categoryClothScreen,
  clothDetail: clothDetail,
});

export default createAppContainer(ClothNavigator);
