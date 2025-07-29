import { Download, GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  const education = [
    {
      degree: "BS Data Science",
      school: "IIT Madras",
      location: "Madras",
      year: "2024-ongoing",
      gpa: "7.86",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Vishwakarma Institute Of Technology",
      location: "Pune, Maharashtra",
      year: "2023-ongoing",
      gpa: "8.51",
    },
  ]

  const certifications = [
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
  ]

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
                      <div className="mt-4 w-full h-48 relative">
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
    </div>
  )
}
