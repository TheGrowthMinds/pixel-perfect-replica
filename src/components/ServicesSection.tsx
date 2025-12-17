import {
  Monitor,
  Shield,
  Server,
  Wifi,
  Phone,
  Camera,
  Mail,
  HardDrive,
  Network,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "24/7 Performance Monitoring",
    description: "Round-the-clock monitoring of your entire IT infrastructure to ensure optimal performance."
  },
  {
    icon: Settings,
    title: "Proactive Maintenance",
    description: "Prevent issues before they happen with regular system updates and maintenance."
  },
  {
    icon: Server,
    title: "Remote & Onsite Support",
    description: "Expert support for all servers, desktops, and laptops — wherever you need us."
  },
  {
    icon: Shield,
    title: "Anti-virus & Security",
    description: "Comprehensive deployment and management of enterprise-grade security solutions."
  },
  {
    icon: HardDrive,
    title: "Managed Backup",
    description: "Secure, automated backup solutions to protect your critical business data."
  },
  {
    icon: Mail,
    title: "Email Protection",
    description: "Advanced email security and management to keep your communications safe."
  },
  {
    icon: Network,
    title: "Failover Solutions",
    description: "Secondary network solutions to ensure your business never goes offline."
  },
  {
    icon: Wifi,
    title: "Network Monitoring",
    description: "Continuous network surveillance to detect and resolve issues instantly."
  },
  {
    icon: Phone,
    title: "VoIP Deployment",
    description: "Modern phone system installation, configuration, and ongoing maintenance."
  },
  {
    icon: Camera,
    title: "CCTV Security Systems",
    description: "Security camera installation and support to protect your premises."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What's <span className="text-gradient">Included</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT management so you can focus on running your business with peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-2">All managed for you, so you can do your job with peace of mind.</p>
          <p className="text-foreground">
            Call <a href="tel:5303463054" className="text-primary font-semibold hover:underline">(530) 346-3054</a> or Toll Free{" "}
            <a href="tel:8557378877" className="text-primary font-semibold hover:underline">(855) 737-8877</a> for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
