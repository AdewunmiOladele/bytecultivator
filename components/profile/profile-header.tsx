import { Edit, Github, Globe, MapPin, Twitter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Progress } from "../ui/progress"

export function ProfileHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="outline" className="absolute -right-2 -top-2 h-8 w-8 rounded-full">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Jane Doe</h1>
                <Badge variant="secondary">Sapling</Badge>
              </div>
              <p className="text-muted-foreground">Full Stack Developer | Open Source Enthusiast</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <a href="#" className="flex items-center gap-1 hover:text-primary">
                <Github className="h-4 w-4" />
                janedoe
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-primary">
                <Twitter className="h-4 w-4" />
                @janedoe
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-primary">
                <Globe className="h-4 w-4" />
                janedoe.dev
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress to next level</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

