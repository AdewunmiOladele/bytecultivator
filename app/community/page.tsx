import { CommunityTabs } from "../../components/community/community-tabs"
import { MemberSpotlight } from "../../components/community/member-spotlight"

export default function CommunityPage() {
  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Community Hub</h1>
        <p className="text-muted-foreground">
          Connect with fellow developers, share knowledge, and grow together in our thriving community.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CommunityTabs />
        </div>
        <div>
          <MemberSpotlight />
        </div>
      </div>
    </div>
  )
}

