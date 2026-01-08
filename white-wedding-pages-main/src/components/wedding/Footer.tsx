const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">
          Emma & James
        </h2>
        
        <p className="font-heading text-xl italic text-background/80 mb-6">
          June 15, 2026
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-champagne/50" />
          <span className="text-champagne">♥</span>
          <span className="h-px w-16 bg-champagne/50" />
        </div>
        
        <p className="font-body text-sm text-background/60">
          We can't wait to celebrate with you!
        </p>
        
        <p className="font-body text-xs text-background/40 mt-8">
          Made with love
        </p>
      </div>
    </footer>
  );
};

export default Footer;
