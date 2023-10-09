import React, { useEffect, useRef, useState } from "react";

export default function PixelatedCanvas({ lines, width, height, fontSize, lineHeight }) {
  const canvasRef = useRef(null);
  const [pixelation, setPixelation] = useState(25);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const renderText = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.font = `${fontSize} Kingthings-Petrock`;
      ctx.fillStyle = "#300b0a";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

    //   const lineHeight = 90;
      const totalHeight = lines.length * lineHeight;
      const startingY = (canvasRef.current.height - totalHeight) / 2 + lineHeight / 2;

      lines.forEach((line, index) => {
        ctx.fillText(line, canvasRef.current.width / 2, startingY + index * lineHeight);
      });
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
      ctx.drawImage(offscreenCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    renderText();
    applyPixelation();

    const interval = setInterval(() => {
      setPixelation(prevPixelation => {
        const nextPixelation = Math.max(1.5, prevPixelation - 0.5);
        if (nextPixelation <= 1.5) clearInterval(interval);
        return nextPixelation;
      });
    }, 60);

    return () => clearInterval(interval);

  }, [pixelation, fontSize, lineHeight, lines]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
}
