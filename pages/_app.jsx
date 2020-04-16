// import App from 'next/app'
import { PureComponent } from 'react'
import { PageTransition } from 'next-page-transitions'



import '../styles/global.sass'

function MyApp({ Component, pageProps, router }) {
  return <>
    <LoadFonts/>
    <PageTransition timeout={300} classNames="page-transition">
      <Component {...pageProps} key={router.route}/>      
    </PageTransition>
    <style jsx global>{`
    `}</style>
  </>
}

MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


class LoadFonts extends PureComponent {
  componentDidMount() {
    if (typeof window === 'undefined') return
    function loadFont(fontName, woffUrl, woff2Url) {
    if (typeof window === "undefined") return;
      var nua = window.navigator.userAgent;
      var noSupport = !window.addEventListener || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/))
      if (noSupport) { return ; }
      var loSto = {};
      try {loSto = localStorage || {}; } catch (ex) {}
      var localStoragePrefix = "x-font-" + fontName;
      var localStorageUrlKey = localStoragePrefix + "url";
      var localStorageCssKey = localStoragePrefix + "css";
      var storedFontUrl = loSto[localStorageUrlKey];
      var storedFontCss = loSto[localStorageCssKey];
      var styleElement = document.createElement("style");
      styleElement.rel = "stylesheet";
      document.head.appendChild(styleElement);
      if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {
        styleElement.textContent = storedFontCss;
      } else {
        var url = (woff2Url && supportsWoff2()) ? woff2Url : woffUrl;
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            loSto[localStorageUrlKey] = url;
            loSto[localStorageCssKey] = styleElement.textContent = request.responseText;
          }
        };
        request.send();
      }
      function supportsWoff2() {
        if (!window.FontFace) { return false; }
        var f = new FontFace("t", "url(\"data:application/font-woff2,\") format(\"woff2\")", {});
        f.load();
        return f.status === "loading";
      }
    }
    loadFont("NEXT ART", "/static/fonts/next_art/woff.css", "/static/fonts/next_art/woff.css");
  }
  render() {
    return <style>{`
      body {
        margin: 0;
        min-height: 100vh;
        background-color: #121212;
        color: #fff;
        font-family: NEXT ART, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
      }
      html {
        font-size: 100%;
      }
      a {
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;
      }
    `}</style>
  }
}

export default MyApp