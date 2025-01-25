import { Award, BookOpen, Coins, Gem } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const rewards = [
  {
    title: "AWS Cloud Practitioner Certification",
    description: "Access to certification exam and study materials",
    cost: 500,
    category: "Certification",
    icon: Award,
    popular: true,
  },
  {
    title: "Advanced React Course",
    description: "Complete course on React patterns and best practices",
    cost: 300,
    category: "Course",
    icon: BookOpen,
  },
  {
    title: "Premium Mentorship Session",
    description: "1-hour session with a senior developer",
    cost: 200,
    category: "Mentorship",
    icon: Gem,
  },
]

export function RedeemableRewards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {rewards.map((reward) => (
        <Card key={reward.title}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <reward.icon className="h-5 w-5 text-primary" />
                  {reward.title}
                </CardTitle>
                <CardDescription>{reward.description}</CardDescription>
              </div>
              {reward.popular && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Popular
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-primary" />
                <span className="font-bold">{reward.cost}</span>
                <span className="text-muted-foreground">Code Coins</span>
              </div>
              <Button variant="outline">Redeem</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

