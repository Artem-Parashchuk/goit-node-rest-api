import express from "express";
import morgan from "morgan";
import cors from "cors";

import contactsRouter from "./routes/contactsRouter.js";
import { notFound } from "./middlewares/notFound.js";
import { serverError } from "./middlewares/serverError.js";

const {PORT} = process.env

export const startServer = () => {

  const app = express();

  app.use(morgan("tiny"));
  app.use(cors());
  app.use(express.json());

  app.use("/api/contacts", contactsRouter);

  app.use(notFound);

  app.use(serverError);

  app.listen(PORT, () => {
    console.log(`Server is running. Use our API on port: ${PORT}`);
  });
}


// TuN9Ln5CUdobDux4
