import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContextUseReducer from "../contex/BlogContextUseReducer1";

export default function IndexScreen() {
  // context de tanımladığımız methodları kullanıyoruz.
  const { data, addBlogPost } = useContext(BlogContextUseReducer);
  return (
    <View>
      {/*Butona tıklandığında ekleme methodunu aktif hale getirdik. */}
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        // context de gönderilen value değeri yazalır.
        data={data}
        // id eşşiz değeri gibi düşünülecek
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
