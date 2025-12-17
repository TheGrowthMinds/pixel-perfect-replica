import { User } from "lucide-react";

const MeetTheLeaderSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient">Leader</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Portrait Placeholder */}
          <div className="flex justify-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl w-80 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <p className="text-muted-foreground">Lyle Vanhorn</p>
                <p className="text-sm text-muted-foreground mt-1">Portrait Placeholder</p>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Lyle brings over four decades of hands-on experience in technology and more than 22 years as a broadcast engineer. In environments where clients invest billions in advertising, failure is not an option and precision is mandatory.
            </p>
            <p className="text-lg text-muted-foreground">
              That same standard carries into our work today. As your IT partner, Lyle leads with a commitment to quality, honesty, reliability, and complete transparency in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheLeaderSection;
