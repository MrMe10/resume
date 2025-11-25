"use client"
import Image from "next/image"
import { ExternalLink, ArrowUpRight } from "lucide-react"
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
      className="inline-flex items-center justify-center p-4"
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
        className="rounded-xl object-cover"
      />

      <div className="text-left">
        <div className="text-2xl font-bold text-black">Noneya</div>
        <div className="text-sm text-black/70">AI Stock Market Assistant</div>
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
        className="rounded-xl object-cover"
      />

      <div className="text-left">
        <div className="text-2xl font-bold text-black">Alumni Connect</div>
        <div className="text-sm text-black/70">Community & Networking</div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 opacity-20 blur-[100px]"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects I've built using modern web technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={
                  index === 1 || index === 2
                    ? "bg-white h-64 flex items-center justify-center p-8 border-b border-border/50 relative overflow-hidden"
                    : "bg-gradient-to-br from-zinc-900 to-zinc-800 h-64 flex items-center justify-center p-8 border-b border-border/50 relative overflow-hidden"
                }
              >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

                <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                  {project.title === "Easyfolio" ? (
                    <EasyfolioLogo />
                  ) : index === 1 ? (
                    <NoneyaLogo />
                  ) : index === 2 ? (
                    <AlumniLogo />
                  ) : (
                    <h3 className="text-3xl font-bold text-primary-foreground">{project.title}</h3>
                  )}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Visit Project
                    <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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