import '@styles/globals.css'

export const metadata = {
  title: 'SongBook',
  description: 'SongBook powered by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <div>{children}</div>
    </body>
    </html>
  )
}

