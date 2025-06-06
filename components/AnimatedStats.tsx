'use client'

import CountUp from "react-countup"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Leetcode Problems", value: "100+" },
  { label: "Articles Published", value: "2" },
]

export default function AnimatedStats() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {stats.map((stat, index) => {
          const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10)
          const suffix = stat.value.replace(/[0-9]/g, "")
          return (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  <CountUp end={numericValue} duration={2} />{suffix}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
