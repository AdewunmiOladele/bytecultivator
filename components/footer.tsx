import Link from "next/link"
import { Logo } from "./ui/logo"
import { Button } from "./ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold">Code Cultivator</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Grow your skills, master the craft, and cultivate your path in software development.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="text-muted-foreground hover:text-foreground">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-muted-foreground hover:text-foreground">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-muted-foreground hover:text-foreground">
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-muted-foreground hover:text-foreground">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between md:gap-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Code Cultivator. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

