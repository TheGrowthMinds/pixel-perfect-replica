import {
  Recycle,
  TrendingUp,
  Users,
  Gauge,
  MessageSquare,
  FileText,
  Award,
  ShieldCheck
} from "lucide-react";

const consultingServices = [
  { icon: Recycle, label: "Lifecycle Management" },
  { icon: TrendingUp, label: "Quality Improvement" },
  { icon: Users, label: "Customer Experience" },
  { icon: Gauge, label: "Operation Efficiency" },
  { icon: MessageSquare, label: "Communications" },
  { icon: FileText, label: "Documentation Management" },
];

const credentials = [
  "License: #1049159",
  "SMPTE - Sacramento Section Member",
  "CA DOJ, Criminal Justice Info Services Security",
  "MAG Technology - Security Management System",
  "Symmetry - M2150 Series Hardware",
  "OSHA 60 Training - Confined Space, Fall Protection",
  "BBB - A+ Rating",
];

const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Consulting Services */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm text-muted-foreground">VTSS Consulting</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Expert <span className="text-gradient">Consulting</span> Services
              </h2>

              <p className="text-lg text-muted-foreground">
                VTSS Consulting offers expert advice and implementation for operations and engineering. Our specialists can help you operate lean and efficient.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {consultingServices.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{service.label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Talk to us about your rough spots. Our consultants will work to expose and repair your processes for more efficient operations.
            </p>
          </div>

          {/* Credentials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Credentials</h3>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 space-y-3">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">A+</div>
              <div className="text-sm text-muted-foreground">BBB Accredited Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
