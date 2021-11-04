import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html>
            <Head>
                <title>Valentina Forero Conde</title>
                <link href="https://fonts.googleapis.com/css2?family=News+Cycle:wght@700&display=swap" rel="stylesheet"/>
                <meta name="description" content="Valentina Forero Portfolio Website"/>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument