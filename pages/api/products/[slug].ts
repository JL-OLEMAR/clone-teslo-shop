import type { NextApiRequest, NextApiResponse } from 'next'

import { Method, db } from '@/database'
import type { IProduct } from '@/interfaces'
import { Product } from '@/models'

type Data =
  | { message: string }
  | IProduct

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const method = req.method

  if (method === Method.GET) return await getProductBySlug(req, res)
  return res.status(400).json({ message: 'Method not allowed' })
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug } = req.query

  await db.connect()
  const product = await Product.findOne({ slug }).lean()
  await db.disconnect()
  if (!product) return res.status(404).json({ message: 'Product not found' })

  return res.status(200).json(product)
}
