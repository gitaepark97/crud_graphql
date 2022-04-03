import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './mutations/user.mutation'
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
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
  },
})

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})
