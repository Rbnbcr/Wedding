const OurStory = () => {
  return (
    <section id="our-story" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          Our Story
        </h2>
        
        <div className="divider-ornament">
          <span className="text-champagne">✦</span>
        </div>
        
        <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
          <p>
            Our paths first crossed on a rainy autumn evening in 2019, at a small coffee shop 
            tucked away in the heart of the city. What started as a chance encounter over a 
            shared table and two cups of chamomile tea blossomed into something neither of us 
            expected.
          </p>
          
          <p>
            From late-night conversations under starlit skies to adventures across distant lands, 
            we've built a love story written in sunsets and laughter. Every moment together has 
            been a reminder that the best things in life are worth waiting for.
          </p>
          
          <p>
            After five beautiful years of growing together, exploring the world hand in hand, 
            and dreaming of our future, we're ready to begin our greatest adventure yet — 
            a lifetime together.
          </p>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="font-heading text-4xl text-sage">2019</p>
            <p className="font-body text-sm text-muted-foreground mt-1">We Met</p>
          </div>
          <span className="h-px w-12 bg-champagne" />
          <div className="text-center">
            <p className="font-heading text-4xl text-sage">2024</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Engaged</p>
          </div>
          <span className="h-px w-12 bg-champagne" />
          <div className="text-center">
            <p className="font-heading text-4xl text-sage">2026</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Forever</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
