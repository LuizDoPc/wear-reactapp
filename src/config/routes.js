import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Tab from "./Tab";

/* Screen imports */
import Home from "@screens/HomeScreen";
import PickerScreen from "@screens/PickerScreen";

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Picker: {
    screen: PickerScreen,
    navigationOptions: {
      header: <Tab />
    }
  }
});

const App = createAppContainer(Stack);

export default App;
