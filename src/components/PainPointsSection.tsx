import { AlertCircle, HelpCircle, Clock, Moon } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "IT Problems Keep Interrupting Your Workday",
    description: "Are small tech issues constantly pulling you and your team out of focus and slowing down real work?"
  },
  {
    icon: HelpCircle,
    title: "You Never Know Who to Call When Something Breaks",
    description: "Are you stuck relying on one internal person or a random freelancer when systems go down?"
  },
  {
    icon: Clock,
    title: "Downtime Costs You Time, Money, and Trust",
    description: "Do outages and recurring issues keep impacting deadlines, revenue, or how professional your business looks?"
  },
  {
    icon: Moon,
    title: "Problems Don't Wait for Business Hours",
    description: "Are you left exposed when something goes wrong at night, on weekends, or during critical moments?"
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Do these <span className="text-gradient">hit Home?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
