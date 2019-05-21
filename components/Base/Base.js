import Head from "next/head";
import { Root, Container, Avatar } from "./styled";

const Intro = () => (
  <>
    <p>
      <strong>Jeffrey Canty</strong> is a user interface engineer specializing in design systems, content
      infrastructure, and web performance. He prefers to talk in the first person.
    </p>
    <p>
      He's passionate about creating outstanding user experiences that are driven by data, and differentiated by design.
    </p>
  </>
);

const Contact = () => (
  <ul>
    <li>
      <a href="mailto:hello@jeffrey.sh" target="_blank">
        Email
      </a>
    </li>
    <li>
      <a href="//angel.co/jeffreycanty" target="_blank">
        AngelList
      </a>
    </li>
    <li>
      <a href="//github.com/cantyjeffrey" target="_blank">
        GitHub
      </a>
    </li>
    <li>
      <a href="//linkedin.com/in/cantyjeffrey" target="_blank">
        LinkedIn
      </a>
    </li>
    <li>
      <a href="//twitter.com/cantyjeffrey" target="_blank">
        Twitter
      </a>
    </li>
  </ul>
);

const StatusMessage = () => (
  <p>
    &#8620;&nbsp;Currently available for freelance, contract, or consulting projects in remote and/or on-site
    environments.&nbsp;
  </p>
);

const Status = () => (
  <div>
    {/* <StatusMessage /> */}
    <Contact />
  </div>
);

export default () => (
  <Root role="main">
    <Head>
      <title>Jeffrey Canty</title>
    </Head>
    <Avatar />
    <Container>
      <Intro />
      <Status />
    </Container>
  </Root>
);
