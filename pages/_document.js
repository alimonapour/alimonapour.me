import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='w-full min-w-fit bg-darkTheme font-thin tracking-wider text-stone-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
