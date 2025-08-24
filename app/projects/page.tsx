import { Github, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "WhatsApp Chatbot for Rosewood Enterprises",
      description:
        "As an industry-grade project for Rosewood Enterprises, my group is developing a WhatsApp chatbot using the **Meta Business API** to deliver real-time product information, manage FAQs, and provide 24/7 customer support. The system features a multi-language interface (English, Hindi, Spanish) and integrates with the company's Inventory, CRM, and Ticketing systems via APIs for seamless transactional support and query escalation. The chatbot is designed to achieve an automated resolution rate of at least 80% while handling up to 10,000 concurrent chats.",
      image: "/indus_spons.jpeg",
      technologies: [
        "Python",
        "Meta Business API",
        "Natural Language Processing (NLP)",
        "Flask",
        "APIs/REST",
        "SQL",
        "PostgreSQL",
        "Ticketing System API",
        "Inventory Management System API",
        "CRM API",
        "Git",
      ],
      github: "https://github.com/your-project-repo",
      demo: "https://your-project-demo.com",
      date: "August 2025 - Ongoing",
    },
    {
      title: "Image Metadata and Face Recognition Toolkit",
      description:
        "A Colab-based toolkit that combines DeepFace, Google Cloud Vision, and geolocation APIs to perform facial recognition, image metadata extraction, and GPS mapping from uploaded photos.",
      image: "/proj_4.png?height=300&width=500",
      technologies: ["Python", "Deep Face", "Google Colab", "Cloud Vision API", "ExifRead","Google Maps API","Firebase"],
      github: "https://github.com/Arubad/Post-Disaster-management",
      demo: "https://social-analytics-demo.vercel.app",
      date: "2025",
    },
    {
      title: "Yoga-Pose Detection App",
      description:
        "A real-time web-based human pose detection and classification system using Flask, YOLOv8, MediaPipe BlazePose, and a Keras deep learning model.",
      image: "/proj_1.jpeg?height=300&width=500",
      technologies: ["Flask", "Python", "TensorFlow", "Keras", "YOLOv8 (Ultralytics)","MediaPipe BlazePose","OpenCV","HTML","MJPEG Stream","NumPy","OS Module"],
      github: "https://github.com/Arubad/Yoga_pose_detection",
      demo: "",
      date: "2025",
    },
    {
      title: "Spell Checker and automated suggestion system",
      description:"A spell checker that suggests correct words by computing edit distance using the Wagner-Fischer algorithm for optimal string alignment.",
      image: "/proj_2.jpeg?height=100&width=300",
      technologies: ["Python", "Wagner-Fischer Algorithm", "Tkinter"],
      github: "https://github.com/Arubad/Spell_checker_-Wagner-Fischer-",
      demo: "https://taskmanager-demo.vercel.app",
      date: "2025",
    },
    {
      title: "Solspot-Car",
      description:
        "A solar-powered smart vehicle prototype with 360° rotating wheels and ESP32-based wireless control for efficient parallel parking in tight urban spaces.",
      image: "/proj_3.jpeg?height=300&width=500",
      technologies: ["UBEC Module", "L298N Motor Driver", "ESPAsyncWebServer", "ESP32","ArduinoIDE"],
      github: "https://github.com/Arubad/Solspot-Car?tab=readme-ov-file",
      demo: "https://weather-dashboard-demo.vercel.app",
      date: "2024",
    },
    {
      title: "Attendance monitoring system",
      description:
        "A multithreaded C server with Python clients and a Tkinter dashboard that enables real-time, TCP-based attendance monitoring and CSV export for classrooms.",
      image: "/proj_5.png?height=300&width=500",
      technologies: ["Python", "Socket Programming", "GUI Dashboard", "gcc dev tools"],
      github: "https://github.com/Arubad/Attendance_monitoring_sys",
      demo: "https://crypto-tracker-demo.vercel.app",
      date: "2025",
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
                    {/*<Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>*/}
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
