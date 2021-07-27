import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title key="title">SUSHI</title>

        <meta
          key="description"
          name="description"
          content="Be a DeFi Chef with Sushi. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi"
        />

        <meta name="application-name" content="SUSHI App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="SUSHI App" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#F338C3" />

        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta key="twitter:title" name="twitter:title" content="SUSHI App" />
        <meta
          key="twitter:url"
          name="twitter:url"
          content="https://app.sushi.com"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Be a DeFi Chef with Sushi. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi"
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://app.sushi.com/icons/icon-192x192.png"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@SushiSwap"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="SUSHI App" />
        <meta key="og:url" property="og:url" content="https://app.sushi.com" />
        <meta
          key="og:image"
          property="og:image"
          content="https://app.sushi.com/apple-touch-icon.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Be a DeFi Chef with Sushi. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
