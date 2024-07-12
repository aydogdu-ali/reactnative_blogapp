import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  // type göre yapılacak actions tanımlıyoruz.
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

// ekleme fonksiyonu
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
  // sayfa da kaydette basınca yönlendirmesi için callback fonksiyonu yazdık.
};

// düzenleme fonksiyonu

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
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
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
