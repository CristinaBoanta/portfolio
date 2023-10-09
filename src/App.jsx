import React, { useEffect, useRef, useState } from "react";
import Timeline from "./components/Timeline";
import PixelatedCanvas from "./components/PixelatedCanvas";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const refSlide2 = useRef(null);
  const refSlide3 = useRef(null);
  const refSlide4 = useRef(null);
  const refSlide5 = useRef(null);
  const refSlide6 = useRef(null);

  const slideRefs = [
    null,
    null,
    refSlide2,
    refSlide3,
    refSlide4,
    refSlide5,
    refSlide6,
  ];

  const handleClick = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide < slideRefs.length) {
      slideRefs[nextSlide].current?.scrollIntoView({ behavior: "smooth" });
      setCurrentSlide(nextSlide);
    }
  };

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = slideRefs.map((ref) =>
        ref?.current ? ref.current.offsetTop : 0
      );
      const currentPos = window.scrollY;
      let found = false;
      for (let i = 1; i < scrollPositions.length; i++) {
        if (
          currentPos >= scrollPositions[i] &&
          (scrollPositions[i + 1] ? currentPos < scrollPositions[i + 1] : true)
        ) {
          if (currentSlide !== i) {
            setCurrentSlide(i);
          }
          found = true;
          break;
        }
      }
      if (!found && currentSlide !== 1) {
        setCurrentSlide(1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSlide, slideRefs]);

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
                  <PixelatedCanvas
                    lines={[
                      "Welcome!",
                      "My name is Cristina",
                      "I am a front-end developer",
                    ]}
                    width="750px"
                    height="350px"
                    fontSize="70px"
                    lineHeight="90"
                  />

                  {currentSlide < 6 && (
                    <button
                      onClick={handleClick}
                      className="scroll-button arrow"
                    ></button>
                  )}
                </div>

                {/* <div style={{ minHeight: "10vh" }} /> */}

                <div ref={refSlide2} className="secondSlide slide">
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
                        <PixelatedCanvas
                          lines={[
                            "I am a front-end developer",
                            "with an expertise of 1.5 years.",
                            "My tech stack is JavaScript,",
                            "TypeScript, React, HTML/CSS,",
                            "SCSS and jQuery",
                          ]}
                          width="500px"
                          height="400px"
                          fontSize="40px"
                          lineHeight="50"
                        />
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
                  {currentSlide < 6 && (
                    <button
                      onClick={handleClick}
                      className="scroll-button arrow"
                    ></button>
                  )}
                </div>

                <div ref={refSlide3} className="thirdSlide slide" id="skills">
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
                      <div className="list-item-content">
                        JavaScript, TypeScript
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        Collaboration tools:
                      </div>
                      <div className="list-item-content">
                        Jira, Azure DevOps, Slack
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">
                        CSS tools and libraries:
                      </div>
                      <div className="list-item-content">
                        Tailwind CSS, Bootstrap, SCSS
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">Package managers: </div>
                      <div className="list-item-content">NPM, Yarn</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">Data visualization:</div>
                      <div className="list-item-content">D3.js</div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">VM tools: </div>
                      <div className="list-item-content">
                        Virtualbox, VMware
                      </div>
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
                      <div className="list-item-content">
                        Moment.js, jQuery UI,{" "}
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="list-item-title">Others: </div>
                      <div className="list-item-content">
                        RESTful API, JSON{" "}
                      </div>
                    </li>
                  </ul>

                  {currentSlide < 6 && (
                    <button
                      onClick={handleClick}
                      className="scroll-button arrow"
                    ></button>
                  )}
                </div>

                <div
                  ref={refSlide4}
                  className="fourthSlide slide"
                  id="experience"
                >
                  <h1>Professional experience</h1>

                  <Timeline />
                  {currentSlide < 6 && (
                    <button
                      onClick={handleClick}
                      className="scroll-button arrow"
                    ></button>
                  )}
                </div>

                <div ref={refSlide5} className="fifthSlide slide" id="projects">
                  <h1>Projects</h1>

                  {currentSlide < 6 && (
                    <button
                      onClick={handleClick}
                      className="scroll-button arrow"
                    ></button>
                  )}
                </div>

                <div ref={refSlide6} className="sixthSlide slide" id="contact">
                  <h1>Contact me</h1>

                  <button
                    onClick={handleBackToTopClick}
                    className="back-to-top-button"
                  >
                    Back to Top
                  </button>
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
