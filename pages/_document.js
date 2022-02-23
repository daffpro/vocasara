import Document, { Html, Head, Main, NextScript } from 'next/document'
import $ from 'jquery'; 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
    render() {
    return (
      <Html lang="fr">
        <Head>
                <meta charSet="utf-8" />
                {/* <meta name="viewport" content="viewport-fit=cover" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name=" robots" content=" index, follow" />
                <meta name=" author" content="Dahibou KA"/>
                <meta name=" copyright" content="VOCASARA"/>
                <meta name="description" content="Vocasar Suarl, apporte un large choix de services graces à des technologies de nouvelle generation dans les domaines que sont les inspections énergetiques, la videosurveillance, et la couverture médiatique(photo, vidéo, documentaires, vidéo clip)." />
            
        </Head>

        <body>
          <Main />
          <NextScript />
        
          <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25545127.js"></script>
          
        </body>
      </Html>
    )
  }
}

export default MyDocument