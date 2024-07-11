import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  // type göre yapılacak actions tanımlıyoruz.
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        { id: Math.floor(Math.random() * 999999), title: "Vue " },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

// ekleme fonksiyonu
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

// silme fonksiyonunu tanımlıyoruz.
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

// diper componentlerin kullanımına açıyoruz.
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
