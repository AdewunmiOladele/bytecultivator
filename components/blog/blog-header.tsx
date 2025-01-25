import { Bookmark, BookOpen, PenSquare, Users } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export function BlogHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Knowledge Garden</h1>
            <p className="text-muted-foreground">Share your insights, learn from others, and grow together</p>
          </div>
          <Button>
            <PenSquare className="mr-2 h-4 w-4" />
            Write Article
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">248</p>
              <p className="text-sm text-muted-foreground">Articles</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">56</p>
              <p className="text-sm text-muted-foreground">Authors</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Bookmark className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">1.2k</p>
              <p className="text-sm text-muted-foreground">Bookmarks</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">15k</p>
              <p className="text-sm text-muted-foreground">Monthly Reads</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

