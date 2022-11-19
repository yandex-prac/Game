import axios from 'axios'
import { Request, Response, NextFunction } from 'express'

const CHECK_ROUTE: any = {
  '/forum': true,
}

const YANDEX_AUTH_URL = 'https://ya-praktikum.tech/api/v2/auth/user'

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isAuthRoutes = CHECK_ROUTE[req.url]
  if (isAuthRoutes) {
    try {
      const { data } = await axios.get(YANDEX_AUTH_URL, {
        headers: { Cookie: req.cookies },
      })
      res.locals.user = data
      return next()
    } catch (err) {
      console.log(err)
      res.redirect('/')
      return
    }
  }

  next()
}
