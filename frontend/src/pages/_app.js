import '../styles/globals.css'
import Layout from './layout'
import { ApolloProvider } from '@apollo/client'
import apollo_client from '../config/apollo-client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo_client}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
