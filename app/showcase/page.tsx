import { ShowcaseHeader } from "../../components/showcase/showcase-header"
import { ProjectGrid } from "../../components/showcase/project-grid"
import { FeaturedProject } from "../../components/showcase/featured-project"

export default function ShowcasePage() {
  return (
    <div className="container py-6 space-y-8">
      <ShowcaseHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProjectGrid />
        </div>
        <div>
          <FeaturedProject />
        </div>
      </div>
    </div>
  )
}

