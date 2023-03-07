import path from "path";
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
  apis: [`${path.join(__dirname, "./src/routes/clientRoute.js")}`],
};

const swaggerServe = swaggerUI.serve;
const swaggerSetup = swaggerUI.setup(swaggerJSDoc(swaggerSpec));

export { swaggerServe, swaggerSetup };
