import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { CREATE_USER } from './mutations/user.mutation'
import { GET_ALL_USERS } from './queries/user.query'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER,
  },
})

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})
