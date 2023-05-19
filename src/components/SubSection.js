import Square from "./Square";

export default function SubSection() {
  return (
    <section className="sub-section">
      <Square
        id="EDC"
        title="EDC - Find Buyers"
        description="Case study from Charlie Tango - Housing Market Portal"
        githubLink="https://github.com/Robert-d-s/charlie-tango-case.git"
        demo="https://charlie-tango-case-drab.vercel.app/"
        imgSrc="/images/EDC.jpg"
      />
      <Square
        id="Hogwarts"
        title="Hogwarts Students Dashboard"
        description="Hogwarts themed administrative dashboard"
        githubLink="https://github.com/Robert-d-s/Hogwartss.git"
        demo="https://robert-d-s.github.io/Hogwartss/"
        imgSrc="/images/hogwarts.JPG"
      />
      <Square
        id="ACEN"
        title="ACEN Fine Dinning"
        description="Project case for a client - Landing page for a private chef"
        githubLink="https://github.com/Robert-d-s/ACEN.git"
        demo="https://robert-d-s.github.io/ACEN/"
        imgSrc="/images/ACEN.jpg"
      />
      <Square
        id="FEM"
        title="EasyBank"
        description="FrontendMentorChallange - My attempt at using SASS"
        githubLink="https://github.com/Robert-d-s/FrontendMentorChallange.git"
        demo="https://robert-d-s.github.io/FrontendMentorChallange/"
        imgSrc="/images/FEM_chalange_SASS.jpg"
      />
      <Square
        id="CC"
        title="(CC) Copenhagen Cartel"
        description="Sustainable Fasion Brand Re-design"
        githubLink="https://github.com/Robert-d-s/CC.git"
        demo="https://robert-d-s.github.io/CC/"
        imgSrc="/images/CC.JPG"
      />
      <Square
        id="game"
        title="Simple JS Game"
        description="A simple game where all assets were designed and built from scratch"
        githubLink="https://github.com/Robert-d-s/Game_koala.git"
        imgSrc="/images/koalaGame.JPG"
      />
    </section>
  );
}
