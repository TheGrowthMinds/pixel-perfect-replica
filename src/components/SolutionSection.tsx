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
    <section className="py-24 relative overflow-hidden bg-primary/5">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Solution to Your <span className="text-gradient">IT Struggles</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`flex items-start gap-6 p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all ${
                index % 2 === 1 ? 'flex-row-reverse text-right' : ''
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
