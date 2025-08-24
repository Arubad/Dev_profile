"use client";

import { useState } from "react";
import { Download, GraduationCap, Award, Calendar, MapPin, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogOverlay } from "@/components/ui/dialog";

export default function ResumePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState("");

  const education = [
    {
      degree: "BS Data Science",
      school: "IIT Madras",
      location: "Madras",
      year: "2024-ongoing",
      gpa: "7.86",
      courses: [
        {
          name: "English I",
          description: "This course covers sounds, words, and sentences to build foundational communication skills."
        },
        {
          name: "Mathematics for Data Science I",
          description: "An introduction to functions, discrete mathematics, and graph theory with real-world applications."
        },
        {
          name: "Statistics for Data Science I",
          description: "Introduces large datasets, descriptive and inferential statistics, and basic probability concepts."
        },
        {
          name: "Computational Thinking",
          description: "Develops problem-solving skills using variables, iteration, and algorithms with a focus on data sanity."
        },
        {
          name: "English II",
          description: "A continuation of English I, focusing on advanced sounds, words, and sentences."
        },
        {
          name: "Mathematics for Data Science II",
          description: "Covers linear algebra, calculus, and optimization techniques for machine learning and data science applications."
        },
        {
          name: "Statistics for Data Science II",
          description: "Delves deeper into probability distributions, parameter estimation, and hypothesis testing."
        },
        {
          name: "Programming in Python",
          description: "Focuses on foundational Python concepts, data structures, and algorithms."
        },
        {
          name: "Programming Concepts using Java",
          description: "Covers core OOP principles, Java basics, inheritance, polymorphism, and advanced features like multithreading and the Stream API."
        },
        {
          name: "Database Management Systems",
          description: "Teaches database fundamentals, data modeling, normalization, SQL, query optimization, and an introduction to NoSQL."
        },
        {
          name: "System Commands",
          description: "Covers system-level commands, processes, and scripting in a Linux environment."
        },
        {
          name: "Programming, Data Structures, and Algorithms using Python",
          description: "A comprehensive course on programming concepts, data structures, and algorithms with Python."
        },
        {
          name: "Machine Learning Foundations",
          description: "Introduces the basics of machine learning, including supervised and unsupervised learning, regression, and dimensionality reduction."
        },
        {
          name: "Machine Learning Techniques",
          description: "Covers classification algorithms such as KNN, Naive Bayes, and decision trees, as well as clustering and association rule mining."
        }
      ]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Vishwakarma Institute Of Technology",
      location: "Pune, Maharashtra",
      year: "2023-ongoing",
      gpa: "8.51",
      courses: [
        {
          name: "Data Structures",
          description: "Covers linear and non-linear data structures, searching, sorting, hashing, and algorithm analysis."
        },
        {
          name: "Operating System",
          description: "Introduces virtualization, concurrency, and persistence; covers CPU scheduling and memory management techniques."
        },
        {
          name: "Digital Electronics and Microprocessor",
          description: "Focuses on logic gates, Boolean functions, digital circuits, and 8086 microprocessor architecture."
        },
        {
          name: "Discrete Mathematics",
          description: "Introduces propositions, set theory, combinatorics, graph theory, and mathematical proofs."
        },
        {
          name: "Object-Oriented Programming",
          description: "Covers core OOP principles, Java basics, inheritance, polymorphism, and advanced features like multithreading and the Stream API."
        },
        {
          name: "Database Management Systems",
          description: "Teaches database fundamentals, data modeling, normalization, SQL, query optimization, and an introduction to NoSQL."
        },
        {
          name: "Meta Backend Professional Certificate",
          description: "A comprehensive program on backend development, focusing on Django, APIs, and modern server-side practices."
        },
        {
          name: "Automata Theory",
          description: "Introduces computational models, formal languages, finite automata, regular expressions, and Turing machines."
        },
        {
          name: "Web Technology",
          description: "Covers the fundamentals of web development including HTML5, CSS, Javascript, and frameworks like React and Node.js."
        },
        {
          name: "Computer Networks",
          description: "Provides an overview of computer networks, OSI & TCP/IP models, data link layer concepts, and various protocols."
        },
        {
          name: "Internet of Things",
          description: "Explores IoT architecture, design methodologies, sensors, actuators, and connectivity technologies for building IoT solutions."
        },
        {
          name: "Data Science",
          description: "Covers data processing, dimensionality reduction, descriptive statistics, and the use of supervised and unsupervised classification algorithms."
        },
        {
          name: "Image Processing and Computer Vision",
          description: "Introduces image processing fundamentals, pre-processing, compression techniques, segmentation, and object recognition."
        },
        {
          name: "Artificial Intelligence",
          description: "Covers basic principles of AI, heuristic searches, knowledge-based systems, and an introduction to fuzzy logic and neural networks."
        }
      ],
    },
  ];

  const certifications = [
    {
      name: "Introduction to Agile Development and Scrum",
      issuer: "IBM",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Supply Chain Management Specialization",
      issuer: "Rutgers",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "IBM",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Generative Adversarial Networks Specialization",
      issuer: "Deeplearning.AI",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "IBM RAG and Agentic AI Professional Certificate",
      issuer: "IBM",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Retreival Augmented Generation",
      issuer: "DeepLearning.AI",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Retreival Augmented Generation",
      issuer: "DeepLearning.AI",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Reinforcement Learning Specialization",
      issuer: "University Of Alberta",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Natural Language Processing Specialization",
      issuer: "Deeplearning.AI",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Deeplearning.AI",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Mathematics for Machine Learning and Data Science Specialization",
      issuer: "Deeplearning.AI",
      year: "2025",
      id: "",
      image: "/ongoing.jpeg",
    },
    {
      name: "Introduction to Programming",
      issuer: "Kaggle",
      year: "2025",
      id: "AWS-SAA-2023",
      image: "/Intro_to_programming.png",
    },
    {
      name: "Pandas",
      issuer: "Udemy",
      year: "2024",
      id: "GCP-PD-2022",
      image: "/pandas.jpg",
    },
    {
      name: "Data Analysis with Excel",
      issuer: "Udemy",
      year: "2024",
      id: "CKA-2022",
      image: "/Data_analysis_with-excel.jpg",
    },
    {
      name: "Advanced Excel",
      issuer: "Udemy",
      year: "2024",
      id: "CKA-2022",
      image: "/advanced_excel.jpg",
    },
    {
      name: "Basic SQL",
      issuer: "HackerRank",
      year: "2024",
      id: "CKA-2022",
      image: "/Hackerrank_sql_basic_certification.png",
    },
    {
      name: "SEBI-investor",
      issuer: "SEBI",
      year: "2024",
      id: "CKA-2022",
      image: "/SEBI_investor_certification.png",
    },
    {
      name: "Building Responsive Websites",
      issuer: "Free Code Camp",
      year: "2025",
      id: "CKA-2022",
      image: "/resp_webdes.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-8">Download my complete resume or view the details below</p>
          <Button size="lg" asChild>
            <a href="/resume (2).pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="font-medium text-primary">{edu.school}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                    <div className="text-sm">
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    </div>

                    {/* Button to open dialog */}
                    {edu.courses && edu.courses.length > 0 && (
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedEducation(edu);
                          setIsDialogOpen(true);
                        }}
                        className="border-blue-400 text-blue-600 hover:bg-blue-50"
                      >
                        View Courses
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">{cert.year}</Badge>
                    {cert.image && (
                      <div className="mt-4 w-full h-48 relative cursor-pointer"
                        onClick={() => {
                          setSelectedImageSrc(cert.image);
                          setIsImageModalOpen(true);
                        }}
                      >
                        <Image
                          src={cert.image}
                          alt={`${cert.name} certificate`}
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={index === 0}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Course Details Dialog */}
      {selectedEducation && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogOverlay className="backdrop-blur-sm" />
          <DialogContent className="sm:max-w-[700px] animate-in fade-in-90 slide-in-from-bottom-10 animate-out fade-out-90 slide-out-to-bottom-10">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedEducation.degree}</DialogTitle>
              <DialogDescription className="text-lg">{selectedEducation.school}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4 max-h-[70vh] overflow-y-scroll custom-scrollbar">
              <h3 className="text-xl font-semibold">Courses Taken</h3>
              <ul className="list-disc list-inside space-y-3 text-base text-muted-foreground">
                {selectedEducation.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>
                    <p className="font-medium text-foreground">{course.name}</p>
                    <p className="text-sm">{course.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Image Expansion Modal */}
      {selectedImageSrc && (
        <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
          <DialogOverlay className="backdrop-blur-sm" />
          <DialogContent className="max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] p-0 animate-in fade-in-90 slide-in-from-bottom-10 animate-out fade-out-90 slide-out-to-bottom-10">
            <div className="w-full h-[80vh] relative">
              <Image
                src={selectedImageSrc}
                alt="Expanded certificate"
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:text-black"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}