import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const canvasRef = useRef(null);
  const [pixelation, setPixelation] = useState(25);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const renderText = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.font = '80px Kingthings-Petrock';
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "Edgy obscure portofolio",
        canvasRef.current.width / 2,
        canvasRef.current.height / 2
      );
    };

    const applyPixelation = () => {
      const scaledWidth = canvasRef.current.width / pixelation;
      const scaledHeight = canvasRef.current.height / pixelation;

      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = canvasRef.current.width;
      offscreenCanvas.height = canvasRef.current.height;
      const offscreenCtx = offscreenCanvas.getContext("2d");
      
      offscreenCtx.drawImage(canvasRef.current, 0, 0, scaledWidth, scaledHeight);

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        offscreenCanvas, 
        0, 0, scaledWidth, scaledHeight,
        0, 0, canvasRef.current.width, canvasRef.current.height
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
    }, 100);

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
              <div style={{ background: "your_custom_background" }}>
                <canvas ref={canvasRef} width="800" height="100"></canvas>
              </div>
            </div>

          <div className="introduction">
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
