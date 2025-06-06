"use client"

import {
  Badge
} from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: ["JavaScript", "Python", "HTML", "SQL", "C++", "C", "Java"],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    skills: [
      "React", "Next.js", "Node.js", "Express", "Django", "Flask",
      "TensorFlow", "Keras", "PyTorch", "OpenCV", "scikit-learn",
      "MediaPipe", "YOLO", "Hugging Face"
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    skills: [
      "Git", "Docker", "GCP", "Firebase", "MongoDB", "PostgreSQL",
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Google Colab"
    ],
  },
]

const skillDescriptions: Record<string, string> = {
  "JavaScript": "Versatile scripting language for web development.",
  "Python": "Popular language for automation, AI, and data science.",
  "HTML": "Standard markup language for creating web pages.",
  "SQL": "Used for managing and querying relational databases.",
  "C++": "High-performance language used in systems and game development.",
  "C": "Procedural language used in embedded and systems programming.",
  "Java": "Widely-used object-oriented language, known for portability.",
  "React": "JavaScript library for building user interfaces.",
  "Next.js": "React framework with server-side rendering and routing.",
  "Node.js": "JavaScript runtime for backend/server-side development.",
  "Express": "Minimalist backend framework for Node.js.",
  "Django": "Python web framework for rapid, secure development.",
  "Flask": "Lightweight Python web micro-framework.",
  "TensorFlow": "Google’s library for building deep learning models.",
  "Keras": "High-level neural networks API, often used with TensorFlow.",
  "PyTorch": "Facebook’s deep learning framework with dynamic computation.",
  "OpenCV": "Library for real-time computer vision.",
  "scikit-learn": "Machine learning library for Python.",
  "MediaPipe": "Google’s framework for building perception pipelines.",
  "YOLO": "Real-time object detection system.",
  "Hugging Face": "Popular platform for NLP and transformer models.",
  "Git": "Version control system to track code changes.",
  "Docker": "Containerization platform for deploying applications.",
  "GCP": "Google Cloud Platform—cloud infrastructure services.",
  "Firebase": "Google’s backend-as-a-service platform.",
  "MongoDB": "NoSQL database with flexible schema.",
  "PostgreSQL": "Advanced open-source relational database.",
  "Pandas": "Data manipulation and analysis library in Python.",
  "NumPy": "Numerical computing library for Python.",
  "Matplotlib": "Plotting and graphing library for Python.",
  "Seaborn": "Statistical data visualization on top of Matplotlib.",
  "Google Colab": "Cloud-based Python notebook environment.",
}

const certifications = [
  { title: "Introduction to Programming", image: "/Intro_to_programming.png" },
  { title: "Pandas", image: "/pandas.jpg" },
  { title: "Data Analysis with Excel", image: "/Data_analysis_with-excel.jpg" },
  { title: "Advanced Excel", image: "/advanced_excel.jpg" },
  { title: "Basic SQL", image: "/Hackerrank_sql_basic_certification.png" },
  { title: "SEBI-Investor certification", image: "/SEBI_investor_certification.png" },
  { title: "Building Responsive Websites", image: "/resp_webdes.jpg" },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            A categorized overview of my technical and soft skills
          </p>
        </div>

        {/* Skills Tabs */}
        <section className="mb-20">
          <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <TooltipProvider key={skill} delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge
                                variant="secondary"
                                className="px-4 py-2 text-base rounded-full cursor-default"
                              >
                                {skill}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs text-sm">
                              {skillDescriptions[skill] || "No description available."}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Certifications */}
        <section className="mb-20">
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

        {/* Soft Skills */}
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
          </div>
        </section>
      </div>
    </div>
  )
}
