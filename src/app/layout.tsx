import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Ícaro Xavier Online Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-800 text-zinc-50'>{children}</body>
    </html>
  )
}
