import { Github, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/johndoe/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      date: "2023",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/johndoe/taskmanager",
      demo: "https://taskmanager-demo.vercel.app",
      date: "2023",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      date: "2022",
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for social media metrics with data visualization and automated reporting features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
      github: "https://github.com/johndoe/social-analytics",
      demo: "https://social-analytics-demo.vercel.app",
      date: "2022",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency price tracking application with portfolio management and price alerts functionality.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "CoinGecko API", "Redux"],
      github: "https://github.com/johndoe/crypto-tracker",
      demo: "https://crypto-tracker-demo.vercel.app",
      date: "2021",
    },
    {
      title: "Blog CMS",
      description:
        "A headless content management system for blogs with markdown support, SEO optimization, and multi-author capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Sanity", "GraphQL", "Vercel"],
      github: "https://github.com/johndoe/blog-cms",
      demo: "https://blog-cms-demo.vercel.app",
      date: "2021",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and side projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
