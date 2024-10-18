import {
  SubcontentContainer,
  PageTitle,
  ImgContentContainer,
  PortraitImg,
} from "../components/styled/GlobalStyledComponents";

export default function Contact() {
  return (
    <>
      <PageTitle>Contact Information</PageTitle>
      <SubcontentContainer>
        <ImgContentContainer>
          <PortraitImg
            src="/src/assets/Eric_Portrait_Square.jpg"
            alt="Eric Professional Headshot"
            loading="lazy"
            height="200px"
          />
          <ul>
            <li>Email: ernohara@bu.edu</li>
            <li>Phone: 636-317-9533</li>
            <li>
              <a
                href="https://ericnohara.github.io/PortfolioWebsite/"
                target="_blank"
              >
                Portfolio Website
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eric-nl/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/EricNohara" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </ImgContentContainer>
      </SubcontentContainer>
    </>
  );
}
