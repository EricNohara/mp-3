import styled from "styled-components";

export const PageTitle = styled.h2`
  text-align: center;
  font-size: 2rem;

  @media (max-width: 750px) {
    font-size: 2rem !important;
  }
`;

export const SubcontentContainer = styled.div`
  padding: 1rem;
  border-top: 0.25rem solid var(--app-header-footer-background-color);
  border-bottom: 0.25rem solid var(--app-header-footer-background-color);
  border-radius: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  h2 {
    margin-bottom: 2.5%;
  }

  b {
    margin-bottom: 3%;
  }

  ul > li {
    font-size: 0.9rem;
    font-weight: 300;
  }

  ul {
    align-self: flex-start;
  }
`;

export const ImgContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;

  ul {
    margin-left: 2rem;
    align-self: center;
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    ul {
      margin: 0;
      margin-top: 10%;
    }
  }
`;

export const PageContentContainer = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const PortraitImg = styled.img`
  height: auto;
  max-width: 200px;

  @media (max-width: 750px) {
    max-width: 150px;
  }
`;

export const CheckoutMsg = styled.p`
  margin-top: 2.5%;
`;

export const BioContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 2.5%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 5%;

    p {
      padding: 0;
      margin: 10% 0 5% 0;
    }
  }
`;
