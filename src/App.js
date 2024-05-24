import { Context } from "./context/Postprovider";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Posts from "./components/Posts";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import GifModal from "./components/GifModal";

function App() {
  const [gif, setGif] = useState(false);
  const [image, setImage] = useState({});
  
  const [context, setcontext] = useState("");
  const navigate = useNavigate();
  const { post, setPost } = useContext(Context);

 
  const handlePost = () => {
    setPost([...post, { text: context, image: image }]);
  
    navigate("/home");
  };
  
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Facebook</li>
            <li>Home</li>
          </ul>
        </nav>
      </header>
      <div className="post">
        {image && (
          <img src={image?.images?.original?.webp} alt={image?.alt_text} />
        )}
        <input
          type="text"
          value={context}
          onChange={(e) => setcontext(e.target.value)}
          placeholder="What do you think?"
        />
        <div className="Btns">
          <button onClick={handlePost}>Post</button>
          <button onClick={() => setGif(!gif)}>Gif</button>
        </div>
      </div>
      {gif && <GifModal setImage={setImage} />}
      <Posts posts={post} />
    </div>
  );
}

export default App;
