import React, { useState, useReducer } from "react";

const BlogContextUseReducer = React.createContext();

// burada react ta bulunan contexApi yapısı kullanıyoruz.
//Bunu tüm ekranlarda kullanmak için app.js de sarmalıyoruz.


//reducer fonksiyonunu yazıyoruz.
const blogReducer = (state, action) =>{
  switch(action.type)
  {
// ekleme caseyini tanımlıyoruz.
    case "add_blogpost":
      return [...state, {title:"Angular"}];
      default:
        return state

  }
}

export const BlogProvider = ({ children }) => {

  const [blogPost, dispatch] = useReducer(blogReducer, [
    { title: "React Native" },
    { title: "Django App" },
  ]);


  
  // Method ekleyrek yeni kurs başlığı ekleme yöntemi.
  const addBlogPost = () => {
    dispatch({type:"add_blogpost"});
  };

  return (
    <BlogContextUseReducer.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContextUseReducer.Provider>
  );
};

// BlogContext diğer yerlerde kullanmak için dışarı açıyoruz.
export default  BlogContextUseReducer;

