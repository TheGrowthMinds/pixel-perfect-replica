import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, Layers, Globe, Smartphone, Server, Users, Link2, Brain, Cpu, Cloud, CheckCircle, Clock, DollarSign } from "lucide-react";
const services = [{
  id: "business-intelligence",
  icon: Database,
  title: "Business Intelligence",
  description: "BI solutions help make sense of data through reports, dashboards or predictions deduced from the data. Most common use cases include enabling self-service reporting, conventional business intelligence solutions, descriptive, predictive and prescriptive analytics and big data implementations.",
  keywords: ["Azure SQL", "Azure Data Factory", "Power BI", "SQL Server", "BigQuery", "Tableau", "Looker", "Spark", "Kafka"],
  who: ["SMEs from all industries that use data to steer their business process", "Challenges around information architecture and data management", "C-level on-demand reporting needs"],
  when: ["New core system installations lead to massive reporting requirements", "Business wants to build their own reports and analytics", "Large databases or diverse data sets"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "1w"
    }, {
      name: "Basic Proof of Concept",
      effort: "2w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Design Review",
      effort: "1w"
    }, {
      name: "Solution Design",
      effort: "2w"
    }, {
      name: "Infrastructure Design",
      effort: "2w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Data Warehouse Implementation",
      effort: "12w"
    }, {
      name: "Dashboard Implementation",
      effort: "1w"
    }]
  }, {
    phase: "Test",
    items: [{
      name: "Data Integrity Testing",
      effort: "2w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Case Based Support",
      effort: "40hr buckets"
    }, {
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}, {
  id: "enterprise-integration",
  icon: Layers,
  title: "Enterprise Integration",
  description: "Application integration solutions help multiple disparate applications connect and talk to each other. These can be applications within an enterprise or with partners. Most common use cases include EDI integrations, regulatory integrations like HIPAA or SWIFT, and transactional integrations.",
  keywords: ["BizTalk", "Logic Apps", "EDI", "HL7", "REST API", "ESB", "FHIR", "SWIFT"],
  who: ["Companies with multiple systems that don't talk to each other", "Retail, Wholesale, Healthcare, Real Estate and High Tech industries", "Mid-sized organizations going through M&A"],
  when: ["Customer wants to automate a business process", "Replacing a key system that needs connections", "Company going through a Merger or Acquisition"],
  benefits: ["Single point of access/Better reporting", "Eliminate Data Silos", "Process automation/Interoperability", "Time and cost savings"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "2d"
    }, {
      name: "Product Selection",
      effort: "1d"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Application Compatibility Analysis",
      effort: "2w"
    }, {
      name: "Solution Design",
      effort: "2w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Cloud EDI Integration",
      effort: "3w"
    }, {
      name: "App to App Integration",
      effort: "1w"
    }]
  }, {
    phase: "Test",
    items: [{
      name: "System Integration Testing",
      effort: "2w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Case Based Support",
      effort: "40hr buckets"
    }]
  }]
}, {
  id: "web-development",
  icon: Globe,
  title: "Web Development",
  description: "Web apps that allow users to access back end data or automate processes. Most common use cases include responsive, cross-platform and eCommerce related applications.",
  keywords: ["HTML", "CSS", "ASP.NET", ".NET Core", "Python", "PHP", "React JS", "Angular JS", "WordPress", "Firebase"],
  who: ["All organizations small or large from all industries", "Use web applications to make systems accessible to customers, partners and employees"],
  when: ["Customer wants a front end to data", "Application that allows data entry, reporting and business rule enforcement"],
  benefits: ["Automate repetitive tasks to save time", "Automate workflows to improve efficiency", "Secure, Scalable and User friendly", "Custom built for your specific business needs"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Discovery Workshop",
      effort: "2d"
    }, {
      name: "Architecture Workshop",
      effort: "1w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Responsive Design Assessment",
      effort: "1w"
    }, {
      name: "Solution Design",
      effort: "2w"
    }, {
      name: "Front End Design",
      effort: "4w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Authentication & Onboarding",
      effort: "2w"
    }, {
      name: "Admin Portal",
      effort: "4w"
    }, {
      name: "Payment Integration",
      effort: "3w"
    }]
  }, {
    phase: "Test",
    items: [{
      name: "Performance Testing",
      effort: "1w"
    }, {
      name: "Mobility Testing",
      effort: "2w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}, {
  id: "mobile-development",
  icon: Smartphone,
  title: "Mobile Development",
  description: "Mobile apps practice enables access to enterprise data on the go. Most common scenarios include custom end-to-end mobile application development, mobile reports and gamification.",
  keywords: ["iPhone", "Android", "React Native", "Flutter", "Xamarin", "AR/VR/Unity"],
  who: ["Tourism - hotels/bookings/tickets", "Healthcare - consultation/appointments", "Restaurants - promotions/orders", "Banking & Fintech for mobile payments"],
  when: ["Customer wants a mobile app on iPhone or Play store"],
  benefits: ["Increased customer visibility", "Improved sales growth and increased customer base", "Start a direct marketing channel", "Cultivate customer loyalty"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Discovery Workshop",
      effort: "2d"
    }, {
      name: "Use Case Analysis",
      effort: "2w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Cross Platform Feasibility",
      effort: "2w"
    }, {
      name: "UX/UI Design",
      effort: "3w"
    }]
  }, {
    phase: "Development",
    items: [{
      name: "Mobile App w/o Auth",
      effort: "3w"
    }, {
      name: "Mobile App with Backend",
      effort: "6w"
    }]
  }, {
    phase: "Test",
    items: [{
      name: "System Integration Testing",
      effort: "2w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}, {
  id: "infrastructure",
  icon: Server,
  title: "Infrastructure Services (SysOps/DevOps/SecOps)",
  description: "Infrastructure teams ensure that the platforms, systems and services running critical applications stay running in a 24x7 cloud enabled world. Common use cases include on-prem migrations to the cloud, Office 365 and Teams rollouts, DBA, Virtualization, Network configurations, Security and Identity Management.",
  keywords: ["GCP", "AWS", "Azure", "Office 365", "Microsoft Teams", "Citrix", "VPN", "Containerization"],
  who: ["SMEs and Enterprises who use technology to run their business", "Companies with online presence/sensitive information", "SaaS vendors looking to keep systems running"],
  when: ["Upgrade large existing infrastructure to the cloud", "High cost of operating infrastructure", "Remote access / work from home needs"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Discovery Workshop",
      effort: "2d"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Azure Migration Assessment",
      effort: "2w"
    }, {
      name: "Solution Design",
      effort: "1w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Migration to Azure",
      effort: "4w"
    }, {
      name: "Office 365 Migration",
      effort: "2w"
    }, {
      name: "Citrix Deployment",
      effort: "4w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Case Based Support",
      effort: "40hr buckets"
    }, {
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}, {
  id: "modern-workplace",
  icon: Users,
  title: "Modern Workplace",
  description: "Modern workplace provides customers a digital office where they can conduct business in a remote ready world. Common use cases include Office 365 rollouts, Telephony integrations, Teams setup, Document Management and Workflow automation.",
  keywords: ["Office 365", "SharePoint", "Power Apps", "Flow", "Enterprise Content Management", "Workflows"],
  who: ["Progressive organizations from all industries", "Organizations with distributed teams", "Companies with collaboration needs"],
  when: ["Large Organization with distributed teams", "Customer has O365 and wants to understand how else the tools can help"],
  benefits: ["Improve productivity and overall job satisfaction", "Improve responsiveness to customers and peers", "Simplify internal processes", "Support mobility & device agnostic"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "2d"
    }, {
      name: "Use Case Analysis",
      effort: "2w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Application Compatibility Analysis",
      effort: "2w"
    }, {
      name: "Solution Design",
      effort: "2w"
    }]
  }, {
    phase: "Development",
    items: [{
      name: "Migrations (On-prem to cloud)",
      effort: "1w"
    }, {
      name: "O365 Process Automation",
      effort: "1w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}, {
  id: "blockchain",
  icon: Link2,
  title: "Blockchain",
  description: "Blockchain and DLT allow customers to build secure and decentralized solutions. Build dApps connected with different types of Blockchains suited for a specific industry vertical or generic Web or Mobile based solutions.",
  keywords: ["Ethereum", "Smart Contracts", "dApps", "Wallets", "Metamask"],
  who: ["Entrepreneurs interested in Emerging Tech", "Banking & Fintech for payments", "Government for publicly available records", "Supply chain for customer and order tracking"],
  when: ["Customer needs a distributed, transparent, autonomous system", "Need an audit trail not having to worry about tampering", "Customers want to build Smart Contracts on Ethereum"],
  benefits: ["Secure - no central point of attack", "Immutable - data tampering not possible", "Complete data and transaction transparency"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "2d"
    }, {
      name: "Use Case Analysis",
      effort: "2w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Solution Design",
      effort: "2w"
    }, {
      name: "dApps Design",
      effort: "2w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Smart Contracts",
      effort: "2w"
    }, {
      name: "Web Apps Integration",
      effort: "2w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}, {
  id: "ml-ai",
  icon: Brain,
  title: "Machine Learning / Artificial Intelligence",
  description: "Want to predict the future? We have deep experience with predictive models across different domains, allowing you to find the best outcome for your organization. Predict trends, automate tasks, and learn the art of applying Data and AI for business-driven results.",
  keywords: ["Machine Learning", "Vertex AI", "BQML", "Neural Networks", "Supervised Learning", "Facial Recognition", "Object Detection"],
  who: ["Manufacturing", "Banking, Finance, Insurance", "E-commerce", "Healthcare", "Retail, Wholesale"],
  when: ["Data intensive business process - need to discover patterns", "Dynamic business landscape - need quick decisions", "Business relies on predicting future trends"],
  benefits: ["Improve Precision of Financial Rules and Models", "Facilitate Accurate Medical Predictions", "Efficient Predictive maintenance", "Better decision making"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "1w"
    }, {
      name: "Business Problem Analysis",
      effort: "2w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Build Candidate Models",
      effort: "4w"
    }, {
      name: "Model Validation & Selection",
      effort: "4w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Language Specific Implementation",
      effort: "4w"
    }, {
      name: "Model Training",
      effort: "4w"
    }]
  }, {
    phase: "Test",
    items: [{
      name: "Prediction and Testing",
      effort: "4w"
    }]
  }]
}, {
  id: "iot",
  icon: Cpu,
  title: "Internet of Things (IoT)",
  description: "Connect devices, ingest data, get data-driven results. VTSS excels at building industry-grade IoT ecosystems. From pipelines that ingest real-time sensor data through scalable storage to targeted, results-driven analysis.",
  keywords: ["Embedded Systems", "GCP IoT Core", "Arduino", "Raspbian", "Azure IoT", "Smart Meters", "Wearables"],
  who: ["Manufacturing, Agriculture, Retail", "Healthcare", "Smart appliances and energy meters", "Connected cars and autonomous factories"],
  when: ["Machine to machine connections are required", "Preemptive support and predictive maintenance needed", "Optimizing supply chain through asset tracking"],
  benefits: ["Access to real-time data", "Ensures safety and productivity", "Real-time process monitoring", "Improved customer experience"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "1w"
    }, {
      name: "Business Problem Analysis",
      effort: "2w"
    }, {
      name: "Complex POC",
      effort: "8-12w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Embedded Design",
      effort: "2w"
    }, {
      name: "Cloud Side Design",
      effort: "1w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Hardware Fabrication",
      effort: "12w"
    }, {
      name: "Firmware Development",
      effort: "12w"
    }, {
      name: "Reporting & Analytics",
      effort: "4w"
    }]
  }]
}, {
  id: "gcp-migration",
  icon: Cloud,
  title: "GCP Data Migration",
  description: "The shift to reduce costs by drifting away from self managed infrastructure and legacy applications is increasing demand for expert Cloud Migration services. Whether it is simple lift-shift or re-architecting apps during migration, our experts make this possible.",
  keywords: ["BigQuery", "CloudSQL", "Cloud Function", "Cloud Run", "GKE", "Cloud Composer"],
  who: ["Medium to big enterprise businesses", "Retail, healthcare, insurance, telecom industries", "Organizations with critical data reliance"],
  when: ["Want to migrate from on-prem or other clouds", "Want Advanced Analytics using BigQuery and Looker", "Leverage ML/AI capabilities of Vertex AI"],
  benefits: ["Legacy apps have become difficult to maintain", "Reduce on-prem infrastructure maintenance costs", "Modernization of apps, serverless, scalability", "Compliance and data-security"],
  phases: [{
    phase: "Define",
    items: [{
      name: "Architecture Workshop",
      effort: "1w"
    }, {
      name: "Basic Proof of Concept",
      effort: "2w"
    }]
  }, {
    phase: "Design",
    items: [{
      name: "Design Review",
      effort: "1w"
    }, {
      name: "Solution Design",
      effort: "2w"
    }]
  }, {
    phase: "Implementation",
    items: [{
      name: "Data Warehouse Implementation",
      effort: "12w"
    }, {
      name: "Database Migration",
      effort: "1w"
    }]
  }, {
    phase: "Support",
    items: [{
      name: "Dedicated FTE Support",
      effort: "0.5 FTE"
    }]
  }]
}];
const teamCapabilities = [{
  name: "Blockchain",
  count: 10
}, {
  name: "Business Intelligence",
  count: 30
}, {
  name: "Sec/Dev/Sys Ops/MSP",
  count: 40
}, {
  name: "Web Development",
  count: 50
}, {
  name: "Application Integration",
  count: 20
}, {
  name: "AI/Machine Learning",
  count: 15
}, {
  name: "Mobile App",
  count: 18
}, {
  name: "Quality Assurance",
  count: 15
}, {
  name: "Internet of Things",
  count: 20
}];
const CustomSoftware = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 my-[69px]">Custom Software
Services Catalog</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed my-[85px]">
              VTSS Consultants provides industry-leading experts and delivery excellence across a wide array of technologies. 
              Our engineers provide expertise in Enterprise Integration, Data engineering, AI, ML, Blockchain, Web/mobile development, 
              AR/VR, Infrastructure services, Modern workspace, IoT and much more.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
                <Clock className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">On Time</div>
                  <div className="font-semibold text-foreground">Delivery</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
                <DollarSign className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Competitive</div>
                  <div className="font-semibold text-foreground">Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VTSS Section */}
      <section className="py-16 bg-card/50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why VTSS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Access to a global talent pool", "Reliable consistent delivery", "Experienced, seamless project delivery", "24x7 highly available teams", "Large enough to scale, small enough to care"].map((item, index) => <div key={index} className="flex items-center gap-3 bg-background border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => <section key={service.id} id={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-card/30'}`}>
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Keywords */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword, i) => <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {keyword}
                    </span>)}
                </div>
              </div>

              {/* Who & When Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Who uses this most often</h3>
                  <ul className="space-y-2">
                    {service.who.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">When should you reach out?</h3>
                  <ul className="space-y-2">
                    {service.when.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>

              {/* Benefits if available */}
              {service.benefits && <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Why choose this service?</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => <div key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>)}
                  </div>
                </div>}

              {/* Phases Table */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="bg-primary/10 px-6 py-3 border-b border-border">
                  <h3 className="font-semibold text-foreground">Service Offerings & Typical Work Effort</h3>
                </div>
                <div className="divide-y divide-border">
                  {service.phases.map((phase, i) => <div key={i} className="px-6 py-4">
                      <div className="font-medium text-primary mb-2">{phase.phase}</div>
                      <div className="space-y-2">
                        {phase.items.map((item, j) => <div key={j} className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">{item.name}</span>
                            <span className="text-foreground font-medium bg-secondary px-2 py-1 rounded">{item.effort}</span>
                          </div>)}
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>)}

      {/* Team Capabilities */}
      <section className="py-16 bg-primary/5">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Team Members & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {teamCapabilities.map((cap, index) => <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{cap.count}</div>
                <div className="text-sm text-muted-foreground">{cap.name}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us for More Information</h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your business with custom software solutions? Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5303463054" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Call (530) 346-3054
              </a>
              <a href="mailto:lyle.vanhorn@vtssinc.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-lg font-medium hover:bg-secondary transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CustomSoftware;