import React, { useEffect, useRef, useState } from "react";
import Timeline from "./components/Timeline";

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
              <div
                style={{ background: "your_custom_background" }}
                className="scroll-padding"
              >
                <div className="firstSlide slide">
                  <canvas ref={canvasRef} width="700" height="350"></canvas>

                  <button
                    onClick={handleClick}
                    className="scroll-button arrow"
                  ></button>
                </div>

                {/* <div style={{ minHeight: "10vh" }} /> */}

                <div ref={ref} className="secondSlide slide">
                  <h1>Who am I?</h1>

                  <div className="skills-and-experience">
                    <div className="skills-and-experience-first">
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
                        I am a front-end developer with an expertise of 1.5
                        years. My tech stack is JavaScript, TypeScript, React,
                        HTML/CSS, SCSS and jQuery.
                        <br />
                        <br />I am passionate about tech and retro PC gaming (as
                        you might have guessed already).
                      </div>
                    </div>

                    <div className="navigation-grid">
                      <a className="nav-grid-item" href="#skills">
                        <div className="nav-grid-image item-skills"></div>
                        <div className="nav-grid-text">Technologies</div>
                      </a>
                      <a className="nav-grid-item" href="#experience">
                        <div className="nav-grid-image item-experience"></div>
                        <div className="nav-grid-text">Experience</div>
                      </a>
                      <a className="nav-grid-item" href="#projects">
                        <div className="nav-grid-image item-resume"></div>
                        <div className="nav-grid-text">Projects</div>
                      </a>
                      <a className="nav-grid-item" href="#contact">
                        <div className="nav-grid-image item-contact"></div>
                        <div className="nav-grid-text">Contact</div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="thirdSlide slide" id="skills">
                  <h1>Technologies used</h1>

                  <p className="skills-paragraph">
                    Here is a complete list of technologies that I've worked
                    with.
                  </p>

                  <ul className="tech-list">
                    <li className="list-item">
                      <div className="list-item-title">
                        JavaScript libraries:
                      </div>
                      <div className="list-item-content">React, jQuery</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        Templating technologies:
                      </div>
                      <div className="list-item-content">HTML</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        Programming languages:
                      </div>
                      <div className="list-item-content">JavaScript, TypeScript</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        Collaboration tools:
                      </div>
                      <div className="list-item-content">Jira, Azure DevOps, Slack</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        CSS tools and libraries:
                      </div>
                      <div className="list-item-content">Tailwind CSS, Bootstrap, SCSS</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">Package managers: </div>
                      <div className="list-item-content">NPM, Yarn</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        Data visualization:
                      </div>
                      <div className="list-item-content">D3.js</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">VM tools: </div>
                      <div className="list-item-content">Virtualbox, VMware</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">CMS: </div>
                      <div className="list-item-content">Magento</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">Familiar with: </div>
                      <div className="list-item-content">
                        Node.js, Express, MongoDB, Postman, Next.js, Linux
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        Other minor JavaScript libraries:
                      </div>
                      <div className="list-item-content">Moment.js, jQuery UI, </div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">Others: </div>
                      <div className="list-item-content">RESTful API, JSON </div>
                    </li>
                  </ul>
                </div>

                <div className="fourthSlide slide" id="experience">
                  <h1>Professional experience</h1>

                  <Timeline />
                </div>

                <div className="fifthSlide slide" id="projects">
                  <h1>Projects</h1>
                </div>

                <div className="sixthSlide slide" id="contact">
                  <h1>Contact me</h1>
                </div>

                {/* <div style={{ minHeight: "100vh" }} /> */}
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
