import { connect, disconnect } from './db'
import { Product } from '@/models'
import type { LightProduct, IProduct } from '@/interfaces'

export async function getProducts(): Promise<IProduct[]> {
  await connect()
  const products = await Product.find().lean()
  await disconnect()
  if (!products) return []
  return JSON.parse(JSON.stringify(products))
}

export async function getProductBySlug({ slug }: { slug: string }): Promise<IProduct | null> {
  await connect()
  const product = await Product.findOne({ slug }).lean()
  await disconnect()
  if (!product) return null
  return JSON.parse(JSON.stringify(product))
}

type ProductSlug = Pick<IProduct, 'slug'>
export async function getAllProductsSlugs(): Promise<ProductSlug[]> {
  await connect()
  const slugs = await Product.find().select('slug -_id').lean()
  await disconnect()
  return slugs
}

export async function getProductsByTerm(term: string): Promise<LightProduct[]> {
  term = term.toString().toLowerCase()
  await connect()
  const products = await Product
    .find({ $text: { $search: term } })
    .select('title images price inStock slug -_id')
    .sort({ createdAt: -1 })
    .lean()
  await disconnect()

  return products
}
