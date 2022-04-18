import React from "react";
import "./About.css";
import selfPic from "../../Assets/images/self-pic/yousuf_miah.jpg";

const About = () => {
  return (
    <div className="container neo-about ">
      <div className="about-pic d-flex justify-content-center align-items-center">
        <div className="img-div mt-5"></div>
        <img src={selfPic} alt="" />
        <div className="img-div mt-5"></div>
      </div>
      <div className="self-name mt-3">
        <div className="text-center">
          <h3>Md. Yousuf Miah</h3>
        </div>
        <div className="text-p">
          <p>
            Really a great message by the grace of Almighty{" "}
            <strong> "Allah" </strong> inform you about me. This is
            <strong> Md. Yousuf Miah </strong>
            who are getting learn on Web Design & Development course with{" "}
            <strong> JavaScript, React </strong> under esteemed valuable
            organization <strong> "Programming Hero" </strong>
            which is the best learning sector with fun and enjoy by the by
            motivational speech in the world for Bangle spoken people. Directed
            by-
            <strong> "Jhonkar Mahabub" </strong>. Believe that after completing
            my course I will be able to get a good situation in future my life.
            That's way, every day in a week I have been hardworking with
            Programing Hero suitable platform. I humble request to you who read
            my text please prayer for me to improve my career, which will be
            highly appreciated very much. <br />
            <br />
            <strong>
              -- again thank you very much for your cooperations with
              sustainable life at this situation in the world, best of Luck.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
