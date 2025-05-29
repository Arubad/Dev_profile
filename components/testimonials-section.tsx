"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  image: string
  rating: number
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechVision Inc.",
      content:
        "Working with John was an absolute pleasure. His technical expertise and problem-solving skills are exceptional. He delivered our project ahead of schedule and exceeded all expectations. I highly recommend John for any development project.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateSoft",
      content:
        "John is one of the most talented developers I've ever worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. He's also a great team player who elevates everyone around him.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "StartupLaunch",
      content:
        "We hired John to build our MVP, and he delivered beyond our expectations. His technical knowledge combined with his understanding of business needs made him an invaluable partner. Our product wouldn't be where it is today without his contributions.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Lead Developer",
      company: "CodeCraft Solutions",
      content:
        "As a fellow developer, I can attest to John's exceptional coding standards and technical abilities. He's always up-to-date with the latest technologies and best practices. A true professional who elevates any team he's part of.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "UI/UX Designer",
      company: "DesignHub",
      content:
        "Collaborating with John was seamless. He has a great eye for design implementation and always ensures the final product matches the design vision perfectly. His attention to detail and commitment to quality are outstanding.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const nextTestimonial = () => {
    setDirection("right")
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection("left")
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground">What people say about working with me</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border bg-card shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="mb-4 flex items-center justify-center md:justify-start">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "w-5 h-5",
                                  i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300",
                                )}
                              />
                            ))}
                          </div>
                          <div className="relative">
                            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                            <p className="text-lg mb-6 text-center md:text-left px-4 md:px-0">{testimonial.content}</p>
                          </div>
                          <div className="text-center md:text-left">
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-primary">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full hidden md:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full hidden md:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>

        <div className="flex justify-center mt-6 md:hidden gap-4">
          <Button variant="outline" size="sm" onClick={prevTestimonial}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={nextTestimonial}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
