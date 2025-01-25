import { LearningPathsGrid } from "../../components/learning/learning-paths-grid"
import { CurrentProgress } from "../../components/learning/current-progress"
import { RecommendedPath } from "../../components/learning/recommended-path"

export default function LearnPage() {
  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-muted-foreground">Structured learning paths to help you grow from seedling to cultivator</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <CurrentProgress />
          <LearningPathsGrid />
        </div>
        <div>
          <RecommendedPath />
        </div>
      </div>
    </div>
  )
}

