"use client";

import {
  Badge
} from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const skillCategories = [{
  id: "languages",
  name: "Languages",
  skills: ["JavaScript", "Python", "HTML", "SQL", "C++", "C", "Java"],
}, {
  id: "frameworks",
  name: "Frameworks & Libraries",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "OpenCV",
    "scikit-learn",
    "MediaPipe",
    "YOLO",
    "Roboflow",
    "Hugging Face",
  ],
}, {
  id: "tools",
  name: "Tools & Platforms",
  skills: [
    "Git",
    "Docker",
    "GCP",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Google Colab",
  ],
}, ];

const skillDescriptions = {
  "JavaScript": "Versatile scripting language for web development, enabling dynamic and interactive web pages.",
  "Python": "A high-level, general-purpose programming language widely used in AI, data science, and backend development.",
  "HTML": "The foundational language for all web pages, defining their structure and content.",
  "SQL": "The standard language for managing and querying relational databases, essential for data manipulation.",
  "C++": "A powerful, high-performance language used in systems programming, game development, and high-frequency trading.",
  "C": "A foundational procedural programming language, commonly used for operating systems and embedded systems.",
  "Java": "A class-based, object-oriented language known for its portability and use in enterprise-level applications.",
  "React": "A popular JavaScript library for building component-based user interfaces and single-page applications.",
  "Next.js": "A React framework for building server-rendered and statically generated web applications with a focus on performance.",
  "Node.js": "A JavaScript runtime environment that allows server-side execution of JavaScript, ideal for building scalable network applications.",
  "Express": "A minimalist and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  "Django": "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
  "Flask": "A lightweight Python web framework for building simple web applications quickly and with minimal boilerplate.",
  "TensorFlow": "An open-source library developed by Google for building and training machine learning and deep learning models.",
  "Keras": "A high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano.",
  "PyTorch": "A machine learning framework developed by Facebook, known for its flexibility and ease of use in research and development.",
  "OpenCV": "A library of programming functions mainly aimed at real-time computer vision.",
  "scikit-learn": "A robust machine learning library for Python, providing simple and efficient tools for data analysis and modeling.",
  "MediaPipe": "An open-source framework by Google for building cross-platform machine learning pipelines for perception tasks.",
  "YOLO": "An industry-standard, real-time object detection system, celebrated for its speed and accuracy.",
  "Roboflow": "A platform that provides a complete toolset for computer vision, from annotation and dataset management to model deployment.",
  "Hugging Face": "A leading platform for building, training, and deploying state-of-the-art machine learning models, especially for natural language processing.",
  "Git": "A distributed version control system that tracks changes in source code during software development.",
  "Docker": "A platform for developers and sysadmins to build, ship, and run distributed applications in containers.",
  "GCP": "Google Cloud Platform, a suite of cloud computing services that runs on the same infrastructure Google uses for its own products.",
  "Firebase": "A comprehensive mobile and web application development platform by Google, offering authentication, real-time databases, and more.",
  "MongoDB": "A NoSQL, document-oriented database designed for scalability and flexibility with unstructured data.",
  "PostgreSQL": "A powerful, open-source object-relational database system known for its strong standards compliance and extensibility.",
  "Pandas": "A data manipulation and analysis library for Python, providing fast, flexible, and expressive data structures.",
  "NumPy": "The fundamental package for scientific computing in Python, providing support for large, multi-dimensional arrays and matrices.",
  "Matplotlib": "A comprehensive library for creating static, animated, and interactive visualizations in Python.",
  "Seaborn": "A Python data visualization library based on Matplotlib, providing a high-level interface for drawing attractive statistical graphics.",
  "Google Colab": "A cloud-based Python notebook environment that allows you to write and execute Python code in your browser with free access to GPUs.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            A categorized overview of my technical skills and competencies
          </p>
        </div>

        {/* Skills Cards */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card key={category.id} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <TooltipProvider key={skill} delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge
                              variant="secondary"
                              className="px-4 py-2 text-base rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                            >
                              {skill}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs text-sm">
                            {skillDescriptions[skill] || "No description available."}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Skills</h2>
          <div className="flex justify-center">
            <Card className="max-w-4xl w-full">
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription>Personal and professional competencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Leadership",
                    "Team Collaboration",
                    "Problem Solving",
                    "Communication",
                    "Project Management",
                    "Mentoring",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}