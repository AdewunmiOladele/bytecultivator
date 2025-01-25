import { Clock, Sparkles, Trophy, Users } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const challenges = [
  {
    title: "Build a Real-time Chat Application",
    description: "Create a chat application using WebSocket and React",
    difficulty: "Advanced",
    timeEstimate: "4-6 hours",
    participants: 234,
    tags: ["React", "WebSocket", "Real-time"],
    xpPoints: 500,
    featured: true,
    type: "Project",
  },
  {
    title: "Optimize Database Queries",
    description: "Improve the performance of complex SQL queries",
    difficulty: "Intermediate",
    timeEstimate: "2-3 hours",
    participants: 156,
    tags: ["SQL", "Performance", "Database"],
    xpPoints: 300,
    type: "Challenge",
  },
  {
    title: "Implement Authentication System",
    description: "Build a secure authentication system with JWT",
    difficulty: "Intermediate",
    timeEstimate: "3-4 hours",
    participants: 189,
    tags: ["Security", "JWT", "Node.js"],
    xpPoints: 400,
    type: "Project",
  },
]

const difficultyColors = {
  Beginner: "bg-green-500/10 text-green-500",
  Intermediate: "bg-yellow-500/10 text-yellow-500",
  Advanced: "bg-red-500/10 text-red-500",
}

export function ChallengeGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Available Challenges</h2>
        <Button variant="outline">Filter</Button>
      </div>
      <div className="grid gap-4">
        {challenges.map((challenge) => (
          <Card key={challenge.title} className="relative overflow-hidden">
            {challenge.featured && (
              <div className="absolute right-0 top-0">
                <div className="flex h-6 items-center rounded-bl-lg bg-primary px-2 text-xs text-primary-foreground">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Featured
                </div>
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </div>
                <Badge
                  variant="secondary"
                  className={difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}
                >
                  {challenge.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{challenge.type}</Badge>
                  {challenge.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {challenge.timeEstimate}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {challenge.participants}
                    </div>
                    <div className="flex items-center">
                      <Trophy className="mr-1 h-4 w-4" />
                      {challenge.xpPoints} XP
                    </div>
                  </div>
                  <Button>Start Challenge</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

