import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  RefreshCw,
  Link2,
  Code,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  Cpu,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock,
  Building2,
  ShoppingCart,
  Home,
  Briefcase,
  Factory,
  Heart,
  Utensils,
  Film,
  GraduationCap,
  Leaf,
  Phone,
  Mail
} from "lucide-react";

const services = [
  {
    id: "cloud-migration",
    icon: Cloud,
    title: "Cloud Migration",
    description: "Move applications and systems to modern cloud platforms with a controlled, secure, and performance-focused approach."
  },
  {
    id: "app-modernization",
    icon: RefreshCw,
    title: "Application Modernization",
    description: "Upgrade legacy systems to modern architectures for greater agility, maintainability, and security."
  },
  {
    id: "app-integration",
    icon: Link2,
    title: "Application Integration",
    description: "Connect systems, applications, and data across your organization and external partners."
  },
  {
    id: "custom-dev",
    icon: Code,
    title: "Custom Software Development",
    description: "Design and build tailored software solutions aligned to real business workflows."
  },
  {
    id: "data-bi",
    icon: BarChart3,
    title: "Data Engineering & Business Intelligence",
    description: "Transform raw data into dashboards, reports, and actionable insight."
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security services covering assessment, testing, monitoring, and risk reduction."
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development & Modernization",
    description: "High-performance websites and web applications built for scale, usability, and conversion."
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "User-centric mobile applications with strong performance and intuitive design."
  },
  {
    id: "iot",
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description: "Connect devices, process sensor data, and generate real-time intelligence."
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Automate infrastructure and delivery pipelines to ship faster with confidence."
  }
];

