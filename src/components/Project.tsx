import {
  SubcontentContainer,
  ImgContentContainer,
} from "./GlobalStyledComponents";

import ProjectType from "../interfaces/Projecttype";

export default function Project(props: { project: ProjectType }) {
  return (
    <SubcontentContainer>
      <h2>
        {props.project.title}
        <span>
          {" ("}
          {props.project.demo && (
            <>
              <a href={props.project.demo} target="_blank">
                Demo
              </a>
              {") ("}
            </>
          )}
          <a href={props.project.github} target="_blank">
            GitHub
          </a>
          {")"}
        </span>
      </h2>
      <ImgContentContainer>
        <img
          src={props.project.img}
          alt={props.project.caption}
          loading="lazy"
          height="200px"
        />
        <ul>
          {props.project.descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </ImgContentContainer>
    </SubcontentContainer>
  );
}
