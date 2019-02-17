import Head from "next/head";
import { Root, Container, Avatar } from "./styled";

const Intro = () => (
  <Container>
    <p>
      <strong>Jeffrey Canty</strong> is a user interface engineer based in <strong>Brooklyn, NY</strong>.{" "}
    </p>
    <p>
      He works as a Senior Software Engineer at{" "}
      <a href="//casper.com" target="_blank" rel="noreferrer">
        Casper
      </a>
      , focusing on design systems and front-end operations.
    </p>
    <p>
      &#8620;&nbsp;
      <a href="mailto:hello@jeffrey.sh">hello@jeffrey.sh</a>
    </p>
  </Container>
);

export default () => (
  <Root role="main">
    <Head>
      <title>Jeffrey Canty</title>
    </Head>
    <Avatar />
    <Intro />
  </Root>
);
