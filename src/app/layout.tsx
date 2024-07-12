import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { meta } from '@/lib/data'
import ScrollToTop from './components/ScrollToTop'
import FooterYear from './components/FooterYear'
/**
 * Control the meta data from /src/app/lib/utils.ts
 */
export const metadata: Metadata = {
  title: meta.title || 'A Timeline Project',
  description: meta.description || 'Here is a timeline',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className={cn('bg-slate-950 text-slate-100')}>
        <main id="main-content">{children}</main>
        <footer className="prose mx-auto flex flex-col items-center gap-3 pt-6 text-slate-300">
          {meta.footer || 'A Project for TECH6373'}
          <FooterYear />
        </footer>
        <ScrollToTop />
      </body>
    </html>
  )
}
