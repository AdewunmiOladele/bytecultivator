"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Leaderboard } from "./leaderboard"
import { RedeemableRewards } from "./redeemable-rewards"

export function RewardsTabs() {
  return (
    <Tabs defaultValue="rewards" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="rewards">Redeemable Rewards</TabsTrigger>
        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
      </TabsList>
      <TabsContent value="rewards">
        <RedeemableRewards />
      </TabsContent>
      <TabsContent value="leaderboard">
        <Leaderboard />
      </TabsContent>
    </Tabs>
  )
}

