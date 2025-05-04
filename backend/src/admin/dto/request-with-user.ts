// src/types/request-with-user.ts
import { Request } from 'express'

export interface JwtPayload {
    id: string
    email: string
    role: {
        name: string
        permissions: { name: string }[]
    }
}

export interface RequestWithUser extends Request {
    user: JwtPayload
}
