import { Calendar, MapPin, BookOpen } from "lucide-react"

const education = [
  {
    school: "St Aloysius College",
    degree: "Bachelor of Computer Applications",
    period: "2023 - 2026",
    location: "Mangalore, Karnataka",
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
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My academic journey and professional development through certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="text-accent" size={28} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-accent pl-6 pb-4">
                  <h4 className="text-lg font-semibold text-foreground">{item.degree}</h4>
                  <p className="text-accent font-medium">{item.school}</p>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            <div className="space-y-3">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <p className="font-medium text-foreground">{cert}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Notable Achievements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  Running a 5km marathon at the NPMA golden Jubilee 10k run 
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  Volunteered at BNI Bing Brands Expo 2024 in Mangaluru
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  Active participant in seminars, competitions, and sports events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
