import Square from "./Square";

export default function SubSection() {
  return (
    <section className="sub-section">
      <Square
        id="ColorFoo"
        title="ColorFoo Festival - Festival app"
        description="Exam project for frontend elective"
        githubLink="https://github.com/Robert-d-s/foofest-app.git"
        demo="https://foofest-app.vercel.app/"
        imgSrc="/images/colorfoo.jpg"
        delay={0.1}
      />
      <Square
        id="EDC"
        title="EDC - Find Buyers"
        description="Case study from Charlie Tango - Housing Market Portal"
        githubLink="https://github.com/Robert-d-s/charlie-tango-case.git"
        demo="https://charlie-tango-case-drab.vercel.app/"
        imgSrc="/images/EDC.jpg"
        delay={0.1}
      />
      <Square
        id="Hogwarts"
        title="Hogwarts Students Dashboard"
        description="Hogwarts themed administrative dashboard"
        githubLink="https://github.com/Robert-d-s/Hogwartss.git"
        demo="https://robert-d-s.github.io/Hogwartss/"
        imgSrc="/images/hogwarts.JPG"
        delay={0.1}
      />
      <Square
        id="ACEN"
        title="ACEN Fine Dinning"
        description="Project case for a client - Landing page for a private chef"
        githubLink="https://github.com/Robert-d-s/ACEN.git"
        demo="https://robert-d-s.github.io/ACEN/"
        imgSrc="/images/ACEN.jpg"
        delay={0.1}
      />
      <Square
        id="FEM"
        title="EasyBank"
        description="FrontendMentorChallange - My attempt at using SASS"
        githubLink="https://github.com/Robert-d-s/FrontendMentorChallange.git"
        demo="https://robert-d-s.github.io/FrontendMentorChallange/"
        imgSrc="/images/FEM_chalange_SASS.jpg"
        delay={0.1}
      />
      <Square
        id="CC"
        title="(CC) Copenhagen Cartel"
        description="Sustainable Fasion Brand Themed Design"
        githubLink="https://github.com/Robert-d-s/CC.git"
        demo="https://robert-d-s.github.io/CC/"
        imgSrc="/images/CC.JPG"
        delay={0.1}
      />
      <Square
        id="game"
        title="Simple JS Game"
        description="A simple game where all assets were designed and built from scratch"
        githubLink="https://github.com/Robert-d-s/Game_koala.git"
        imgSrc="/images/koalaGame.JPG"
        delay={0.1}
      />
    </section>
  );
}
