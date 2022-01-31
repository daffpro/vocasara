import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab ,faFacebook, faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faPhone, faEnvelope,faClock, faChevronUp   } from '@fortawesome/free-solid-svg-icons'


library.add(fab,faTwitter,faInstagram,faLinkedin,faFacebook,faMapMarkedAlt,faPhone, faEnvelope,faClock,faChevronUp) 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
