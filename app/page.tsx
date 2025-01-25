
import { LevelProgression } from "../components/level-progression"
import { Button } from "../components/ui/button"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Join the Journey to Become a Master Byte Cultivator
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Grow your skills, master the craft, and cultivate your path in software development. Join our community
                of learners and innovators.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">Start Your Journey</Button>
              <Button variant="outline" size="lg">
                Learn More About Levels
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Your Path to Growth</h2>
          <LevelProgression />
        </div>
      </section>
    </div>
  )
}

