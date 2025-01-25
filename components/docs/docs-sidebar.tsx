import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"

const docs = {
  "Getting Started": [
    {
      title: "Introduction",
      href: "/docs/introduction",
      current: true,
    },
    {
      title: "Installation",
      href: "/docs/installation",
    },
    {
      title: "Platform Overview",
      href: "/docs/platform-overview",
    },
  ],
  "Core Concepts": [
    {
      title: "Growth Levels",
      href: "/docs/growth-levels",
    },
    {
      title: "Learning Paths",
      href: "/docs/learning-paths",
    },
    {
      title: "Community Guidelines",
      href: "/docs/community-guidelines",
    },
  ],
  Features: [
    {
      title: "Challenges",
      href: "/docs/challenges",
    },
    {
      title: "Mentorship",
      href: "/docs/mentorship",
    },
    {
      title: "Projects",
      href: "/docs/projects",
    },
    {
      title: "Hackathons",
      href: "/docs/hackathons",
    },
  ],
  "Advanced Topics": [
    {
      title: "Contributing",
      href: "/docs/contributing",
    },
    {
      title: "API Reference",
      href: "/docs/api-reference",
    },
    {
      title: "Best Practices",
      href: "/docs/best-practices",
    },
  ],
}

export function DocsSidebar() {
  return (
    <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
      <div className="space-y-6">
        {Object.entries(docs).map(([category, items]) => (
          <div key={category} className="space-y-3">
            <h4 className="font-medium">{category}</h4>
            <div className="space-y-1">
              {items.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn("w-full justify-start", item.current && "bg-muted font-medium")}
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

