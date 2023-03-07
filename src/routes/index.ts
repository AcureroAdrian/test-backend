import { Router } from "express";
import ClientRoute from './clientRoute'

const route = Router();
route.use('/', ClientRoute)

export default route