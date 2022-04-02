import { GraphQLList } from 'graphql'
import { Users } from '../../entities/user.entity'
import { UserType } from '../typeDefs/user.typeDef'

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find()
  },
}
