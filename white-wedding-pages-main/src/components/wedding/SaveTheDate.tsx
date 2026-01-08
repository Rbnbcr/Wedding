import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const SaveTheDate = () => {
  const weddingDate = new Date('2026-06-15');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section id="save-the-date" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          Save the Date
        </h2>
        
        <div className="divider-ornament">
          <span className="text-champagne">✦</span>
        </div>
        
        {/* Date display */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-sage" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              Monday
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="text-center">
              <p className="font-heading text-5xl md:text-6xl text-foreground">15</p>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Day</p>
            </div>
            <span className="text-champagne text-3xl">•</span>
            <div className="text-center">
              <p className="font-heading text-5xl md:text-6xl text-foreground">June</p>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Month</p>
            </div>
            <span className="text-champagne text-3xl">•</span>
            <div className="text-center">
              <p className="font-heading text-5xl md:text-6xl text-foreground">2026</p>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Year</p>
            </div>
          </div>
          
          {/* Countdown */}
          <div className="pt-6 border-t border-border">
            <p className="font-body text-sm text-muted-foreground mb-2">Only</p>
            <p className="font-heading text-3xl md:text-4xl text-sage">{daysUntil}</p>
            <p className="font-body text-sm text-muted-foreground mt-2">days to go</p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="mt-8 border-sage text-sage hover:bg-sage hover:text-primary-foreground transition-all duration-300"
          onClick={() => {
            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20260615T150000
DTEND:20260616T010000
SUMMARY:Emma & James Wedding
DESCRIPTION:Join us for our wedding celebration
LOCATION:The Garden Estate, Tuscany
END:VEVENT
END:VCALENDAR`;
            const blob = new Blob([icsContent], { type: 'text/calendar' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'emma-james-wedding.ics';
            a.click();
          }}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Add to Calendar
        </Button>
      </div>
    </section>
  );
};

export default SaveTheDate;
