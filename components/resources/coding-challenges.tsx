import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Brain, Clock, Users } from "lucide-react"

const challenges = [
  {
    title: "Array Manipulation Master",
    description: "Practice array methods and transformations",
    difficulty: "Easy",
    timeEstimate: "30 mins",
    participants: 234,
    tags: ["Arrays", "JavaScript", "Algorithms"],
  },
  {
    title: "React Component Challenge",
    description: "Build a reusable component with complex state management",
    difficulty: "Medium",
    timeEstimate: "1 hour",
    participants: 156,
    tags: ["React", "State Management", "Components"],
  },
  {
    title: "Database Query Optimizer",
    description: "Optimize complex SQL queries for better performance",
    difficulty: "Hard",
    timeEstimate: "2 hours",
    participants: 89,
    tags: ["SQL", "Database", "Performance"],
  },
]

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500",
  Medium: "bg-yellow-500/10 text-yellow-500",
  Hard: "bg-red-500/10 text-red-500",
}

export function CodingChallenges() {
  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <Card key={challenge.title}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
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
                    <Brain className="mr-1 h-4 w-4" />
                    {challenge.difficulty}
                  </div>
                </div>
                <Button>Start Challenge</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

