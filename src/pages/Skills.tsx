import {
  PageTitle,
  SubcontentContainer,
} from "../components/styled/GlobalStyledComponents";

export default function Skills() {
  return (
    <>
      <PageTitle>Skills</PageTitle>
      <SubcontentContainer>
        <h2>Programming Languages</h2>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>HTML/CSS</li>
          <li>OCaml</li>
          <li>SQL</li>
          <li>x86 Assembly</li>
        </ul>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>Developer Skills</h2>
        <ul>
          <li>Git with GitHub</li>
          <li>Linux</li>
          <li>Bash Scripting</li>
          <li>Docker</li>
          <li>Object Oriented and Functional Programming</li>
          <li>Multithreaded Applications</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>React.js</li>
          <li>MongoDB</li>
          <li>Templating Engines</li>
          <li>AWS</li>
        </ul>
      </SubcontentContainer>
    </>
  );
}
