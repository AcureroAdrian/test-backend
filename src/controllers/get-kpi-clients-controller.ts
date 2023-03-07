import { getAllClients } from "../shared/clientRepository";
import { averageAge, calculateStats } from "../shared/functions";
import { ClientType, controllerType } from "../shared/interfaces";

export const getKpiClientsController: controllerType = async (req, res) => {
  try {
    const allClients = await getAllClients();
    const ages = allClients.map((client) => client.age);

    const stats = calculateStats(ages);
    return res.json(stats);
  } catch (error) {}
};
