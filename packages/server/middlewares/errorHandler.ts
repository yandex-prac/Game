/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.status || 500
  const message =
    statusCode === 500 ? 'На сервере произошла ошибка' : err.message
  res.status(statusCode).send({ message, err })
}
