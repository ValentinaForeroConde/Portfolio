import 'bootswatch/dist/journal/bootstrap.min.css'
import '../styles/globals.css'
import 'jquery/dist/jquery.min.js'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
