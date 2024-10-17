import {
  PageTitle,
  PageContentContainer,
  SubcontentContainer,
} from "../components/GlobalStyledComponents";

export default function Education() {
  return (
    <>
      <PageTitle>Education</PageTitle>
      <SubcontentContainer>
        <h2>Boston University</h2>
        <p>Bachelor's of Computer Science</p>
        <p>GPA: 3.89 / 4.0 | Dean's List</p>
        <i>September 2022 - May 2026</i>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>MICDS</h2>
        <p>High School Degree</p>
        <p>GPA: 3.8 / 4.0 | First Honors</p>
        <i>August 2018 - May 2022</i>
      </SubcontentContainer>
    </>
  );
}
