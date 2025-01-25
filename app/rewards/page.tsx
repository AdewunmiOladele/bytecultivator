import { RewardsHeader } from "../../components/rewards/rewards-header"
import { TokenBalance } from "../../components/rewards/token-balance"
import { RewardsTabs } from "../../components/rewards/rewards-tabs"

export default function RewardsPage() {
  return (
    <div className="container py-6 space-y-8">
      <RewardsHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <TokenBalance />
        <div className="md:col-span-2">
          <RewardsTabs />
        </div>
      </div>
    </div>
  )
}

