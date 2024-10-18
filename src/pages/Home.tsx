import {
  PageTitle,
  CheckoutMsg,
  PortraitImg,
  BioContainer,
} from "../components/styled/GlobalStyledComponents";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <BioContainer>
        <PortraitImg
          src="/Eric_Portrait_Square.jpg"
          alt="Eric Professional Headshot"
          loading="lazy"
          height="200px"
        />
        <p>
          Hello, my name is Eric Nohara-LeClair and I am a current junior at
          Boston University. I will be furthering my education by pursuing a
          masters degree in Computer Science at Boston University through the
          BA/MS program. I am a fullstack developer with interests in embedded
          programming and game development.
        </p>
      </BioContainer>
      <CheckoutMsg>
        Come check out my
        <Link to="/education"> education </Link>
        and
        <Link to="/projects"> projects </Link>
        to get to know me better!
      </CheckoutMsg>
    </>
  );
}
