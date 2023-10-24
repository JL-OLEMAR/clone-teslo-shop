import useSWR, { type SWRConfiguration } from 'swr'

import { IProduct } from '@/interfaces'

interface Props {
  url: string
  config?: SWRConfiguration
}

// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())
// const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher, config)
export const useProducts = ({ url, config = {} }: Props) => {
  const { data, error } = useSWR<IProduct[]>(`/api${url}`, config)

  return {
    products: data ?? [],
    isLoading: !error && !data,
    isError: error
  }
}
