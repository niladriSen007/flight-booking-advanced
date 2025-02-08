import { Request } from "express";

export interface Airplane extends Request {
  modelNumber: string;
  capacity: number;
}

export interface CreateAirplaneRequest{
  modelNumber: string;
  capacity: number;
}