import express from "express";
import routes from "./src/routes";
import path from "path";

// swagger
import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
const swaggerSpec: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./src/routes/index.ts")}`],
};

const app = express();

// Middlewares
app.use(express.json());
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSDoc(swaggerSpec))
);

app.use("/", routes);

app.listen(3000, () => console.log("listening on port 3000"));
