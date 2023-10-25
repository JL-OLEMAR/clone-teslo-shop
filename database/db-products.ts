import { connect, disconnect } from './db'
import { Product } from '@/models'
import { type IProduct } from '@/interfaces'

export async function getProductBySlug({ slug }: { slug: string }): Promise<IProduct | null> {
  await connect()
  const product = await Product.findOne({ slug }).lean()
  await disconnect()

  if (!product) return null

  return JSON.parse(JSON.stringify(product))
}
