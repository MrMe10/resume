"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const email = "austinvas992@gmail.com"
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    setMounted(true)
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

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
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-background px-4 pt-16 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className={`max-w-4xl mx-auto text-center space-y-8 relative z-10 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full animate-in fade-in zoom-in duration-500 delay-100">
            Available for work
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Austin Neil Vas
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light h-10">
            {text}<span className="animate-pulse text-primary">|</span> & <span className="text-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-backwards">Full-Stack Enthusiast</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-backwards">
          I build beautiful, user-friendly applications using React, Next.js, and modern web technologies. Passionate
          about creating seamless experiences and exploring artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-backwards">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 group"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-border bg-background/50 backdrop-blur-sm text-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-backwards">
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/MrMe10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-all duration-300 hover:scale-110"
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
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer relative"
              aria-label={copied ? "Email copied to clipboard" : "Copy email"}
            >
              <Mail size={24} />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded shadow-lg animate-in fade-in zoom-in duration-200">
                  Copied!
                </span>
              )}
            </a>
            <a
              href="https://www.linkedin.com/in/austin-vas-5763952b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
        <ChevronDown size={32} />
      </div>
    </section>
  )
}