import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Info, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

export function DocsContent() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Introduction</h2>
        <p className="text-muted-foreground">
          Welcome to Byte Cultivators, a platform designed to help developers grow their skills and build a thriving
          community. This documentation will help you understand how to make the most of our platform.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Platform Overview</TabsTrigger>
          <TabsTrigger value="features">Key Features</TabsTrigger>
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is Byte Cultivators?</CardTitle>
              <CardDescription>Understanding our platform's mission and values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Byte Cultivators is a self-learning academy with community rewards and events, designed to align with
                growth, mastery, and continuous improvement stages in software development.
              </p>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Growth Levels</AlertTitle>
                <AlertDescription>
                  Our platform uses a unique growth system with levels from Seedling to Cultivator, each representing
                  different stages of your development journey.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="features" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Features</CardTitle>
              <CardDescription>Explore the key features that make Byte Cultivators unique</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Learning Paths</h3>
                <p className="text-sm text-muted-foreground">
                  Structured learning paths for different technologies and skill levels
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Community Challenges</h3>
                <p className="text-sm text-muted-foreground">
                  Regular coding challenges to test and improve your skills
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Mentorship</h3>
                <p className="text-sm text-muted-foreground">Connect with experienced developers for guidance</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Project Showcase</h3>
                <p className="text-sm text-muted-foreground">Share and get feedback on your projects</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="getting-started" className="space-y-4">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Start by completing your profile and joining a learning path that matches your current skill level.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Note</AlertTitle>
            <AlertDescription>
              Make sure to read our community guidelines before participating in discussions or submitting projects.
            </AlertDescription>
          </Alert>
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Follow these steps to get started with Byte Cultivators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">1. Complete Your Profile</h3>
                <p className="text-sm text-muted-foreground">Add your skills, interests, and learning goals</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">2. Choose a Learning Path</h3>
                <p className="text-sm text-muted-foreground">
                  Select a path that matches your current level and interests
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">3. Join the Community</h3>
                <p className="text-sm text-muted-foreground">Introduce yourself and connect with other members</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">4. Start Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Begin working through your chosen path's modules and challenges
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

