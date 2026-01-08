import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RSVPSection = () => {
  return (
    <section id="rsvp" className="section-padding bg-sage-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          RSVP
        </h2>
        
        <div className="divider-ornament">
          <span className="text-champagne">✦</span>
        </div>
        
        <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
          We would be delighted to have you celebrate with us. 
          Please let us know if you can join our special day.
        </p>
        
        <p className="font-body text-sm text-muted-foreground mb-8">
          Kindly respond by <span className="font-semibold text-foreground">May 1, 2026</span>
        </p>
        
        <div className="bg-background border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 text-sage" />
            <span className="font-heading text-xl text-foreground">Confirm Your Attendance</span>
          </div>
          
          <p className="font-body text-sm text-muted-foreground mb-8">
            Click the button below to fill out our RSVP form and let us know 
            your dietary preferences and any special requirements.
          </p>
          
          <Button
            size="lg"
            className="bg-sage text-primary-foreground hover:bg-sage/90 font-body px-10 py-6 text-base transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://forms.google.com/your-rsvp-form', '_blank')}
          >
            <Send className="w-4 h-4 mr-2" />
            RSVP Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
