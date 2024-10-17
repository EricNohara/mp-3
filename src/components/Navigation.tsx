import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: var(--app-nav-background-color);
  width: 30%;

  ul {
    list-style: none;
  }

  ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    transition-duration: 0.2s;
  }

  ul > li:hover {
    background-color: var(--app-nav-hover-background-color);
    transition-duration: 0.2s;
  }

  @media (max-width: 750px) {
    width: 100%;

    .page-content-container {
      flex-direction: column;
    }

    ul {
      display: grid;
      grid-template-columns: 33% 33% 34%;
      border: 2px solid var(--app-background-color);
    }

    ul > li {
      font-size: calc(80%);
      border: 2px solid var(--app-background-color);
    }
  }
`;

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const linkStyling = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <Link style={linkStyling} to={to}>
      {children}
    </Link>
  );
};

export default function Navigation() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
