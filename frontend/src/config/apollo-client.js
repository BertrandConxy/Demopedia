import { ApolloClient, InMemoryCache } from '@apollo/client'
const apollo_client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/api/countries',
})
export default apollo_client
