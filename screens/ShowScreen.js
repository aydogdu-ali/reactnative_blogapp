import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { Context } from "../contex/BlogContextUseReducer";


// gelen id parametresini  route props ile yakalıyoruz.
export default function ShowScreen({ route }) {
  const { state } = useContext(Context);
  console.log(route.params.id);

  // Burada id ile var olan stateden ilgili kurs içeriğine ulaşıyoruz.
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  console.log(blogPost);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Başlık</Text>
        <Text style={styles.content}>{blogPost.title}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>İçerik</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
  },
  label: {
    fontSize: 30,
  },
  content: {
    fontSize: 18,
  },
});
