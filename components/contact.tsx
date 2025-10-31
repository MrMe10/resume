import { Mail, Phone, MapPin, Github, ExternalLink, Linkedin } from "lucide-react"  

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground">Let's Work Together</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary-foreground/10 rounded-lg text-center">  
              <Mail
                className="mx-auto mb-3 text-primary-foreground group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-semibold text-primary-foreground mb-1">Email</h3>
              <p className="text-primary-foreground/80 text-sm break-all">austinvas992@gmail.com</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 rounded-lg text-center">
              <Phone className="mx-auto mb-3 text-primary-foreground" size={32} />
              <h3 className="font-semibold text-primary-foreground mb-1">Phone</h3>
              <p className="text-primary-foreground/80 text-sm">+91 7829879940</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 rounded-lg text-center">
              <MapPin className="mx-auto mb-3 text-primary-foreground" size={32} />
              <h3 className="font-semibold text-primary-foreground mb-1">Location</h3>
              <p className="text-primary-foreground/80 text-sm">Mangalore, Karnataka</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/MrMe10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all group"
              aria-label="Visit GitHub"
            >
              <Github size={20} />
              GitHub
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </a>

             <a
              href="https://www.linkedin.com/in/austin-vas-5763952b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all group"
              aria-label="Visit LinkedIn"
            >
              <Linkedin size={20} />
              LinkedIn
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
