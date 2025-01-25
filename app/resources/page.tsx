import { ResourceTabs } from "../../components/resources/resource-tabs"
import { SearchResources } from "../../components/resources/search"


export default function ResourcesPage() {
  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Learning Resources</h1>
        <p className="text-muted-foreground">
          Access curated learning materials, coding challenges, and certification paths to advance your skills.
        </p>
      </div>
      <SearchResources />
      <ResourceTabs />
    </div>
  )
}

