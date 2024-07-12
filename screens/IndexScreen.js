import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../contex/BlogContextUseReducer";
//silme iconu ekleniyor
import { Feather } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  // context de tanımladığımız methodları kullanıyoruz.
  // global olarak kullanacaklarımızı desc. ediyoruz.
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      {/*Butona tıklandığında ekleme methodunu aktif hale getirdik. */}
      <Text style={styles.text}>Kurs Listesi</Text>
      <FlatList
        // context de gönderilen value değeri yazalır.
        data={state}
        // id eşşiz değeri gibi düşünülecek
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                {/*Simgesi tıklanabilir yapıyoruz ve İd yi gönderiyoruz*/}
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "green",
  },
  title: {
    fontSize: 18,
  },
});
