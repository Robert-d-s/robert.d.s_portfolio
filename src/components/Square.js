import Image from "next/image";

export default function Square({
  id,
  title,
  description,
  githubLink,
  demo,
  imgSrc,
}) {
  return (
    <div className="square" id={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      <a href={githubLink}>check it out</a>
      <a href={demo}>Demo</a>
      <div className="image-container">
        <Image src={imgSrc} alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
