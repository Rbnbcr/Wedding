import { Phone, Mail, MapPin } from "lucide-react";

const HostInfo = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          Get in Touch
        </h2>
        
        <div className="divider-ornament">
          <span className="text-champagne">✦</span>
        </div>
        
        <p className="font-body text-muted-foreground text-base mb-12">
          For any questions or assistance, please don't hesitate to reach out
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bride's Family */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="font-heading text-2xl text-foreground mb-2">Bride's Family</h3>
            <p className="font-body text-champagne mb-6">The Johnsons</p>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">Mother of the Bride</p>
                  <a href="tel:+1234567890" className="font-body text-foreground hover:text-sage transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage flex-shrink-0" />
                <a href="mailto:johnsons@example.com" className="font-body text-foreground hover:text-sage transition-colors">
                  johnsons@example.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Groom's Family */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="font-heading text-2xl text-foreground mb-2">Groom's Family</h3>
            <p className="font-body text-champagne mb-6">The Smiths</p>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">Father of the Groom</p>
                  <a href="tel:+1234567891" className="font-body text-foreground hover:text-sage transition-colors">
                    +1 (234) 567-891
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage flex-shrink-0" />
                <a href="mailto:smiths@example.com" className="font-body text-foreground hover:text-sage transition-colors">
                  smiths@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Venue Info */}
        <div className="mt-12 bg-champagne-light border border-champagne/30 rounded-lg p-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-champagne" />
            <h3 className="font-heading text-2xl text-foreground">Venue</h3>
          </div>
          
          <p className="font-heading text-xl text-sage mb-2">The Garden Estate</p>
          <p className="font-body text-muted-foreground">
            Via delle Rose, 123<br />
            53045 Montepulciano, Tuscany, Italy
          </p>
          
          <a 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-body text-sm text-sage hover:underline"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HostInfo;
