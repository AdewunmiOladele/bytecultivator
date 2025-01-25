"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Achievements } from "./achievements"
import { ActivityLog } from "./activity-log"
import { Settings } from "./settings"

export function ProfileTabs() {
  return (
    <Tabs defaultValue="activity" className="space-y-4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="achievements">Achievements</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="activity">
        <ActivityLog />
      </TabsContent>
      <TabsContent value="achievements">
        <Achievements />
      </TabsContent>
      <TabsContent value="settings">
        <Settings />
      </TabsContent>
    </Tabs>
  )
}

