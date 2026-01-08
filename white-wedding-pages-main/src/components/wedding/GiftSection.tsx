import { Gift, Heart, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const GiftSection = () => {
  return (
    <section id="gift" className="section-padding bg-champagne-light">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gift className="w-8 h-8 text-champagne" />
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          Honeymoon Fund
        </h2>
        
        <div className="divider-ornament">
          <span className="text-champagne">✦</span>
        </div>
        
        <div className="space-y-6 mb-8">
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            Your presence at our wedding is the greatest gift we could ask for. 
            However, if you wish to honor us with a gift, we would be grateful 
            for a contribution to our honeymoon fund.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sage">
            <Plane className="w-5 h-5" />
            <span className="font-heading text-xl italic">
              Dreaming of the Maldives
            </span>
          </div>
          
          <p className="font-body text-sm text-muted-foreground">
            Your generosity will help us create unforgettable memories 
            as we begin our new chapter together.
          </p>
        </div>
        
        <Button
          className="bg-champagne text-charcoal hover:bg-champagne/90 font-body px-8 py-6 text-base transition-all duration-300 hover:scale-105"
          onClick={() => window.open('https://paypal.me/yourpaypallink', '_blank')}
        >
          <Heart className="w-4 h-4 mr-2" />
          Contribute via PayPal
        </Button>
        
        <p className="font-body text-xs text-muted-foreground mt-4">
          You'll be redirected to PayPal to complete your contribution
        </p>
      </div>
    </section>
  );
};

export default GiftSection;
