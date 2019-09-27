import Document, { Html, Head, Main, NextScript } from 'next/document';
import Preloader from '../components/Preloader/Preloader'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`
            body {
              margin: 0;
              min-height: 100vh;
            }

          `}</style>
        </Head>
        <body className="custom_class">
          <Preloader/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;