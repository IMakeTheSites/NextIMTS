import '../styles/globals.css'
import '../styles/global.scss'
import Layout from '../components/layout/Layout'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
