"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Mail, Calendar, Award, Heart } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const staticImage = "/profile.jpg?height=300&width=400"
  const slideshowImages = [
    "/profile_1.jpg",
    "/olympics-trophy.jpg",
    "/profile_2.jpg",
    "/profile_3.jpg",
    "/profile_4.jpg",
    "/profile_5.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(staticImage)
  const [hovering, setHovering] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (hovering) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slideshowImages.length)
        setCurrentImage(slideshowImages[(index + 1) % slideshowImages.length])
      }, 1000)
    } else {
      setCurrentImage(staticImage)
      setIndex(0)
    }

    return () => clearInterval(interval)
  }, [hovering, index])

  const timeline = [
    {
      year: "2025",
      title: "AI Intern",
      company: "DatAIsm",
      description: "AI Intern at the AI Medicare Solutions provider ",
    },
    {
      year: "2024",
      title: "Bachelor of Science in Data Sciences",
      company: "Indian Institute of Technology Madras",
      description: "Pursuing BS data Science in the prestigious IITM.",
    },
    {
      year: "2023",
      title: "Bachelor in Information Technology",
      company: "Vishwakarma Institute of Technology",
      description: "Currently Pursuing Btech in IT from VIT Pune.",
    },
    {
      year: "2022",
      title: "M-Prakash Institute",
      company: "JEE Coaching Class",
      description: "A prestigious elite coaching class for IIT JEE and Logic Building.",
    },
    {
      year: "2020",
      title: "Millenium National Scool",
      company: "Elementary School",
      description: "Millennium National School, a premier institution known for its holistic approach to elementary education and academic excellence.",
    },
  ]

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Striving for the highest quality in every project and continuously improving my skills.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Genuinely passionate about technology and creating solutions that make a difference.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Reliability",
      description: "Committed to delivering projects on time and maintaining clear communication.",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="max-w-4xl mx-auto">
            <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <Image
                src={currentImage}
                alt="About me"
                width={400}
                height={300}
                className="rounded-lg mx-auto mb-8 transition-all duration-500"
              />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate AIML developer. I love turning complex problems into simple, beautiful, and intuitive solutions. And Leveraging the true potential of Machine Learning And Artificial Intelligence.
            </p>
          </div>
        </div>

        {/* Personal Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Pune, Maharashtra</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">+91 7820965159</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">arushbadhe@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* My Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <p className="text-lg leading-relaxed mb-6">
              I’m an aspiring AI & Machine Learning engineer currently in my second year, pursuing a dual degree — BS in Data Sciences and Engineering at IIT Madras and BTech in Information Technology at VIT Pune. My passion lies at the intersection of Computer Vision and Object Detection, where I enjoy solving complex real-world problems by teaching machines to see and understand the world.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My academic journey has been driven by curiosity and hands-on projects involving deep learning frameworks, image processing, and neural networks. I’m continually exploring the latest advancements in AI, eager to deepen my expertise in convolutional neural networks (CNNs), transformers, and real-time object detection algorithms.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of coding and research, I love diving into tech talks, contributing to open-source projects, and experimenting with novel computer vision techniques. When I’m not immersed in AI, you’ll find me exploring nature, reading about emerging technologies, or brainstorming new project ideas.
            </p>
            <p className="text-lg leading-relaxed">
              I’m excited about collaborating on innovative projects and open to opportunities that challenge me to grow and make an impact!
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-border mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">My Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
