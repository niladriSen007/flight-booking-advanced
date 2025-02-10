import { db } from "../models";
import { CrudRepository } from "./crud-repository";

export class AirplaneRepository extends CrudRepository {
  constructor() {
    super(db.Airplane);
  }


}