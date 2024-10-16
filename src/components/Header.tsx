import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--app-header-footer-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  padding-left: 4%;

  h2 {
    font-size: 1.2rem;
    margin-top: 1%;
  }

  @media (max-width: 750px) {
    align-items: center;
    padding-left: 2%;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Eric Nohara-LeClair</h1>
      <h2>My Online Resume</h2>
    </StyledHeader>
  );
}
