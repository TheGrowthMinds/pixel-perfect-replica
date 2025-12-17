import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Server, Wifi } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-float animation-delay-200" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Trusted IT Partner Since 2005</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Network
                <span className="block text-gradient">Security Partner</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-100">
              We remove the day-to-day stress of managing your IT infrastructure, freeing you up to do what you do best — run your business with confidence.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-200">
              <Button variant="hero" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in animation-delay-300">
              <div>
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">A+</div>
                <div className="text-sm text-muted-foreground">BBB Rating</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 glow-primary">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Server, label: "Server Management" },
                    { icon: Wifi, label: "Network Solutions" },
                    { icon: Shield, label: "Cybersecurity" },
                    { icon: Server, label: "Cloud Services" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="mt-6 flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">All systems operational</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary rounded-xl p-4 shadow-lg shadow-primary/30 animate-float">
                <div className="text-primary-foreground text-sm font-semibold">Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
