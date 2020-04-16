import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link id="fav" rel="shortcut icon" href="/images/favicon.png" type="image/png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/libs/cssShapesPolyfill.js" data-auto-run="false"></script>
          <script>{`
            window.onload = function() {
              window.ShapesPolyfill.run();
            }
          `}</script>
        </body>
      </Html>
    );
  }
}


export default MyDocument;