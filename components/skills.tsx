import { Code2, Lightbulb, Users, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    skills: ["JavaScript", "Python", "React", "Next.js", "HTML & CSS", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Tools & Libraries",
    icon: Zap,
    skills: ["Shadcn/ui", "Supabase", "Bootstrap", "Git & GitHub", "VS Code"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Project Management",
      "Leadership",
      "Teamwork",
      "Communication",
      "Critical Thinking",
      "Time Management",
      "Public Relations",
    ],
  },
  {
    title: "Interests",
    icon: Lightbulb,
    skills: ["Artificial Intelligence", "Web Development", "UI/UX Design", "Problem Solving"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical abilities and professional competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border/50 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
