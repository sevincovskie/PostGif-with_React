import React, { createContext, useState } from "react";

export const Context = createContext();
const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);


  return <Context.Provider value={{post,setPost}}>{children}</Context.Provider>;
};

export default PostProvider;
