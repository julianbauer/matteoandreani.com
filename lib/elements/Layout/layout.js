import css from './layout.module.css'
import Head from 'next/head'
// import Footer from '@components/Footer'
import Meta from '@elements/Meta'
// import Container from '@elements/Container'
// import Header from '@components/Header'
// import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  // const [theme, setTheme] = useState('light')

  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setTheme('dark')
  //   }
  // }, [])

  return (
    <>
      <Meta />
      <Head>
        {/* <link
          key=""
          rel="apple-touch-icon"
          sizes="180x180"
          href={`favicon/${theme}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`favicon/${theme}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`favicon/${theme}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`favicon/${theme}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`favicon/${theme}/safari-pinned-tab.svg`}
          color="#1f2b48"
        />
        <link rel="shortcut icon" href={`favicon/${theme}/favicon.ico`} /> */}
        <meta
          name="apple-mobile-web-app-title"
          content="Matteo Andreani – Photographer"
        />
        <meta
          name="application-name"
          content="Matteo Andreani – Photographer"
        />
        {/* <meta
          name="msapplication-TileColor"
          content={theme === 'dark' ? '#1f2b48' : '#fffdf5'}
        />
        <meta
          name="msapplication-config"
          content={`favicon/${theme}/browserconfig.xml`}
        /> */}
        {/* <meta name="theme-color" content="#fff" /> */}

        {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      </Head>
      <div className={css.container}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  )
}
