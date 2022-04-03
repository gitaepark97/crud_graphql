import { GraphQLString, GraphQLID } from 'graphql'
import { Users } from '../../entities/user.entity'
import { MessageType } from '../typeDefs/messages'
import { UserType } from '../typeDefs/user.typeDef'

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    password: { type: GraphQLString },
  },

  async resolve(parent: any, args: any) {
    const { name, password } = args

    await Users.insert({
      name,
      password,
    })

    return args
  },
}

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },

  async resolve(parent: any, args: any) {
    const { name, oldPassword, newPassword } = args

    const user = await Users.findOne({ where: { name: name } })

    if (!user) {
      throw new Error("Name doesn't exist")
    }

    const userPassword = user?.password

    if (oldPassword === userPassword) {
      await Users.update({ name: name }, { password: newPassword })

      return { successful: true, message: 'Password Updated' }
    } else {
      throw new Error("Password doesn't match")
    }
  },
}

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },

  async resolve(parent: any, args: any) {
    const { id } = args

    await Users.delete(id)

    return { successful: true, message: 'DELETE WORKED' }
  },
}
