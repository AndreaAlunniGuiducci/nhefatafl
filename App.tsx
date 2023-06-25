/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";
import { mainStyles } from "./mainStyle";

import { Home } from "./pages/Home";
import { Game } from "./pages/Game";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "./components/Header";

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaView style={mainStyles.page}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (HeaderProps) => (
                <Header navigation={HeaderProps.navigation} />
              ),
              animation: "none",
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
