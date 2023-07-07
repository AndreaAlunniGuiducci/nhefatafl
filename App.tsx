/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Game } from "./pages/Game";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "./components/organism/Header";
import { menuItem } from "./utils/menuItem";
import { mainStyles } from "./mainStyle";
import { PaperProvider } from "react-native-paper";

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={mainStyles.mainView}>
          <StatusBar hidden={true} />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Game"
              screenOptions={{
                header: (HeaderProps) => (
                  <Header navigation={HeaderProps.navigation} menuItem={menuItem}/>
                ),
                animation: "none",
              }}
            >
              {menuItem.map((item, index) => (
                <Stack.Screen
                  key={index}
                  name={item.title}
                  component={item.component}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

export default App;
