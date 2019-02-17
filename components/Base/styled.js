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
  max-width: 80vmin;

  p {
    margin: 0 0 1.5rem;
    font-size: 14px;
    font-family: ApercuMono, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-display: swap;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: 0.1176px;

    &:last-of-type {
      margin-bottom: 0;
    }

    & a {
      text-decoration: none;
      font-weight: 600;
      color: #222;
      text-indent: 0.1rem;
      cursor: pointer;
      border-bottom: 1px solid currentColor;
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
