import { NextFunction, Request, Response } from "express";
import { Airplane } from "../types";
import { StatusCodes } from "http-status-codes"

export const validateCreateAirplaneRequestValidation =
  (req: Request<{}, {}, Airplane>, res: Response, next: NextFunction) => {
    if (!req.body) {
      return res.status(StatusCodes?.BAD_REQUEST).json({
        success: false,
        data: {},
        message: "Invalid request body",
        error: {
          explanation: "Invalid request body"
        }
      });
    }

    if (!req.body.modelNumber) {
      return res.status(StatusCodes?.BAD_REQUEST).json({
        success: false,
        data: {},
        message: "Model number is required",
        error: {
          explanation: "Model number is required"
        }
      });
    }

    if (!req.body.capacity) {
      return res.status(StatusCodes?.BAD_REQUEST).json({
        success: false,
        data: {},
        message: "Capacity is required",
        error: {
          explanation: "Capacity is required"
        }
      });
    }
    next();
  }