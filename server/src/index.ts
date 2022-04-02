import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import cors from 'cors'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import { Users } from './entities/user.entity'

dotenv.config()

const main = async () => {
  await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [Users],
  })

  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  )

  app.listen(8000, () => {
    console.log('Server running on port 8000')
  })
}

main().catch(err => {
  console.log(err)
})
