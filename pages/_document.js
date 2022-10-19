import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap&'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content=' Front-End Developer with +4 years of experience developing web applications.'
        />
        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content='Ali Monapour' />
        <meta
          itemProp='description'
          content=' Front-End Developer with +4 years of experience developing web applications.'
        />
        <meta itemProp='image' content='https://alimonapour.me/prof.jpg' />
        {/* Facebook Meta Tags */}
        <meta property='og:url' content='https://alimonapour.me' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ali Monapour' />
        <meta
          property='og:description'
          content=' Front-End Developer with +4 years of experience developing web applications.'
        />
        <meta property='og:image' content='https://alimonapour.me/prof.jpg' />
        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ali Monapour' />
        <meta
          name='twitter:description'
          content=' Front-End Developer with +4 years of experience developing web applications.'
        />
        <meta name='twitter:image' content='https://alimonapour.me/prof.jpg' />
      </Head>
      <body className='w-full min-w-fit bg-darkTheme font-thin tracking-wider text-silver'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
