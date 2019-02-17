import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../lib/gtag";

class NextDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(Component => props => sheet.collectStyles(<Component {...props} />));

    const styleElements = sheet.getStyleElement();
    return { ...page, styleElements };
  }
  render() {
    const { styleElements } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="canonical" href="https://jeffrey.sh" />
          <meta name="author" content="Jeffrey Canty" />
          <meta name="description" content="User Interface Engineer" />
          {styleElements}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: 'ApercuSubset';
                  src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
                  font-weight: normal;
                  font-style: normal;
                }

                @font-face {
                  font-family: Apercu-Mono;
                  src: url('/static/fonts/Apercu-Mono.woff2') format('woff2'),
                       url('/static/fonts/Apercu-Mono.woff') format('woff');
                  font-weight: 400;
                  font-style: normal;
                  font-display: swap;
                }
              `,
            }}
          />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <body>
          <div id="viewport">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}

export default NextDocument;
