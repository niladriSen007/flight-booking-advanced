import { NextFunction, Request, Response } from "express";
import { Airplane } from "../types";
import { StatusCodes } from "http-status-codes"
import { errorFormat } from "../utils/common"
import { GlobalErrorResponse } from "../utils/errors/global-api-error-response";

export const validateCreateAirplaneRequestValidation =
  (req: Request<{}, {}, Airplane>, res: Response, next: NextFunction) => {
    if (!req.body) {
      errorFormat.message = "Invalid request body";
      errorFormat.error.explanation = new GlobalErrorResponse("Invalid request body", StatusCodes?.BAD_REQUEST);
      return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
    }

    if (!req.body.modelNumber) {
      errorFormat.message = "Model number is required";
      errorFormat.error.explanation = new GlobalErrorResponse("Model number is required", StatusCodes?.BAD_REQUEST);
      return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
    }

    if (!req.body.capacity) {
      errorFormat.message = "Capacity is required";
      errorFormat.error.explanation = new GlobalErrorResponse("Capacity is required", StatusCodes?.BAD_REQUEST);
      return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
    }
    next();
  }