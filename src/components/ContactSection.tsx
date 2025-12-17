import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm text-muted-foreground">Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your IT?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us for a free consultation and learn how we can help secure and optimize your business technology.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a
              href="tel:5303463054"
              className="group p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Local</div>
              <div className="font-semibold text-foreground">(530) 346-3054</div>
            </a>

            <a
              href="tel:8557378877"
              className="group p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Toll Free</div>
              <div className="font-semibold text-foreground">(855) 737-8877</div>
            </a>

            <a
              href="mailto:contact@vtssinc.com"
              className="group p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Email</div>
              <div className="font-semibold text-foreground">Contact Us</div>
            </a>

            <div className="p-6 bg-card/50 border border-border rounded-xl text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Support</div>
              <div className="font-semibold text-foreground">24/7 Available</div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 text-center glow-sm">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Serving Sacramento, Yuba City, Oroville, & Chico CA</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Schedule Your Free Consultation
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We'll give you a free estimate and put together a solid proposal for you. Once we have your approval, we'll get to work!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                Contact Us Now
              </Button>
              <Button variant="heroOutline" size="xl">
                Request Task Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
