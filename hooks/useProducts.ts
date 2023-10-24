import useSWR, { type SWRConfiguration } from 'swr'

import { IProduct } from '@/interfaces'

// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())

interface Props {
  url: string
  config?: SWRConfiguration
}

export const useProducts = ({ url, config = {} }: Props) => {
  // const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher, config)
  const { data, error } = useSWR<IProduct[]>(`/api${url}`, config)

  return {
    products: data ?? [],
    isLoading: !error && !data,
    isError: error
  }
}
