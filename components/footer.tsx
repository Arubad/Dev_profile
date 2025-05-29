import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Arush Badhe</h3>
            <p className="text-muted-foreground mb-4">
              Aspiring AIML engineer passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Arubad" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/arush-badhe-56243325b/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://x.com/Arush_1050" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="mailto:arushbadhe@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-primary">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-muted-foreground mb-2">Pune, Maharashtra</p>
            <p className="text-muted-foreground mb-2">arushbadhe@gmail.com</p>
            <p className="text-muted-foreground">+91 7820965159</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Arush Badhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
