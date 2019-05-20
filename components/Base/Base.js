import Head from "next/head";
import { Root, Container, Avatar } from "./styled";

const Intro = () => (
  <Container>
    <p>
      <strong>Jeffrey Canty</strong> is a user interface engineer specializing in design systems, accessibility,
      performance, and front-end architecture. He prefers to talk in the first person.
    </p>

    <p>
      He's passionate about creating outstanding user experiences that are driven by data, and differentiated by design.
    </p>
    <p>
      Currently available for freelance, contract, or consulting projects in remote and/or on-site environments.&nbsp;
    </p>
    <p>
      &#8620;&nbsp;<a href="mailto:hello@jeffrey.sh">hello@jeffrey.sh</a>
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
