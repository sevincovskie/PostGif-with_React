import axios from "axios";
import React, { useEffect, useState } from "react";

function GifModal({ setImage }) {
  const [gif, setGif] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=IunDZRBqAiaiIulBudp4Elej0Y5e6ScO&q=cat&limit=52&offset=25&rating=&lang=en&bundle=messaging_non_clips"
      )
      .then((res) => {
        setGif(res.data.data);
      });
  }, []);
  return (
    <div style={{ width: "30%", height: "50vh", overflowY: "scroll" }}>
      {gif.map((element, index) => (
        <img
          src={element.images.original.webp}
          alt={element.alt_text}
          key={index}
          style={{ width: "50%", height: "200px" }}
          onClick={() => setImage(element)}
        />
      ))}
    </div>
  );
}

export default GifModal;
