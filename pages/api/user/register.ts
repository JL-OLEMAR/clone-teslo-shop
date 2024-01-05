import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { Method, db } from '@/database'
import { User } from '@/models'
import { jwt, validations } from '@/utils'

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
  if (method === Method.POST) return await registerUser(req, res)

  return res.status(405).json({ message: 'Method not allowed' })
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name = '', email = '', pwd = '' } = req.body

  if (pwd.length > 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' })
  }

  if (pwd.length < 2) {
    return res.status(400).json({ message: 'Password must be at least 2 characters' })
  }

  if (!validations.isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email!' })
  }

  await db.connect()
  const user = await User.findOne({ email })

  if (user) {
    await db.disconnect()
    return res.status(400).json({ message: 'User already exists' })
  }

  const newUser = new User({
    name,
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(pwd),
    role: 'client'
  })

  try {
    await newUser.save({ validateBeforeSave: true })
    await db.disconnect()
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'Check server logs' })
  }

  const { _id, role } = newUser
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
