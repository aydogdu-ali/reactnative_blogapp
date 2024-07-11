import React, { useState } from "react";

const BlogContext = React.createContext();

// burada react ta bulunan contexApi yapısı kullanıyoruz.
//Bunu tüm ekranlarda kullanmak için app.js de sarmalıyoruz.

export const BlogProvider = ({ children }) => {
  const [blogPost, setBlogPost] = useState([
    { title: "React Native" },
    { title: "Django App" },
  ]);

  // verinin array içinde olduğu durumlarda kullanımı.

  // Method ekleyrek yeni kurs başlığı ekleme yöntemi.
  const addBlogPost = () => {
    // Burada kursu set eden state ile başlarız varolanları gösteriri sonra üstüne ekleme yapar. 
    return setBlogPost([...blogPost, { title: "Vue Js" }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

// BlogContext diğer yerlerde kullanmak için dışarı açıyoruz.
export default BlogContext;
