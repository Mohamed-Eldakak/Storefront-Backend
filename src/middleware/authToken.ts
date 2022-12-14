import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const loginError = (res: Response)=>{
  res.status(401).json({
    status: 401,
    message: 'Unable to login: pls try again'
  })
}
// validate token
const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authenticateHeader = req.headers.authorization as unknown as string
    if (authenticateHeader) {
      const bearer = authenticateHeader.split(' ')[0].toLowerCase()
      const token = authenticateHeader.split(' ')[1]
      if (token && bearer === 'bearer') {
        const tokenSecret = process.env.SECRET_TOKEN
        const decode = jwt.verify(token, tokenSecret as unknown as string)
        if (decode) {
          next()
        } else {
          loginError(res)
        }
      } else {
        loginError(res)
      }
    } else {
      loginError(res)
    }
  } catch (error) {
    loginError(res)
  }
}

export default validateToken
