import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '@/database'
import { type IProduct } from '@/interfaces'
import { Product } from '@/models'

type Data =
  | { message: string }
  | IProduct[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const method = req.method

  if (method === 'GET') return await searchProducts(req, res)
  return res.status(405).json({ message: 'Method not allowed' })
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let { q = '' } = req.query
  if (q.length === 0) return res.status(400).json({ message: 'Missing query' })
  q = q.toString().toLocaleLowerCase()

  await db.connect()
  // Get products through the indexes of the Product model.
  const products = await Product
    .find({ $text: { $search: q } })
    .select('title images price inStock slug -_id')
    .sort({ createdAt: -1 })
    .lean()
  await db.disconnect()

  res.status(200).json(products)
}
