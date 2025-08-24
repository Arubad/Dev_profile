import dynamic from "next/dynamic"
import { ScrollText, Book, Trophy, Award, Star, Users, BookOpen, Mic, Newspaper,Sparkles,FileText,Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ClientAchievements from "@/components/ClientAchievementsWrapper"

export default function AchievementsPage() {
  const achievements = [
    /*{
      icon: <Trophy className="w-8 h-8" />,
      title: "Leetcode Programming Achievement",
      description: "Solved over 100 Problems on Leetcode",
      date: "2025",
      category: "Coding Platform",
      image: "/leetcode.png",
    },*/
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI/ML and Data Science Lead",
      description: "Led the Gedit Coding Club, focusing on mentorship and project-based learning in AI, machine learning, and data science. Organized workshops and guided members in developing practical skills.",
      date: "2024 - present",
      category: "Leadership",
      image: "/club.jpeg",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "WhatsApp Chatbot Project for Rosewood Enterprises",
      description: "Developing an industry-grade WhatsApp chatbot for Rosewood Enterprises to provide real-time product information, stock updates, and 24/7 customer support. The project was built using the Meta Business API and incorporated multi-language support (English, Hindi, Spanish) and an escalation flow to a live agent.",
      date: "August 2025 - Ongoing",
      category: "Industry Project",
      image: "/indus_spons.jpeg",
    },
    /*{
      icon: <FileText className="w-8 h-8" />,
      title: "Paper Publication at ICIVC",
      description: "Authored a research paper accepted and published in the proceedings of the International Conference on Intelligent Vision and Computing (ICIVC), focusing on novel contributions in intelligent systems and data analytics. This publication is indexed in Scopus and other major databases.",
      date: "2024", // or the specific year of publication
      category: "Publication",
      image: "/icivc-paper.png", // Placeholder for a related image or a snippet of the paper
    },*/
    {
      icon: <ScrollText className="w-8 h-8" />,
      title: "IITM BS Data Science Foundation",
      description: "Upon completion of Foundation Program, covering Mathematics, Statistics, Computational Thinking, and Python",
      date: "2024",
      category: "Certificate",
      image: "/iitm-certificate.png",
    },
    {
      icon: <ScrollText className="w-8 h-8" />,
      title: "Google solutions challenge 2025 Participant",
      description: "Participated in the Google Solutions Challenge 2025 with a project focused on social impact",
      date: "2025",
      category: "Certificate",
      image: "/Solutions_participationcert.jpg",
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Time Series Forecasting Course – IIT Kharagpur",
      description: "Course of Time Series Forecasting conducted by Analytics club of IIT-KGP",
      date: "2025",
      category: "Course",
      image: "/ts-forecasting-certificate.png",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Student of M-Prakash Institute",
      description: "Highly selective competitive coaching class for IIT JEE",
      date: "2022",
      category: "Selection",
      image: "/MPI.jpg",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "School Olympics Champion Boy",
      description: (
        <>
          Prestigious award given to the outstanding performer in School Olympics.{" "}
          <a
            href="https://www.facebook.com/SakalSchoolympics/photos/champion-boy-arush-badhe-and-champion-girl-vaishnavi-more-were-felicitated-by-ra/1355136184627233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View on Facebook
          </a>
        </>
      ),
      date: "2018",
      category: "Award",
      youtubeUrl: "https://www.youtube.com/embed/QtUKaFm8_gY",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Social Welfare Achievement",
      description: "Recognized for contribution to social welfare activities",
      date: "2024",
      category: "Social Welfare",
      image: "/sfa.png",
    },
  ]

  const hobbies = [
    {
      name: "Swimming",
      description: "Swam in multiple state and national-level tournaments",
      icon: "🏊",
      youtubeUrl: "https://www.youtube.com/embed/naA0TolwnbQ",
    },
    {
      name: "Badminton",
      description: "Frequent badminton player",
      icon: "🏸",
      youtubeUrl: "https://www.youtube.com/embed/J-cZYIokw_c",
    },
    {
      name: "Running",
      description: "Like to Run 5 & 10km Marathons",
      icon: "🏃",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Hobbies</h1>
          <p className="text-xl text-muted-foreground">
            Accomplishments and personal interests that shape who I am
          </p>
        </div>

        {/* Stats Section */}
        <ClientAchievements />

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">{achievement.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <Badge variant="secondary">{achievement.date}</Badge>
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{achievement.description}</p>
                  {achievement.image && (
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  )}
                  {achievement.youtubeUrl && (
                    <div className="aspect-video mt-2">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={achievement.youtubeUrl}
                        title={achievement.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Interests & Hobbies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{hobby.icon}</span>
                    <CardTitle className="text-lg">{hobby.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{hobby.description}</p>
                  {hobby.image && (
                    <Image
                      src={hobby.image}
                      alt={hobby.name}
                      width={400}
                      height={250}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  )}
                  {hobby.youtubeUrl && (
                    <div className="aspect-video mt-2">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={hobby.youtubeUrl}
                        title={hobby.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