const serviceDetails = [
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    overview: "VTSS helps organizations migrate applications and infrastructure to modern cloud environments with minimal disruption and long-term performance in mind.",
    delivers: [
      "Cloud readiness assessment and planning",
      "Architecture design and migration execution",
      "Controlled rollout and optimization",
      "Monitoring and performance tuning",
      "Support for AWS, Microsoft Azure, and Google Cloud"
    ],
    outcomes: [
      "Improved scalability and resilience",
      "Reduced infrastructure overhead",
      "Better visibility into performance and costs"
    ]
  },
  {
    id: "app-modernization",
    title: "Application Modernization",
    overview: "Modernize legacy applications to improve speed, security, and maintainability without disrupting business operations.",
    delivers: [
      "Legacy system assessment",
      "Modernization roadmaps",
      "Refactoring and modularization",
      "Security and performance improvements",
      "Integration with modern platforms"
    ],
    outcomes: [
      "Faster release cycles",
      "Reduced technical debt",
      "Stronger security posture"
    ]
  },
  {
    id: "app-integration",
    title: "Application Integration",
    overview: "VTSS enables seamless data and process integration across internal systems and external partners.",
    delivers: [
      "Enterprise application integration (EAI)",
      "B2B integration using industry standards",
      "API design and enablement",
      "ERP and CRM data synchronization"
    ],
    outcomes: [
      "Fewer manual processes",
      "Reliable data flow",
      "Improved operational visibility"
    ]
  },
  {
    id: "custom-dev",
    title: "Custom Software Development",
    overview: "Custom-built software designed around your workflows, users, and long-term business goals.",
    delivers: [
      "Requirements discovery and solution design",
      "Architecture and development",
      "Quality assurance and testing",
      "Ongoing support and enhancement"
    ],
    outcomes: [
      "Software aligned to real business needs",
      "Higher productivity",
      "Scalable, maintainable platforms"
    ]
  },
  {
    id: "data-bi",
    title: "Data Engineering & Business Intelligence",
    overview: "Turn data into insight with reporting, dashboards, and analytics that support confident decision-making.",
    delivers: [
      "Data integration and consolidation",
      "Data warehousing solutions",
      "Big data pipelines and processing",
      "BI dashboards and visualization tools"
    ],
    outcomes: [
      "Faster access to insights",
      "Consistent, trusted data",
      "Better performance measurement"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    overview: "End-to-end cybersecurity services to identify risk, strengthen defenses, and improve response readiness.",
    delivers: [
      "Penetration testing and security assessments",
      "Threat hunting and compromise assessment",
      "Security architecture review",
      "Vulnerability management",
      "Security operations and analytics support"
    ],
    outcomes: [
      "Reduced attack surface",
      "Clear remediation priorities",
      "Improved security maturity"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development & Modernization",
    overview: "Modern websites and web applications built for usability, performance, and growth.",
    delivers: [
      "Website and web application development",
      "Redesign and modernization",
      "E-commerce platforms",
      "Web portals and APIs",
      "SEO-friendly, secure architectures"
    ],
    outcomes: [
      "Improved user engagement",
      "Higher conversion rates",
      "Easier long-term maintenance"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile Application Development",
    overview: "Mobile applications designed for usability, performance, and adoption.",
    delivers: [
      "Mobile app development",
      "UI/UX design",
      "Performance optimization"
    ],
    outcomes: [
      "Better mobile experiences",
      "Increased adoption",
      "More efficient workflows"
    ]
  },
  {
    id: "iot",
    title: "Internet of Things (IoT)",
    overview: "Connect devices, collect data, and generate real-time insight from IoT ecosystems.",
    delivers: [
      "Device connectivity and gateways",
      "Data ingestion and processing",
      "Analytics and alerting",
      "Cloud-based IoT platforms",
      "Embedded and edge support"
    ],
    outcomes: [
      "Real-time operational insight",
      "Faster anomaly detection",
      "Data-driven optimization"
    ]
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    overview: "Automated delivery pipelines that improve reliability and speed.",
    delivers: [
      "CI/CD pipeline implementation",
      "Infrastructure automation",
      "Monitoring and logging",
      "Release management"
    ],
    outcomes: [
      "Faster, safer deployments",
      "Improved uptime",
      "Reduced deployment risk"
    ]
  }
];

const processSteps = [
  "Plan & Assess",
  "Architecture & Research",
  "Design",
  "Build",
  "Test & Launch",
  "Ongoing Optimization"
];

const engagementModels = [
  { title: "Fixed Cost", description: "Clearly defined scope and budget" },
  { title: "Time & Material", description: "Flexible, iterative delivery" },
  { title: "Managed Services", description: "Fully managed, ongoing support" }
];

const industries = [
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Home, name: "Real Estate" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Heart, name: "Healthcare" },
  { icon: Utensils, name: "Food & Beverage" },
  { icon: Film, name: "Entertainment" },
  { icon: GraduationCap, name: "Education & Research" },
  { icon: Leaf, name: "Agriculture" },
  { icon: Building2, name: "Small & Large Enterprises" },
  { icon: Shield, name: "Insurance" }
];

const CustomSoftware = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Custom Software <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enterprise-grade technology services designed for performance, security, and scalability—delivered by VTSS with proven execution.
            </p>
            <Button variant="hero" size="lg" className="mb-10">
              Talk to an Expert
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">2500+ Projects Delivered</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">99% Client Satisfaction</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">20+ Years of Delivery Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES OVERVIEW GRID */}
      <section className="py-20 relative">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions to power your digital transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className="group p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY VTSS */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why <span className="text-gradient">VTSS</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                VTSS delivers enterprise-grade technology services through a proven execution model focused on reliability, security, and scalability. We design, build, modernize, and manage complex systems across cloud, data, application, and security domains—helping organizations operate efficiently and grow with confidence.
              </p>
              <ul className="space-y-3">
                {[
                  "Platform-agnostic technology delivery",
                  "Enterprise cloud and managed services capability",
                  "Security-first engineering approach",
                  "Global delivery with certified experts",
                  "Scalable engagement models aligned to business needs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2500+", label: "Projects Delivered" },
                { value: "138+", label: "Technology Specialists" },
                { value: "99%", label: "Client Satisfaction Rate" },
                { value: "20+", label: "Years of Experience" }
              ].map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — INDUSTRIES SERVED */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Industries <span className="text-gradient">Served</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <industry.icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-sm text-foreground text-center">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — HOW WE WORK */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Delivery <span className="text-gradient">Approach</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium">
                    {step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-primary mx-2 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Models */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Engagement Models</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {engagementModels.map((model, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">{model.title}</h4>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLIENTS & PARTNERS */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Leading Organizations</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-[3/2] bg-card/50 border border-border rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">Partner {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — SERVICE DEEP DIVES */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Service <span className="text-gradient">Details</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive service offerings in depth
            </p>
          </div>

          <div className="space-y-16">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6">{service.overview}</p>
                        <Button variant="hero" size="default">
                          Discuss This Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-foreground mb-4">What we deliver</h4>
                        <ul className="space-y-2">
                          {service.delivers.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-foreground mb-4">Typical outcomes</h4>
                        <ul className="space-y-2">
                          {service.outcomes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — FINAL CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build <span className="text-gradient">What's Next</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us about your challenge. VTSS will help you plan, deliver, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="hero" size="lg">
                Book a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a href="mailto:info@vtss.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@vtss.com
              </a>
              <a href="tel:5303463054" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (530) 346-3054
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftware;
