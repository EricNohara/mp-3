import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--app-header-footer-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  align-items: center;
  font-weight: 300;

  p > a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        All Rights Reserved by Eric Nohara-LeClair
        <a href="/contact.html">Credits</a> &copy
      </p>
    </StyledFooter>
  );
}
