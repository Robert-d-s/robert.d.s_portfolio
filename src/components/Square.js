import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Square = ({
  id,
  title,
  description,
  githubLink,
  demo,
  imgSrc,
  delay,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className="square"
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/icon-github.svg"
            alt="GitHub"
            className="project-icon"
            width={32}
            height={32}
          />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/icon-live.svg"
            alt="Demo"
            className="project-icon"
            width={32}
            height={32}
          />
        </a>
      </div>
      <div className="image-container">
        <Image src={imgSrc} alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </motion.div>
  );
};

export default Square;
