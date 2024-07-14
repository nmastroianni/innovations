import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { meta } from '@/lib/data'
import ScrollToTop from './components/ScrollToTop'
import FooterYear from './components/FooterYear'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'
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
        <footer className="prose mx-auto flex flex-col items-center gap-3 py-6 text-slate-300 prose-a:text-slate-100">
          {meta.footer || 'A Project for TECH6373'}
          <div>
            Want to add to this list? Fork{' '}
            <Link href="https://github.com/nmastroianni/innovations">
              this{' '}
              <span>
                <FaGithub className="inline h-4 w-4" />
              </span>{' '}
              repository{' '}
            </Link>
            and submit a pull request.
          </div>
          <FooterYear />
        </footer>
        <ScrollToTop />
      </body>
    </html>
  )
}
