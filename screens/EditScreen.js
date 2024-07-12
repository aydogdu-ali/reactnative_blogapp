import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../contex/BlogContextUseReducer";
import AppForm from "../components/AppForm";

export default function EditScreen({route,navigation}) {

 const { state, editBlogPost } = useContext(Context);
 console.log(route.params.id);

 const id = route.params.id;
 // Burada id ile var olan stateden ilgili kurs içeriğine ulaşıyoruz.
 const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
 console.log(blogPost);


  return (
    // Burada id ile gelen veriyi alarak props olarak AppForma geçiyoruz.
    <View>
      <AppForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        isEdit={true}
        onSubmit={(title, content) => {
        //   editBlogPost(id,title, content, () => navigation.navigate("Index"));
        // bir önceki sayfaya gider.
           editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
