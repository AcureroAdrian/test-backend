import { getAllClientsController } from "../controllers/get-clients-controller";
import { createNewClientController } from "../controllers/create-client-controller";
import { Router } from "express";
import { getKpiClientsController } from "../controllers/get-kpi-clients-controller";
import Client from "../models/Client";

const route = Router();

route.delete("/deleteAll", async (req, res) => {
  return res.json(await Client.deleteMany());
});

route.get("/listclientes", getAllClientsController);

route.post("/creacliente", createNewClientController);

route.get("/kpideclientes", getKpiClientsController);

export default route;
