import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  GitBranch,
  Layers,
  FileCode,
} from "lucide-react"

const skills = [
  { name: "React/Next.js", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Layers },
  { name: "Git/GitHub", icon: GitBranch },
  { name: "Vue.js", icon: Globe },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#D0F4EA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-[#141B41] max-w-2xl mx-auto text-pretty">
            Technologies and tools I use to build robust, scalable applications from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconComponent className="h-8 w-8 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-300 mb-3" />
                <span className="text-sm font-medium text-center text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
