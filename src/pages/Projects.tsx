import {
  PageTitle,
  SubcontentContainer,
} from "../components/styled/GlobalStyledComponents";

import Project from "../components/Project";
import Calculator from "../components/Calculator";
import projects from "../assets/projectInfo";

export default function Projects() {
  return (
    <>
      <PageTitle>Projects</PageTitle>
      {projects.map((project, index) => (
        <Project key={index} project={project}></Project>
      ))}
      <SubcontentContainer>
        <h2>Simple Calculator</h2>
        <Calculator />
      </SubcontentContainer>
    </>
  );
}
