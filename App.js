import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import InsideCategoryScreen from "./InsideCategoryScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="InsideCategory" component={InsideCategoryScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
