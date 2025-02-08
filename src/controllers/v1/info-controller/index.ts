import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes"

export const info = (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json({
      success: true,
      message: "Hello from v1",
      error: {},
      data: {}
    })
}
