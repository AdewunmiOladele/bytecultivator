import { Eye, Heart, MessageSquare, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export function ShowcaseHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Project Showcase</h1>
            <p className="text-muted-foreground">Share your projects, get feedback, and inspire others</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Submit Project
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Eye className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">2.5k</p>
              <p className="text-sm text-muted-foreground">Monthly Views</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Heart className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">156</p>
              <p className="text-sm text-muted-foreground">Project Likes</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">89</p>
              <p className="text-sm text-muted-foreground">Feedback Received</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

