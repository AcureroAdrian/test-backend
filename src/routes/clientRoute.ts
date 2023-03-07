import { getAllClientsController } from "../controllers/get-clients-controller";
import { createNewClientController } from "../controllers/create-client-controller";
import { Router } from "express";
import { getKpiClientsController } from "../controllers/get-kpi-clients-controller";

const route = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    Client:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        lastname:
 *          type: string
 *        age:
 *          type: integer
 *        date:
 *          type: string
 *        deathDate:
 *          type: string
 *      required:
 *        - name
 *        - lastname
 *        - age
 *        - date
 *        - deathDate
 *      example:
 *        name: Adrian
 *        lastname: Acurero
 *        age: 18
 *        date: '2004-04-21'
 *        deathDate: 2100-10-7'
 */

/**
 * @swagger
 * /listclientes:
 *  get:
 *    summary: GET all clients
 *    tags: [List of clients]
 *    responses:
 *      200:
 *        description: all clients successfully obtained!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Client'
 */
route.get("/listclientes", getAllClientsController);

/**
 * @swagger
 * components:
 *  schemas:
 *    Client:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        lastname:
 *          type: string
 *        age:
 *          type: integer
 *        date:
 *          type: string
 *        deathDate:
 *          type: string
 *      required:
 *        - name
 *        - lastname
 *        - age
 *        - date
 *        - deathDate
 *      example:
 *        name: Adrian
 *        lastname: Acurero
 *        age: 18
 *        date: '2004-04-21'
 *        deathDate: 2100-10-7'
 */
route.post("/creacliente", createNewClientController);

/**
 * @swagger
 * /kpideclientes:
 *  get:
 *    summary: GET age's average and standard deviation
 *    tags: [Age]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Age'
 *    responses:
 *      200:
 *        description: information successfully obtained!
 */
route.get("/kpideclientes", getKpiClientsController);

export default route;
