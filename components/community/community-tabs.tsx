"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { DiscussionForum } from "./discussion-forum"
import { MemberDirectory } from "./member-directory"
import { CollaborationZone } from "./collaboration-zone"

export function CommunityTabs() {
  return (
    <Tabs defaultValue="discussions" className="space-y-4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="discussions">Discussions</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
      </TabsList>
      <TabsContent value="discussions">
        <DiscussionForum />
      </TabsContent>
      <TabsContent value="members">
        <MemberDirectory />
      </TabsContent>
      <TabsContent value="collaborate">
        <CollaborationZone />
      </TabsContent>
    </Tabs>
  )
}

