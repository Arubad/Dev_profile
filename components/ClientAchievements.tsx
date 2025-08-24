'use client'

import { Card, CardContent } from "@/components/ui/card"
import CountUp from "react-countup"

const stats = [
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Leetcode Problems", value: 36, suffix: "+" },
  { label: "Articles Published", value: 0, suffix: "" },
]

export default function ClientAchievements() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
      <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(stats.length, 3)} md:grid-cols-${Math.min(stats.length, 4)} gap-6 justify-center`}>
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                <CountUp start={0} end={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
