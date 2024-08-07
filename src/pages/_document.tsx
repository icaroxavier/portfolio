import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>

        <meta name='description' content="Ícaro Gabriel's Online Portfolio" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <body className='text-zinc-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
