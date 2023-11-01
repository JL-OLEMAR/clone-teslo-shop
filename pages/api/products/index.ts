import type { NextApiRequest, NextApiResponse } from 'next'

import { Method, SHOP_CONSTANTS, db } from '@/database'
import type { LightProduct } from '@/interfaces'
import { Product } from '@/models'

type Data =
  | { message: string }
  | LightProduct[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const method = req.method
  if (method === Method.GET) return await getProducts(req, res)

  return res.status(400).json({ message: 'Method not allowed' })
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = 'all' } = req.query
  let condition = {}

  if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender }
  }

  await db.connect()
  const products = await Product
    .find(condition)
    .select('title images price inStock slug -_id')
    .sort({ createdAt: -1 })
    .lean()
  await db.disconnect()

  return res.status(200).json(products)
}
