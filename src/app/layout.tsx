import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Spotify is a digital music service that gives you access to millions of songs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = "bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  )
}
