import { expect, assert } from 'chai'
import { ApolloServer } from '@apollo/server'
import typeDefs from '../graphql/schema.js'

const resolvers = {
  Query: {
    countries: async () => {
      const countries = [
        {
          country: 'Albania',

          year: '2000',

          area: 28748,

          totalPopulation: 3401198,
        },
        {
          country: 'Albania',

          year: '2000',

          area: 28748,

          totalPopulation: 3401198,
        },
        {
          country: 'Albania',

          year: '2000',

          area: 28748,

          totalPopulation: 3401198,
        },
      ]
      const count = countries.length

      return {
        data: countries,
        count,
        message: 'Countries fetched successfully',
      }
    },
  },
}

describe('Test Schema', () => {
  it('returns countries', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    })

    const response = await testServer.executeOperation({
      query: `
        query countriesGet {
          countries {
            data {
              country
              year
              area
              totalPopulation
            }
            count
            message
          }
        }
      `,
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).to.be.undefined
    expect(response.body.singleResult.data?.countries.data.length).to.equal(3)
  })
})
