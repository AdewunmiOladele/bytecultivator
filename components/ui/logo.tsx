import Image from "next/image"
import { cn } from "../../lib/utils"

interface LogoProps {
  className?: string
  theme?: "light" | "dark"
}

export function Logo({ className, theme = "light" }: LogoProps) {
  return (
    <div className={cn("relative h-8 w-8", className)}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bytecultivating-KWHTDEC4MsNT0pVrrLsifWRx79P5gu.webp"
        alt="ByteCultivator Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

