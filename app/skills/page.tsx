"use client"

import {
  Code,
  Database,
  Cloud,
  Wrench,
  Smartphone,
  Globe,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      description: "Languages I use for development",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "HTML",
        "SQL",
        "C",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Frameworks",
      description: "Modern frontend technologies",
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Databases",
      description: "Server-side technologies and databases",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description: "Cloud platforms and deployment tools",
      skills: [
        "Docker",
        "Google Cloud",
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      description: "Development tools and platforms",
      skills: [
        "Git",
        "VS Code",
        "Figma",
        "Postman",
        "Jira",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Mobile app development technologies",
      skills: [
        "React Native",
        "Android Development",
      ],
    },
  ]

  const certifications = [
    {
      title: "Introduction to Programming",
      image: "/Intro_to_programming.png",
    },
    {
      title: "Pandas",
      image: "/pandas.jpg",
    },
    {
      title: "Data Analysis with Excel",
      image: "/Data_analysis_with-excel.jpg",
    },
    {
      title: "Advanced Excel",
      image: "/advanced_excel.jpg",
    },
    {
      title: "Basic SQL",
      image: "/Hackerrank_sql_basic_certification.png",
    },
    {
      title: "SEBI-Investor certification",
      image: "/SEBI_investor_certification.png",
    },
    {
      title: "Building Responsive Websites",
      image: "/resp_webdes.jpg",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary">{category.icon}</div>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:scale-[1.02] transition-transform">
                    <CardHeader>
                      <CardTitle>{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogTitle>
                    <VisuallyHidden>{cert.title}</VisuallyHidden>
                  </DialogTitle>
                  <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-lg" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Additional Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription>Personal and professional competencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Leadership",
                    "Team Collaboration",
                    "Problem Solving",
                    "Communication",
                    "Project Management",
                    "Mentoring",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/*<Card>
              <CardHeader>
                <CardTitle>Methodologies</CardTitle>
                <CardDescription>Development practices and methodologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Agile", "Scrum", "TDD", "CI/CD", "DevOps", "Microservices"].map((methodology) => (
                    <Badge key={methodology} variant="outline" className="text-sm py-1 px-3">
                      {methodology}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>*/}
          </div>
        </section>
      </div>
    </div>
  )
}
