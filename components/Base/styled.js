import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Root = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.theme === "light" ? colors.uiWhite : colors.gray[900])};
  color: ${props => (props.theme === "light" ? "#222222" : colors.uiWhite)};
  transition: color 0.5s cubic-bezier(0, 0, 0.2, 1), background-color 0.5s cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 0.2s;
  will-change: color, background-color;

  & strong {
    font-weight: 600;
    color: inherit;
  }

  & a {
    -webkit-tap-highight-color: transparent;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 0.075em solid transparent;
    user-select: none;
    font-weight: 500;
    color: ${props => (props.theme === "light" ? "#222222" : colors.uiWhite)};
    transition: border-bottom-color 0.5s cubic-bezier(0, 0, 0.2, 1), color 0.5s cubic-bezier(0, 0, 0.2, 1),
      background-color 0.5s cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 0.2s;
    will-change: color, background-color, border-color;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    &:hover {
      border-bottom-color: currentColor;
    }
  }
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
    display: grid;
    grid-template-columns: repeat(2, auto);
    & li {
      margin: 0 0 0.25rem;
      &:before {
        content: "¬ ";
        padding-right: 0.25rem;
        color: ${colors.gray};
      }
    }
  }
`;

export const Avatar = styled.img.attrs({
  src: "/static/assets/Avatar_512x512_Optimized.png",
  alt: "Illustrated avatar of Jeffrey Canty",
  role: "img",
})`
  width: 140px;
  margin: 2rem 0;
  background-color: ${props => (props.theme === "light" ? "#e6e6e6" : "#222222")};
  border-radius: 50%;
`;

export const Toggle = styled.button`
  appearance: none;
  background-color: transparent;
  outline: 0;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  & svg {
    fill: ${props => (props.theme === "light" ? "#222222" : colors.gray[50])};
    transition: fill 0.5s cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 0.2s;
    will-change: fill;
    flex: none;
    width: 100%;
    height: 100%;
  }
`;

export default {};
