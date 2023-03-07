import { createNewClient } from "../shared/clientRepository";
import { controllerType } from "../shared/interfaces";
import { validateClient } from "../shared/validation";

export const createNewClientController: controllerType = async (req, res) => {
  try {
    if (!validateClient(req.body)) throw new Error("incomplete data");

    return res.json(createNewClient(req.body));
  } catch (error) {
    res.status(404).send((error as Error).message);
  }
};
