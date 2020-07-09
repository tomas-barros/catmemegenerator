import React, { useState, useEffect, useRef } from "react";
const CatMeme = () => {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80);
      ctx.drawImage(image, (400 - 256) / 2, 40);

      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      ctx.fillText(topText, 400 / 2, 25);
      ctx.fillText(bottomText, 400 / 2, 256 + 40 + 25);
    }
  }, [image, canvas, topText, bottomText]);

  return (
    <div>
      <h1>Cat Meme!</h1>
      <h2>Refresh and get a new Cat Picture!</h2>
      <div>
        <canvas ref={canvas} width={400} height={256 + 80} />
      </div>

      <div>
        <h6>top caption</h6>
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <br />
        <h6>bottom caption</h6>
        <input
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CatMeme;
