import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { Method, db } from '@/database'
import { User } from '@/models'
import { jwt } from '@/utils'

type Data =
  | { message: string }
  | {
    token: string
    user: {
      name: string
      email: string
      role: string
    }
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const method = req.method
  if (method === Method.POST) return await loginUser(req, res)

  return res.status(405).json({ message: 'Method not allowed' })
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = '', pwd = '' } = req.body

  await db.connect()
  const user = await User.findOne({ email })
  await db.disconnect()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  const { _id, name, role, password } = user

  if (password && !bcrypt.compareSync(pwd, password)) {
    return res.status(400).json({ message: 'Password or email incorrect' })
  }

  const token = jwt.signToken({ _id, email })

  return res.status(200).json({
    token,
    user: {
      name,
      email,
      role
    }
  })
}
