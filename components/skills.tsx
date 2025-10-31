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
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Skills & Expertise</h2>
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
                className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/15 text-accent rounded-full text-sm font-medium">
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
