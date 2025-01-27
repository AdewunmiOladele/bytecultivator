// import { Inter } from "next/font/google"
// import { Footer } from "@/components/footer"


// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Byte Cultivators",
//   description: "Grow Your Skills, Master the Craft",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           <Navigation />
//           <main>{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }



import { Navigation } from "../components/navigation"
import { ThemeProvider } from "../components/theme-provider"
import './globals.css'
import { Inter } from "next/font/google"
import { Footer } from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Byte Cultivators",
  description: "Grow Your Skills, Master the Craft",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

