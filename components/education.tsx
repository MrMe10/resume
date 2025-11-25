import { Calendar, MapPin, BookOpen, Award } from "lucide-react"

const education = [
  {
    school: "St Aloysius College",
    degree: "Bachelor of Computer Applications",
    period: "2023 - 2026",
    location: "Mangalore, Karnataka",
    current: true,
  },
  {
    school: "St Aloysius Pre-University College",
    degree: "Pre-University College (CSBA)",
    period: "2021 - 2023",
    location: "Mangalore, Karnataka",
  },
  {
    school: "Mount Carmel Central School",
    degree: "Schooling",
    period: "2014 - 2021",
    location: "Mangalore, Karnataka",
  },
  {
    school: "Carmel School",
    degree: "Schooling",
    period: "2009 - 2014",
    location: "Kuwait",
  },
]

const certificates = ["Certificate of Graphic Designing - CTTI", "Course on AI Fusion", "Course in PowerBI"]

export function Education() {
  return (
    <section id="education" className="py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My academic journey and professional development through certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="text-primary" size={24} />
              </div>
              Education
            </h3>
            <div className="space-y-8 relative pl-2">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-border"></div>

              {education.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className={`absolute left-[4px] top-2 w-4 h-4 rounded-full border-4 border-background ${item.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`}></div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.degree}</h4>
                    <p className="text-primary font-medium">{item.school}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="text-primary" size={24} />
              </div>
              Certifications & Achievements
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <p className="font-semibold text-foreground">{cert}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Notable Achievements</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm mt-0.5">1</span>
                  <span className="text-muted-foreground">Running a 5km marathon at the NPMA golden Jubilee 10k run</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm mt-0.5">2</span>
                  <span className="text-muted-foreground">Volunteered at BNI Bing Brands Expo 2024 in Mangaluru</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm mt-0.5">3</span>
                  <span className="text-muted-foreground">Active participant in seminars, competitions, and sports events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
