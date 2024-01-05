import jwt from 'jsonwebtoken'

interface PropsSignToken {
  _id: string
  email: string
}

export function signToken({ _id, email }: PropsSignToken) {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('JWT SECRET is not defined')
  }

  return jwt.sign({ _id, email }, process.env.JWT_SECRET_SEED, { expiresIn: '30d' })
}
