import { Code2, Rocket, Trophy, Users } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export function HackathonHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Hackathons</h1>
            <p className="text-muted-foreground">Build innovative projects, collaborate with others, and win prizes</p>
          </div>
          <Button>
            <Rocket className="mr-2 h-4 w-4" />
            Create Hackathon
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Code2 className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">3</p>
              <p className="text-sm text-muted-foreground">Active Events</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">156</p>
              <p className="text-sm text-muted-foreground">Participants</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Trophy className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">$5,000</p>
              <p className="text-sm text-muted-foreground">Prize Pool</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

