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
    margin: 0 0 1.5rem;

    &:last-of-type {
      margin-bottom: 0;
      font-weight: 500;
    }

    & strong {
      font-weight: 500;
      color: #000;
    }

    & a {
      -webkit-tap-highight-color: transparent;
      cursor: pointer;
      user-select: none;
      font-weight: 500;
      color: #000;
      text-decoration: underline;
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
