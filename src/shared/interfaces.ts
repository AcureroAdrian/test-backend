import { Request, Response } from "express";
import { ObjectId } from "mongoose";

export type controllerType = (req: Request, res: Response) => any;

export interface ClientType {
  _id: ObjectId
  name: string;
  lastName: string;
  age: number;
  dob: string;
}
