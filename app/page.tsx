import { Github, Linkedin, Twitter, Download, Code2, Lightbulb, Rocket, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  const skills = {
    languages: ["JavaScript", "Python", "HTML", "SQL", "C++", "C", "Java"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "Flask", "TensorFlow", "Keras", "PyTorch", "OpenCV", "scikit-learn", "MediaPipe", "YOLO", "Hugging Face"],
    tools: ["Git", "Docker", "GCP", "Firebase", "MongoDB", "PostgreSQL", "Pandas", "NumPy", "Matplotlib","Seaborn","Google Colab"],
  }

  const achievements = [
    "IITM BS Data Science Foundation Comlpete",
    "Leetcode 100+ problems solved",
    "Time Series Forecasting IITKGP participant",
    "School Olympics Champion boy 2018 award recepient",
    "Social Welfare Achievements",
  ]

  const hobbies = ["Photography", "Swimming", "Badminton", "Reading", "Music"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Arush Badhe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">Aspiring AI/ML Engineer</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aspiring AI/ML engineer passionate about transforming data into actionable insights. I build smart, scalable systems using modern machine learning techniques and am actively seeking opportunities to grow through impactful internships.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Arubad" target="_blank">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://x.com/Arush_1050" target="_blank">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.linkedin.com/in/arush-badhe-56243325b/" target="_blank">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
{/* About Section */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column - Journey */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          I’m an aspiring AI & Machine Learning engineer currently in my second year, pursuing a dual degree — BS in Data Sciences and Engineering at IIT Madras and BTech in Information Technology at VIT Pune. My passion lies at the intersection of Computer Vision and Object Detection, where I enjoy solving complex real-world problems by teaching machines to see and understand the world.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          My academic journey has been driven by curiosity and hands-on projects involving deep learning frameworks, image processing, and neural networks. I’m continually exploring the latest advancements in AI, eager to deepen my expertise in convolutional neural networks (CNNs), transformers, and real-time object detection algorithms.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Outside of coding and research, I love diving into tech talks, contributing to open-source projects, and experimenting with novel computer vision techniques. When I’m not immersed in AI, you’ll find me exploring nature, reading about emerging technologies, or brainstorming new project ideas.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          I’m excited about collaborating on innovative projects and open to opportunities that challenge me to grow and make an impact!
        </p>
        <Button asChild>
          <Link href="/contact">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Link>
        </Button>
      </div>

      {/* Right Column - Cards */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pune, Maharashtra</p>
          </CardContent>
        </Card>
        {/*<Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>5+ Years in Software Development</p>
          </CardContent>
        </Card>/*}

        {/* Additional Skill Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Clean Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I write clean, maintainable code with best practices and modern patterns.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Problem Solver
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I enjoy tackling complex problems and finding elegant solutions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Fast Learner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I quickly adapt to new technologies and methodologies.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
                <CardDescription>Programming languages I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frameworks</CardTitle>
                <CardDescription>Frameworks and libraries I use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
                <CardDescription>Development tools and platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
  {/*<TestimonialsSection />*/}

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Hobbies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Some of my notable accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
                <CardDescription>What I enjoy doing in my free time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <Badge key={hobby} variant="outline" className="text-sm py-1 px-3">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blogs">Read Blogs</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/resume">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
