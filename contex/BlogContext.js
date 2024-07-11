
import React from 'react'

const BlogContext = React.createContext();


// burada react ta bulunan contexApi yapısı kullanıyoruz. Bunu tüm ekranlarda kullanmak için app.js de sarmalıyoruz.


export const BlogProvider = ({children}) =>{

    // verinin array içinde olduğu durumlarda kullanımı.
 const blogPost = [{ title: "React Native" }, { title: "Django App" }];

    return (
      <BlogContext.Provider value={blogPost}>
        {children}
      </BlogContext.Provider>
    );
}

// BlogContext diğer yerlerde kullanmak için dışarı açıyoruz.
export default BlogContext;