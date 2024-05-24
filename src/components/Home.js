import React, { useEffect, useState ,useContext} from "react";
import Posts from "./Posts";
import { Context } from "../context/Postprovider";
import { useNavigate } from "react-router-dom";




function Home() {
  const navigate=useNavigate()
  const { post, setPost } = useContext(Context);

  function handleBack (){

    navigate("/")
    setPost([])
  }
  


 console.log(post);

  return (
    <div>
      <h1>Home</h1>

      <button onClick={handleBack}>back</button>
    
      <Posts  />
    </div>
  );
}

export default Home;
