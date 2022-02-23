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
                <meta name=" robots" content=" index, follow" />
                <meta name=" author" content="Dahibou KA"/>
                <meta name=" copyright" content="VOCASARA"/>
                <meta name="description" content="Vocasar Suarl, apporte un large choix de services graces à des technologies de nouvelle generation dans les domaines que sont les inspections énergetiques, la videosurveillance, et la couverture médiatique(photo, vidéo, documentaires, vidéo clip)." />
            {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></script> */}
            {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script> */}
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