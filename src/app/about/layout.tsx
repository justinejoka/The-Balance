import { ThemeProvider } from "@/components/ThemeContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import ThemeScript from "@/components/ThemeScript";
import "../style/globals.css";


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body>
      <ThemeProvider>
          <ThemeWrapper>
           
        {children}
        
          </ThemeWrapper>
        </ThemeProvider>
        </body>
    </html>
  )
}
