import { DocsHeader } from "../../components/docs/docs-header"
import { DocsSidebar } from "../../components/docs/docs-sidebar"
import { DocsContent } from "../../components/docs/docs-content"

export default function DocsPage() {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <DocsSidebar />
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          <DocsHeader />
          <DocsContent />
        </div>
      </main>
    </div>
  )
}

