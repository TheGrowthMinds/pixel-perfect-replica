import { CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const expertiseAreas = [
  "Internet Service Provider (ISP)",
  "Managed Service Provider (MSP)",
  "VoIP & PBX products and services",
  "Telephone and data system installations",
  "Cloud-based and on-site servers",
  "Broadband services",
  "Low-voltage cabling",
  "Data Failover Circuits",
  "Communications installations",
  "Systems integration",
  "Data networking",
  "Firewall monitoring",
  "Engineering support",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Northern California & Western Nevada</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Your Communications
                <span className="block text-gradient">Partners</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">
              VTSS Inc., the parent corporation for VTSS DataComm and VTSS Consulting, is dedicated to providing quality personal services to our clients in Northern California and Western Nevada.
            </p>

            <p className="text-muted-foreground">
              When you work with VTSS DataComm, you're not just getting a service provider; you're getting a partner. Our consultants work closely with our clients to understand their communications, connectivity, and data needs.
            </p>

            <div className="flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">25+</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Years of Experience</div>
                <div className="text-sm text-muted-foreground">Serving Sacramento, Yuba City, Oroville, & Chico CA</div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Request Free Estimate
            </Button>
          </div>

          {/* Right Content - Expertise List */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Our Expertise</h3>
            <div className="grid gap-3">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
