import { ArrowUpRight, Coins } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const recentTransactions = [
  {
    type: "Earned",
    amount: 50,
    description: "Completed Frontend Path Module",
    date: "2 hours ago",
  },
  {
    type: "Spent",
    amount: -100,
    description: "AWS Certification Access",
    date: "1 day ago",
  },
  {
    type: "Earned",
    amount: 25,
    description: "Helped 5 community members",
    date: "2 days ago",
  },
]

export function TokenBalance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-primary" />
          Token Balance
        </CardTitle>
        <CardDescription>Your Code Coins balance and history</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">475</p>
            <p className="text-sm text-muted-foreground">Code Coins</p>
          </div>
          <Button>
            Redeem
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Recent Transactions</h3>
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-1">
                <p className="text-sm font-medium">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
              <p className={`font-medium ${transaction.type === "Earned" ? "text-green-500" : "text-red-500"}`}>
                {transaction.type === "Earned" ? "+" : ""}
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

