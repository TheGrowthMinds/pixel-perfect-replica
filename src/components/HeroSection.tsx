import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroTeamImage from "@/assets/hero-team.jpg";

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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroTeamImage} 
                alt="Team collaboration in modern office" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
