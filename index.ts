import express from "express";
import routes from "./src/routes";
import { swaggerServe, swaggerSetup } from "./src/swagger";

const app = express();

// Middlewares
app.use(express.json());

console.log(swaggerServe, "---", swaggerSetup);
app.use("/", routes);
app.use("/api-doc", swaggerServe, swaggerSetup);

app.listen(3000, () => console.log("listening on port 3000"));
