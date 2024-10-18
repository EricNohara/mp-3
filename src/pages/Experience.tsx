import {
  PageTitle,
  SubcontentContainer,
} from "../components/styled/GlobalStyledComponents";

export default function Experience() {
  return (
    <>
      <PageTitle>Work Experience</PageTitle>
      <SubcontentContainer>
        <h2>Boston University: CS237 Course Assistant</h2>
        <b>
          Boston, MA{" "}
          <span>
            <i>Janurary 2024 - May 2024</i>
          </span>
        </b>
        <ul>
          <li>
            Assisted in facilitating the Spring 2024 CS 237 Course (Probability
            in Computing).
          </li>
          <li>
            Addressed student inquiries, formulated problem set solutions, and
            diligently contributed to grading.
          </li>
        </ul>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>&Kappa;&Theta;&Pi;: Website Comittee Leader</h2>
        <b>
          Boston, MA{" "}
          <span>
            <i>September 2024 - Present</i>
          </span>
        </b>
        <ul>
          <li>
            Lead team of frontend web developers to build and maintain
            <a href="https://ktpbostonu.com/index.html" target="_blank">
              {" "}
              Kappa Theta Pi official website{" "}
            </a>
            utilizing HTML, CSS, JavaScript to create beautiful and efficient
            website design with all necessary information
          </li>
        </ul>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>Nami Ramen: Cashier and Server</h2>
        <b>
          St. Louis, MO
          <span>
            <i>May 2022 – September 2022, May 2023 – September 2023</i>
          </span>
        </b>
        <ul>
          <li>
            Provided exemplary customer service, attended to patrons, cleared
            tables, and fulfilled takeout orders
          </li>
        </ul>
      </SubcontentContainer>
    </>
  );
}
