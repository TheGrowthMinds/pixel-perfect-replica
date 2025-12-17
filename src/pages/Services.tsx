import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Cable,
  Shield,
  Monitor,
  BadgeCheck,
  Phone,
  Video,
  Server,
  Network,
  HardDrive,
  ArrowRight,
  PhoneCall
} from "lucide-react";

const services = [
  {
    icon: Cable,
    title: "Network Cabling Installation",
    description: "Install network cabling, the backbone of your digital infrastructure. Professional structured cabling solutions for reliable connectivity."
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Security is paramount. Industry-leading practices including firewall harmonization, intrusion detection, audits, and vulnerability assessments."
  },
  {
    icon: Monitor,
    title: "24/7 Monitoring & Support",
    description: "Vigilant monitoring systems harmonize with your infrastructure, preemptively addressing issues. Support available around the clock."
  },
  {
    icon: BadgeCheck,
    title: "Licensed Contractor Services",
    description: "Contractor License #1049159. Our licensed status underscores adherence to standards, regulations, and ethics with skilled professionals."
  },
  {
    icon: Phone,
    title: "VoIP Implementation",
    description: "Experience seamless integration of voice services over the digital realm—crystal-clear conversations, reduced costs, and streamlined communication."
  },
  {
    icon: Video,
    title: "Audio & Video Installation",
    description: "Specialists compose setups resonating with audiovisual excellence, enriching internal and external communications."
  },
  {
    icon: Server,
    title: "Server Configuration",
    description: "Craft an opus of optimization and precision. Resources orchestrated harmoniously, ensuring an ensemble adeptly handling your business needs."
  },
  {
    icon: Network,
    title: "Network Setup",
    description: "From LANs to WANs and VPNs, ensure seamless communication and data flow with a harmonious network resonating with your business's tempo."
  },
  {
    icon: HardDrive,
    title: "New Hardware Installation",
    description: "Integrate novel hardware into your digital tableau with precision. Minimize disruptions while maximizing performance and security."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm text-muted-foreground">VTSS DataComm</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Network Installation &{" "}
              <span className="text-gradient">Management Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Sacramento, Yuba City, Oroville, & Chico CA
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert attention and quick competitive bids for your IT installation projects.
              No long-term contracts and no monthly fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:5303463054">
                <Button variant="heroOutline" size="lg" className="group">
                  <PhoneCall className="mr-2 w-4 h-4" />
                  (530) 346-3054
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Where your IT installation projects receive expert attention and quick competitive bids
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Do You Have an <span className="text-gradient">Upcoming Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a time to talk with a Project Manager about your project.
              We'll provide a fast, competitive quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="tel:5303463054">
                <Button variant="hero" size="lg">
                  <PhoneCall className="mr-2 w-4 h-4" />
                  Call (530) 346-3054
                </Button>
              </a>
              <a href="tel:8557378877">
                <Button variant="heroOutline" size="lg">
                  Toll Free (855) 737-8877
                </Button>
              </a>
            </div>
            <p className="text-muted-foreground">
              A Project Manager will contact you immediately upon receipt
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
