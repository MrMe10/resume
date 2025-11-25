import { Mail, Phone, MapPin, Github, ExternalLink, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:austinvas992@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                austinvas992@gmail.com
              </a>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+917829879940" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                +91 7829879940
              </a>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Mangalore, Karnataka</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/MrMe10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group shadow-sm"
              aria-label="Visit GitHub"
            >
              <Github size={20} />
              GitHub
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/austin-vas-5763952b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group shadow-sm"
              aria-label="Visit LinkedIn"
            >
              <Linkedin size={20} />
              LinkedIn
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
