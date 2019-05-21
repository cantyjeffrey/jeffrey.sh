import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 2rem;

  p {
    margin: 0 0 0.75rem;
  }

  & div {
    margin-top: 2rem;
    & p {
      font-weight: 500;
    }
  }

  & ul {
    & li {
      margin: 0 0 0.25rem;
      &:before {
        content: "¬ ";
        padding-right: 0.25rem;
      }
    }
  }
`;

export const Avatar = styled.img.attrs({
  src: "/static/assets/avatar.svg",
  alt: "Illustrated 8-bit avatar of Jeffrey Canty",
  role: "img",
})`
  width: 140px;
  margin: 2rem 0;
`;

export default {};
