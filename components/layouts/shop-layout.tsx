import { type ReactNode } from 'react'
import Head from 'next/head'

import { Navbar, SideMenu } from '../ui'

interface ShopLayoutProps {
  children: ReactNode
  title: string
  pageDescription: string
  imageFullUrl?: string
}

export function ShopLayout({
  children,
  title,
  pageDescription,
  imageFullUrl = ''
}: ShopLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />

        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      <SideMenu />

      <main style={{
        margin: '80px auto',
        maxWidth: '1200px', // 1440px
        padding: '0 30px'
      }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer>
        {/* TODO: my custom footer */}
      </footer>
    </>
  )
}
