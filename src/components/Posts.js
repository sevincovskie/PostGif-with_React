import React, { useContext } from "react";
import { Context } from "../context/Postprovider";

function Posts() {
  const { post } = useContext(Context);

  return (
    <div style={{ width: "90%",margin: "30px",backgroundColor: post.length ? "": "" }}>
      {post.map((p, index) => (
        <>
          {" "}
          <div
            key={index}
            className="post-item"
            style={{
              backgroundColor: "blue",
              width: "50%",
              height: "20%",
              margin: "auto",
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
             <p style={{fontSize:"30px"}}>{p.text}</p>
            {p.image && (
              <img style={{ width: "40%", height: "300px",margin:"30px" }}
                src={p.image?.images?.original?.webp}
                alt={p.image?.alt_text}
              />
            )}

           
          </div>
          <br />
        </>
      ))}
    </div>
  );
}

export default Posts;
