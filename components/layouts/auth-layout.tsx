import { Box } from '@mui/material'
import Head from 'next/head'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
}

export function AuthLayout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
          {children}
        </Box>
      </main>
    </>
  )
}
