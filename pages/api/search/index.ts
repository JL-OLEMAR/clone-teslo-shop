import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(400).json({ message: 'Required search query missing' })
}
