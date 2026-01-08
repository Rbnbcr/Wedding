import { Quote } from "lucide-react";

const AdviceSection = () => {
  return (
    <section id="advice" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Quote className="w-8 h-8 text-sage rotate-180" />
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          Words of Wisdom
        </h2>
        
        <div className="divider-ornament">
          <span className="text-champagne">✦</span>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
            "The best thing to hold onto in life is each other."
          </p>
          
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            As we embark on this beautiful journey together, we kindly ask for your 
            blessings, love, and perhaps a piece of advice for a happy marriage. 
            Whether it's a secret recipe for resolving disagreements, a travel 
            destination that brought you closer, or simply words that have guided 
            your own love story — we would be honored to hear from you.
          </p>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-sm text-muted-foreground italic">
              Share your advice with us at the reception — we'll have special cards 
              waiting for your wisdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
