import { BookOpen, Github } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export function DocsHeader() {
  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="flex items-center space-x-1">
        <Badge variant="secondary">v1.0.0</Badge>
        <Badge variant="secondary" className="px-1">
          <Github className="h-3 w-3" />
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to grow and thrive in the Byte Cultivators community.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

