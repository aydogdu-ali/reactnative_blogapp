import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./screens/IndexScreen";
import CreateScreen from "./screens/CreateScreen";
import { Provider } from "./contex/BlogContextUseReducer";
import ShowScreen from "./screens/ShowScreen";
import EditScreen from "./screens/EditScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        {/*Tüm ekranlarda "blog uygulamsı gözükmesi için  screenOptions={{headerTitle:"Blog Uygulaması"}} yapısı kullanılır.*/}
        <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulaması" }}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            //Ana ekrandan ikona tıklayarak başka bir sayfaya yönlendirme yaptık. Bu sayfa kursları ekleme sayfası
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  {/*İconu gösteren yapı*/}
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          {/*Kursları ekleme ekranı*/}
          <Stack.Screen name="Create" component={CreateScreen} />
          {/*Kursları gösterme ekranı*/}
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation,route }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit",{id:route.params.id})}>
                  {/*İconu gösteren yapı*/}
                  <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          {/*Kursları düzenleme ekranı*/}
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
