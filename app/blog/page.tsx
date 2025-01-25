import { BlogHeader } from "../../components/blog/blog-header"
import { ArticleGrid } from "../../components/blog/article-grid"
import { PopularTopics } from "../../components/blog/popular-topics"

export default function BlogPage() {
  return (
    <div className="container py-6 space-y-8">
      <BlogHeader />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ArticleGrid />
        </div>
        <div>
          <PopularTopics />
        </div>
      </div>
    </div>
  )
}

