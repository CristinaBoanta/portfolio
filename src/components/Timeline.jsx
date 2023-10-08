const Timeline = () => {
  return (
    <>
      <div className="timeline">
        <ul>
          <li>
            <div className="content">
              <h3>Multidimension SRL</h3>
              <h5>Front-end Developer</h5>
              <p>
                I created pixel perfect web UIs from templates that seamlessly
                integrated with clients’ brands and user needs.
                <br/>
                <br/>
                A strong
                emphasis was put on mobile/responsive web design - I created
                versatile and mobile-friendly layouts that are adaptable to
                different devices. My work included a multitude of diverse
                projects, spanning from complex user interfaces to large
                functional applications. These are the highlights: 
                
                <br/>
                <br/>
                E-Commerce
                Nutrition And Wellness Products Platform (Project) 
                <br/>
                • World
                renowned client, a leading retailer in the health and nutrition
                segment worldwide;
                <br/>
                 •Implemented custom library components
                according to the design; <br /> • Tech stack: React, CSS modules
                (VeniaUI library), CMS; <br /> • Reworked the website design using a
                mobile-first approach; 
                
                <br />
                <br />
                Products Offer Dashboard (Project) 
                <br /> •Web
                portal for connecting buyers with local merchants; <br /> • Implemented
                custom and reusable UI components; <br /> • Tech stack: HTML, SCSS,
                JavaScript, D3.js, jQuery; <br /> • Most challenging aspect was the
                implementation of various charts using the D3.js charting
                library; <br /> • Created a responsive, mobile-friendly and fluid
                navigation dashboard according to the design;
              </p>
            </div>
            <div className="time">
              <h4>Oct 2021 - Mar 2023</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h3>Volunteer</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="time">
              <h4>Aug 2023 - Present</h4>
            </div>
          </li>

          <div className="timeline-clear"></div>
        </ul>
      </div>
    </>
  );
};

export default Timeline;
