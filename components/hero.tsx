"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Divine_Enyabine_CV.pdf"
    link.download = "Divine_Enyabine_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:divineenyabine2019@gmail.com?subject=Let's Work Together"
  }

  const handleGithubClick = () => {
    window.open("https://github.com/Dee-prodigyy", "_blank")
  }

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/divine-enyabine-73a45a378/ ", "_blank")
  }

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Hi, I'm <span className="text-accent">Divine Enyabine</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">Software Developer</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
              I create beautiful, functional web applications using modern technologies. Passionate about clean code,
              user experience, and solving complex problems with elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={handleGetInTouch}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="ghost" size="sm" onClick={handleGithubClick}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLinkedinClick}>
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <img
                  src="/portfolio.jpg"
                  alt="Divine Enyabine"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
