import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Root, Container, Avatar, Toggle } from "./styled";

const Intro = () => (
  <>
    <p>
      Jeffrey Canty is a user interface engineer specializing in design systems, content infrastructure, and web
      performance. He prefers to talk in the first person.
    </p>
    <p>
      He's passionate about creating outstanding user experiences that are driven by data and differentiated by design.
    </p>
  </>
);

const Contact = () => (
  <ul>
    <li>
      <a href="mailto:hi@jeffrey.sh" target="_blank">
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

const Status = () => (
  <div>
    <Contact />
  </div>
);

export default () => {
  const currentHour = new Date().getHours();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    currentHour === 0 || currentHour < 12 ? setTheme("dark") : setTheme("light");
  }, []);
  return (
    <Root role="main" theme={theme}>
      <Head>
        <title>Jeffrey Canty</title>
      </Head>
      <Toggle onClick={() => setTheme(theme === "light" ? "dark" : "light")} theme={theme}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 15.31l2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6c-.39-.39-1.02-.39-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99z" />
        </svg>
      </Toggle>
      <Avatar theme={theme} />
      <Container>
        <Intro />
        <Status />
      </Container>
    </Root>
  );
};
