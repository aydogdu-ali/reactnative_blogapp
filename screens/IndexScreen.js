import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '../contex/BlogContext'


export default function IndexScreen() {

 

  const blogPost = useContext(BlogContext)
  return (
    <View>
      <FlatList
        data={blogPost}
        // id eşşiz değeri gibi düşünülecek
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({})