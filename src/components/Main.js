import { useContext } from "react";
import Image from "next/image";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className="main">
      <div className="main-text">
        <h1>Robert D. Stoica</h1>
        <p>Welcome to my Portfolio!</p>
        <br />
        <p>
          Exploring Frontend Web Development: Showcasing My Journey in
          Multimedia Design Education
        </p>
        <br />
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/robert-stoica/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <Image
              src={
                darkMode ? "/images/icon-li-white.svg" : "/images/icon-li.svg"
              }
              alt="LinkedIn"
              width={24}
              height={24}
              className="icon"
            />
          </a>
          <a
            href="https://github.com/Robert-d-s"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <Image
              src={
                darkMode
                  ? "/images/icon-github-white.svg"
                  : "/images/icon-github.svg"
              }
              alt="GitHub"
              width={24}
              height={24}
              className="icon"
            />
          </a>
          <a href="mailto:robe3750@stud.kea.dk" className="icon-link">
            <Image
              src={
                darkMode
                  ? "/images/icon-email-white.svg"
                  : "/images/icon-email.svg"
              }
              alt="Email"
              width={24}
              height={24}
              className="icon"
            />
          </a>
        </div>
      </div>
      <div className="main-image">
        <div className="animated-border">
          <div className="responsive-image">
            <Image
              src="/images/me.png"
              alt="a picture of me, Robert"
              style={{ objectFit: "cover" }}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="cube" id="react"></div>
        <div className="cube" id="javascript"></div>
        <div className="cube" id="html"></div>
        <div className="cube" id="css"></div>
      </div>
    </section>
  );
}
