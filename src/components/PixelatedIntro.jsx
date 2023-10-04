import React, { useState, useEffect } from 'react';

const PixelatedText = ({ text }) => {
    const [blurValue, setBlurValue] = useState(30); // Starting from a high blur value

    useEffect(() => {
        const interval = setInterval(() => {
            if (blurValue > 0) {
                setBlurValue(prev => Math.max(0, prev - 1)); // decrease blur
            }
        }, 100); // Adjust the time to control the speed of transition

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-container">
            <div className="pixelated-text" style={{ filter: `blur(${blurValue}px)` }}>
                {text}
            </div>
        </div>
    );
};

export default PixelatedText;

