import { ProfileHeader } from "../../components/profile/profile-header"
import { ProfileTabs } from "../../components/profile/profile-tabs"

export default function ProfilePage() {
  return (
    <div className="container py-6 space-y-8">
      <ProfileHeader />
      <ProfileTabs />
    </div>
  )
}

