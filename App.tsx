/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";

import { Home } from "./pages/Game/Home";
import { Game } from "./pages/Game";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Game' component={Game}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
