"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { LearningPaths } from "./learning-paths"
import { CodingChallenges } from "./coding-challenges"
import { Certifications } from "./certifications"

export function ResourceTabs() {
  return (
    <Tabs defaultValue="paths" className="space-y-4">
      <TabsList>
        <TabsTrigger value="paths">Learning Paths</TabsTrigger>
        <TabsTrigger value="challenges">Coding Challenges</TabsTrigger>
        <TabsTrigger value="certifications">Certifications</TabsTrigger>
      </TabsList>
      <TabsContent value="paths" className="space-y-4">
        <LearningPaths />
      </TabsContent>
      <TabsContent value="challenges" className="space-y-4">
        <CodingChallenges />
      </TabsContent>
      <TabsContent value="certifications" className="space-y-4">
        <Certifications />
      </TabsContent>
    </Tabs>
  )
}

