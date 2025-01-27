"use client"

import { Input } from "../ui/input"
import { Search } from "lucide-react"

export function SearchResources() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search resources..." className="pl-10" />
    </div>
  )
}

