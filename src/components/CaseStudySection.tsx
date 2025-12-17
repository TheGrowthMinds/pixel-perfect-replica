import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "VTSS helped stabilize our IT and eliminated constant disruptions.",
    author: "Client Testimonial"
  },
  {
    quote: "We finally have confidence that our systems are handled.",
    author: "Client Testimonial"
  },
  {
    quote: "Reliable, responsive, and proactive support.",
    author: "Client Testimonial"
  }
];

const CaseStudySection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Case Study & <span className="text-gradient">Testimonials</span>
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
              <p className="text-muted-foreground text-lg">Case Study Video Placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">Video content coming soon</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
