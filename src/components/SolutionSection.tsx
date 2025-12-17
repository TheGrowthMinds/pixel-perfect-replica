import { Settings, Users, Shield, Headphones } from "lucide-react";

const solutions = [
  {
    icon: Settings,
    title: "IT That Runs Quietly in the Background",
    description: "We handle the day-to-day issues before they interrupt your work, so technology supports your business instead of slowing it down."
  },
  {
    icon: Users,
    title: "One Reliable Partner Instead of Guesswork",
    description: "You get a single, accountable IT partner who knows your business and takes full ownership. No finger-pointing. No bouncing between vendors."
  },
  {
    icon: Shield,
    title: "Proactive Care That Prevents Costly Disruptions",
    description: "We focus on preventing problems, not reacting to them. Fewer surprises, less downtime, and a more stable environment for your team."
  },
  {
    icon: Headphones,
    title: "Support When You Actually Need It",
    description: "When something happens after hours, you're not left alone. We're there to respond, resolve, and keep your business moving."
  }
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Solution to Your <span className="text-gradient">IT Struggles</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
