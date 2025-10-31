// ...existing code...
"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

export function Hero() {
  const email = "austinvas992@gmail.com"
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement("textarea")
      el.value = email
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-b from-primary to-background px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-primary-foreground">Austin Neil Vas</h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80">Software Developer & Full-Stack Enthusiast</p>
        </div>

        <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          I build beautiful, user-friendly applications using React, Next.js, and modern web technologies. Passionate
          about creating seamless experiences and exploring artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all group"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Get in Touch
          </a>
        </div>

        <div className="relative">
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/MrMe10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 text-primary-foreground rounded-lg hover:bg-primary-foreground/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                copyEmail()
              }}
              className="p-3 bg-primary-foreground/10 text-primary-foreground rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              aria-label={copied ? "Email copied to clipboard" : "Copy email"}
              title={copied ? "Copied!" : "Copy email"}
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/austin-vas-5763952b5/"
              className="p-3 bg-primary-foreground/10 text-primary-foreground rounded-lg hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* visual toast/tooltip */}
          {copied && (
            <div
              role="status"
              aria-live="polite"
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-background text-sm px-3 py-1 rounded shadow-md"
            >
              Copied!
            </div>
          )}

          {/* screen-reader live region (keeps announcement when not visible) */}
          <div aria-live="polite" className="sr-only">
            {copied ? "Email copied to clipboard" : ""}
          </div>
        </div>
      </div>
    </section>
  )
}
// ...existing code...