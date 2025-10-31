"use client"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import React from "react"

const projects = [
  {
    title: "Easyfolio",
    description: "Job and policy seeking application connecting employers to employees and clients to policies.",
    technologies: ["Supabase", "Next.js", "Shadcn"],
    links: {
      demo: "https://easy-folio-sandy.vercel.app/",
    },
  },
  {
    title: "Noneya - AI Stock Market Assistant",
    description:
      "An AI-powered tool designed to aid beginners in navigating the stock market with insights and recommendations.",
    technologies: ["Supabase", "Next.js", "Shadcn"],
    links: {
      demo: "https://noneya.vercel.app/ ",
    },
  },
  {
    title: "Alumni Connect",
    description: "A social platform enabling alumni to maintain connections with their school and college communities.",
    technologies: ["Supabase", "Next.js", "Shadcn"],
    links: {
      demo: "https://aloymni.vercel.app/",
    },
  },
]

function EasyfolioLogo() {
  return (
    <div
      role="img"
      aria-label="Easyfolio logo"
      className="bg-black rounded-md inline-flex items-center justify-center p-2"
      style={{ minWidth: 220 }}
    >
      <div className="text-3xl font-bold text-white">
        <span className="text-yellow-600">Easy</span>Folio
      </div>
    </div>
  )
}

function NoneyaLogo() {
  return (
    <div
      role="img"
      aria-label="Noneya logo"
      className="inline-flex items-center gap-4"
      style={{ minWidth: 220 }}
    >
      <Image
        src="/images/noneya.png"
        alt="Noneya logo"
        width={80}
        height={80}
        className="rounded-lg object-cover "
      />

      <div className="text-left">
        <div className="text-2xl font-bold text-black">Noneya</div>
        <div className="text-sm text-black">AI Stock Market Assistant</div>
      </div>
    </div>
  )
}

function AlumniLogo() {
  return (
    <div
      role="img"
      aria-label="Alumni Connect logo"
      className="inline-flex items-center gap-4"
      style={{ minWidth: 220 }}
    >
      <Image
        src="/images/alumni.png"
        alt="Alumni Connect logo"
        width={80}
        height={80}
        className="rounded-lg object-cover "
      />

      <div className="text-left">
        <div className="text-2xl font-bold text-black">Alumni Connect</div>
        <div className="text-sm text-black">Community & Networking</div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects I've built using modern web technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className={
                  index === 1 || index === 2
                    ? "bg-white h-48 flex items-center justify-center p-8 border-1"
                    : "bg-gradient-to-br from-primary to-primary/50 h-48 flex items-center justify-center p-8 border-1"
                }
              >
                <div className="text-center">
                  {project.title === "Easyfolio" ? (
                    <EasyfolioLogo />
                  ) : index === 1 ? (
                    <NoneyaLogo />
                  ) : index === 2 ? (
                    <AlumniLogo />
                  ) : (
                    <h3 className="text-2xl font-bold text-primary-foreground">{project.title}</h3>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-card-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}