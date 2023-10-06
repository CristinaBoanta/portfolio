import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const canvasRef = useRef(null);
  const [pixelation, setPixelation] = useState(25);

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const renderText = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.font = "60px Kingthings-Petrock";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // An array of lines you want to draw
      const lines = [
        "Welcome!",
        "My name is Cristina",
        "I am a front-end developer",
      ];

      const lineHeight = 90; // Adjust this based on your desired spacing
      const totalHeight = lines.length * lineHeight;
      const startingY =
        (canvasRef.current.height - totalHeight) / 2 + lineHeight / 2;

      lines.forEach((line, index) => {
        ctx.fillText(
          line,
          canvasRef.current.width / 2,
          startingY + index * lineHeight
        );
      });
    };

    const applyPixelation = () => {
      const scaledWidth = canvasRef.current.width / pixelation;
      const scaledHeight = canvasRef.current.height / pixelation;

      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = canvasRef.current.width;
      offscreenCanvas.height = canvasRef.current.height;
      const offscreenCtx = offscreenCanvas.getContext("2d");

      offscreenCtx.drawImage(
        canvasRef.current,
        0,
        0,
        scaledWidth,
        scaledHeight
      );

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        offscreenCanvas,
        0,
        0,
        scaledWidth,
        scaledHeight,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    };

    renderText();
    applyPixelation();

    const interval = setInterval(() => {
      setPixelation((prevPixelation) => {
        const nextPixelation = Math.max(1.5, prevPixelation - 0.5);
        if (nextPixelation <= 1.5) clearInterval(interval);
        return nextPixelation;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [pixelation]);

  return (
    <>
      <div className="scroll">
        <div className="scroll-header">
          <div className="scroll-conceal"></div>
          <div className="scroll-top">
            <div className="shadow"></div>
          </div>
        </div>
        <div className="scroll-view">
          <div className="scroll-content" role="main">
            <div className="minor-push">
              <div style={{ background: "your_custom_background" }} className="scroll-padding">
                <canvas ref={canvasRef} width="700" height="350"></canvas>

                <div className="scroll-element">
                  <button
                    onClick={handleClick}
                    className="scroll-button arrow"
                  ></button>

                  <div style={{ minHeight: "10vh" }} />

                  <div ref={ref} className="secondSlide">
                    <h1>Who am I?</h1>

                    <div className="skills-and-experience">
                        <div className="introduction">
                          <div className="name">
                            <div className="name-text-overlay">Cristina B</div>
                          </div>
                          <div className="character">
                            <div className="character-container">
                              <div className="avatar"></div>
                            </div>
                            <div className="stats"></div>
                          </div>
                        </div>
                        <div className="about-me">
                          I am a front-end developer with an expertise of 1.5 years. My tech stack is JavaScript, TypeScript, React, HTML/CSS, SCSS and jQuery.
                        </div>
                    </div>
                  </div>

                  {/* <div style={{ minHeight: "100vh" }} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-footer">
          <div className="scroll-bottom">
            <div className="shadow"></div>
          </div>
          <div className="scroll-conceal"></div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

{
  /* <div className="introduction">
            <div className="name">
              <div className="name-text-overlay">
                Cristina B
              </div>
            </div>
          <div className="character">
                <div className="character-container">
                  <div className="avatar">

                  </div>
                </div>
                <div className="stats">

                </div>
              </div>
          </div> */
}
