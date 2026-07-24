import './globals.css'
import { personalInfo } from '@/lib/data'

export const metadata = {
  title: `${personalInfo.name} · Web Developer & Digital Marketing`,
  description: `Portfolio of ${personalInfo.name} — ${personalInfo.title}. Building modern web applications with Next.js, TypeScript, and Supabase.`,
  keywords: [
    'Rahmad Akbar',
    'Web Developer',
    'Frontend Developer',
    'Next.js',
    'TypeScript',
    'Digital Marketing',
    'Content Creator',
    'Portfolio',
    'Indonesia',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} · Portfolio`,
    description: `${personalInfo.title} — Building modern web solutions with Next.js, TypeScript, and Supabase.`,
    url: 'https://rahmad-portfolio.vercel.app',
    siteName: `${personalInfo.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} · Portfolio`,
    description: `${personalInfo.title} — Building modern web solutions.`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-dark text-cream antialiased selection:bg-cream/20">
        {children}
      </body>
    </html>
  )
}