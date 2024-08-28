import { connectMongoDB } from "./db/connectMongoDB.js"
import { startServer } from "./server"


const bootstrap = async() => {
  await connectMongoDB()
  startServer()
}
bootstrap()