import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6">
          We're getting married
        </p>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4">
          Emma & James
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="h-px w-16 md:w-24 bg-champagne" />
          <span className="font-heading text-2xl md:text-3xl italic text-sage">♥</span>
          <span className="h-px w-16 md:w-24 bg-champagne" />
        </div>
        
        <p className="font-heading text-xl md:text-2xl lg:text-3xl italic text-foreground/80">
          June 15, 2026
        </p>
        
        <p className="font-body text-sm md:text-base text-muted-foreground mt-4 tracking-wide">
          The Garden Estate, Tuscany
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-sage/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
