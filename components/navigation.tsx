"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { GithubIcon } from "lucide-react"
import { Button } from "../components/ui/button"
import { Logo } from "../components/ui/logo"

// export function Navigation() {
//   const pathname = usePathname()

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 items-center">
//         <div className="mr-4 flex">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <span className="font-bold">Byte Cultivators</span>
//           </Link>
//           <nav className="flex items-center space-x-6 text-sm font-medium">
//             <Link href="/levels" className={pathname === "/levels" ? "text-foreground" : "text-foreground/60"}>
//               Levels
//             </Link>
//             <Link href="/events" className={pathname === "/events" ? "text-foreground" : "text-foreground/60"}>
//               Events
//             </Link>
//             <Link href="/resources" className={pathname === "/resources" ? "text-foreground" : "text-foreground/60"}>
//               Resources
//             </Link>
//             <Link href="/community" className={pathname === "/community" ? "text-foreground" : "text-foreground/60"}>
//               Community
//             </Link>
//           </nav>
//         </div>
//         <div className="flex flex-1 items-center justify-end space-x-2">
//           <Button variant="outline" size="sm">
//             <GithubIcon className="mr-2 h-4 w-4" />
//             Sign In with GitHub
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Byte Cultivators</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/levels" className={pathname === "/levels" ? "text-foreground" : "text-foreground/60"}>
              Levels
            </Link>
            <Link href="/events" className={pathname === "/events" ? "text-foreground" : "text-foreground/60"}>
              Events
            </Link>
            <Link href="/resources" className={pathname === "/resources" ? "text-foreground" : "text-foreground/60"}>
              Resources
            </Link>
            <Link href="/community" className={pathname === "/community" ? "text-foreground" : "text-foreground/60"}>
              Community
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" size="sm">
            <GithubIcon className="mr-2 h-4 w-4" />
            Sign In with GitHub
          </Button>
        </div>
      </div>
    </header>
  )
}

