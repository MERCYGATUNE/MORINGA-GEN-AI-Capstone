import './globals.css'

export const metadata = {
  title: 'Hello World - Next.js',
  description: 'A simple Next.js Hello World application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}