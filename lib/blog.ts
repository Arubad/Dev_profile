import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "content/blogs")

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  readTime: string
  content: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
      // Create a sample blog post
      const samplePost = `---
title: "Welcome to My Blog"
description: "This is my first blog post where I introduce myself and share my thoughts on web development."
date: "2024-01-15"
author: "John Doe"
tags: ["introduction", "web-development", "react"]
readTime: "5 min read"
---

# Welcome to My Blog!

Hello and welcome to my personal blog! I'm excited to share my journey as a **full-stack developer** and my thoughts on the ever-evolving world of technology.

## What You Can Expect

In this blog, I'll be sharing:

- Technical tutorials and guides
- My experiences with different technologies
- Industry insights and trends
- Personal projects and case studies

## My Background

I've been working in software development for over 5 years, specializing in:

- React and Next.js
- Node.js and Express
- Cloud technologies (AWS, GCP)
- Database design and optimization

## Let's Connect!

I'd love to hear from you! Feel free to reach out through the contact form or connect with me on social media.

Thanks for reading, and I hope you find the content valuable!
`
      fs.writeFileSync(path.join(postsDirectory, "welcome.mdx"), samplePost)
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
      fileNames
        .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.(mdx|md)$/, "")
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, "utf8")
          const { data, content } = matter(fileContents)

          // Process markdown content
          const processedContent = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)

          return {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            date: data.date || new Date().toISOString().split("T")[0],
            author: data.author || "John Doe",
            tags: data.tags || [],
            readTime: data.readTime || "5 min read",
            content: processedContent.toString(),
          }
        }),
    )

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      author: data.author || "John Doe",
      tags: data.tags || [],
      readTime: data.readTime || "5 min read",
      content: processedContent.toString(),
    }
  } catch (error) {
    console.error("Error reading blog post:", error)
    return null
  }
}
