import { StyleSheet, Text, View } from 'react-native'
import React ,{useContext} from 'react'
import AppForm from '../components/AppForm'
import { Context } from '../contex/BlogContextUseReducer'


export default function CreateScreen({navigation}) {
  const {addBlogPost} = useContext(Context)
  return (
    <View>
      {/*Kaydet Tuşuna basınca parametreler payload içine gider 
        callback fonksiyonu ve navigate ile indexScrren ekranına yönlendiriyoruz.*/}
      <AppForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
        }}
        isEdit={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({})