import dynamic from "next/dynamic"
import { ScrollText, Book, Trophy, Award, Star, Users, BookOpen, Mic, Newspaper } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ClientAchievements from "@/components/ClientAchievementsWrapper"

export default function AchievementsPage() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Leetcode Programming Achievement",
      description: "Solved over 100 Problems on Leetcode",
      date: "2025",
      category: "Coding Platform",
      image: "/leetcode.jpg",
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
      icon: <ScrollText className="w-8 h-8" />,
      title: "IITM BS Data Science Foundation",
      description: "Upon completion of Foundation Program, covering Mathematics, Statistics, Computational Thinking, and Python",
      date: "2024",
      category: "Certificate",
      image: "/iitm-certificate.png",
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
      description: "Prestigious award given to the outstanding performer in School Olympics",
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
      youtubeUrl: "https://www.youtube.com/embed/kEXSV9y9MNc",
    },
    {
      name: "Badminton",
      description: "Frequent badminton player",
      icon: "🏸",
      youtubeUrl: "https://www.youtube.com/embed/qpDOtooKG14",
    },
    {
      name: "Reading",
      description: "Avid reader of sci-fi, technology, and personal development books",
      icon: "📚",
    },
    {
      name: "Cooking",
      description: "Passionate about international cuisine and experimenting with new recipes",
      icon: "👨‍🍳",
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
