import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  // Additional detailed testimonials for the dedicated page
  const detailedTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechVision Inc.",
      content:
        "Working with John was an absolute pleasure. His technical expertise and problem-solving skills are exceptional. He delivered our project ahead of schedule and exceeded all expectations. What impressed me most was his ability to communicate complex technical concepts in a way that non-technical stakeholders could understand. He was proactive in identifying potential issues before they became problems and always came prepared with solutions. I highly recommend John for any development project.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Enterprise Dashboard Application",
      duration: "6 months",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateSoft",
      content:
        "John is one of the most talented developers I've ever worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. He's also a great team player who elevates everyone around him. During our project, he not only delivered high-quality code but also mentored junior developers and improved our development processes. His technical decisions were always well-thought-out and future-proof, which has saved us countless hours of refactoring down the line.",
      image: "/placeholder.svg?height=100&width=100",
      project: "E-commerce Platform Redesign",
      duration: "8 months",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "StartupLaunch",
      content:
        "We hired John to build our MVP, and he delivered beyond our expectations. His technical knowledge combined with his understanding of business needs made him an invaluable partner. Our product wouldn't be where it is today without his contributions. As a startup founder with limited technical knowledge, I appreciated how John took the time to explain different approaches and their trade-offs, helping us make informed decisions. He was flexible with our changing requirements and always kept the end-user experience in mind.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Mobile App MVP",
      duration: "4 months",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Lead Developer",
      company: "CodeCraft Solutions",
      content:
        "As a fellow developer, I can attest to John's exceptional coding standards and technical abilities. He's always up-to-date with the latest technologies and best practices. A true professional who elevates any team he's part of. What sets John apart is his commitment to clean, maintainable code and comprehensive documentation. When he joined our team, he quickly identified performance bottlenecks in our application and implemented solutions that improved load times by over 40%. His code reviews are thorough and educational, helping the entire team improve.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Performance Optimization",
      duration: "3 months",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "UI/UX Designer",
      company: "DesignHub",
      content:
        "Collaborating with John was seamless. He has a great eye for design implementation and always ensures the final product matches the design vision perfectly. His attention to detail and commitment to quality are outstanding. Unlike many developers I've worked with, John truly understands the importance of pixel-perfect implementation and smooth animations. He would often suggest improvements to the user experience that we hadn't considered, showing his holistic approach to product development. I look forward to working with him on future projects.",
      image: "/placeholder.svg?height=100&width=100",
      project: "SaaS Dashboard Redesign",
      duration: "5 months",
    },
    {
      id: 6,
      name: "Robert Garcia",
      position: "Marketing Director",
      company: "GrowthMarketing",
      content:
        "John helped us implement complex tracking and analytics solutions that transformed our marketing capabilities. He took the time to understand our business goals and delivered a solution that provided actionable insights. His work directly contributed to a 35% increase in conversion rates. Beyond the technical implementation, John created documentation and training materials that helped our team become self-sufficient in managing the system.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Analytics Implementation",
      duration: "2 months",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            Feedback from clients and colleagues I've had the pleasure of working with
          </p>
        </div>

        {/* Featured Testimonials Carousel */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Testimonials</h2>
          <TestimonialsSection />
        </div>

        {/* Detailed Testimonials */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-primary text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <span className="font-medium">Project:</span> {testimonial.project}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Duration:</span> {testimonial.duration}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="pl-6 text-muted-foreground">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always looking for new opportunities to collaborate on exciting projects. Let's create something amazing
            together.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
