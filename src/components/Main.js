import Image from "next/image";

export default function Main() {
  return (
    <section className="main">
      <div className="main-text">
        <h1>Robert D. Stoica</h1>
        <p>Welcome to my Page!</p>
        <br />
        <p>
          Exploring Frontend Web Development: Showcasing My Journey in
          Multimedia Design Education
        </p>
        <br />
        {/* <a href="#footer">contact me</a> */}
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/robert-stoica/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <Image
              src="/images/icon-li.svg"
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
              src="/images/icon-github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="icon"
            />
          </a>
          <a href="mailto:robe3750@stud.kea.dk" className="icon-link">
            <Image
              src="/images/icon-email.svg"
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
          <Image
            src="/images/me.png" // replace with your image path
            alt="a picture of me, Robert"
            width={300} // adjust as needed
            height={300} // adjust as needed
          />
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
