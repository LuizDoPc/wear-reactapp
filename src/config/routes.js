import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Tab from "./Tab";

/* Screen imports */
import Home from "../screens/HomeScreen";
import UpScreen from "../screens/UpScreen";

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: <Tab />
    }
  },
  Up: {
    screen: UpScreen,
    navigationOptions: {
      header: <Tab />
    }
  }
});

const App = createAppContainer(Stack);

export default App;
