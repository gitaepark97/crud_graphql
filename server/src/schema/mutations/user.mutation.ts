import { GraphQLString } from 'graphql'
import { Users } from '../../entities/user.entity'
import { UserType } from '../typeDefs/user.typeDef'

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, password } = args

    const user = await Users.insert({
      name,
      password,
    })

    return args
  },
}
