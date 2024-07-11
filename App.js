import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./screens/IndexScreen";
import CreateScreen from "./screens/CreateScreen";
import { Provider } from "./contex/BlogContextUseReducer";


  const Stack = createNativeStackNavigator();
  
export default function App() {

  return (
    <Provider>
      <NavigationContainer>
        {/*Tüm ekranlarda "blog uygulamsı gözükmesi için  screenOptions={{headerTitle:"Blog Uygulaması"}} yapısı kullanılır.*/}
        <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulaması" }}>
          <Stack.Screen name="Index" component={IndexScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
