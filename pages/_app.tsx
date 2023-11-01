import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { CssBaseline, ThemeProvider } from '@mui/material'

import '@/styles/globals.css'
import { CartProvider, UiProvider } from '@/context'
import { lightTheme } from '@/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  )
}
