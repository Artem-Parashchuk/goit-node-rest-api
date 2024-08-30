import { connectMongoDB } from "./db/connectMongoDB.js"
import { startServer } from "./server.js"


const bootstrap = async() => {
  await connectMongoDB()
  startServer()
}
bootstrap()