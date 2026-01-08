import { Clock, MapPin, Utensils, Music, Heart, Camera } from "lucide-react";

const scheduleItems = [
  {
    time: "3:00 PM",
    title: "Guest Arrival",
    description: "Welcome drinks and mingling in the garden",
    icon: MapPin,
  },
  {
    time: "4:00 PM",
    title: "Ceremony",
    description: "The moment we say 'I do' under the olive trees",
    icon: Heart,
  },
  {
    time: "5:00 PM",
    title: "Cocktail Hour",
    description: "Celebrate with refreshments and hors d'oeuvres",
    icon: Camera,
  },
  {
    time: "6:30 PM",
    title: "Dinner",
    description: "An elegant feast under the Tuscan sky",
    icon: Utensils,
  },
  {
    time: "8:30 PM",
    title: "First Dance & Celebration",
    description: "Dance the night away with us",
    icon: Music,
  },
  {
    time: "12:00 AM",
    title: "Sparkler Send-Off",
    description: "Light up the night as we depart",
    icon: Clock,
  },
];

const DaySchedule = () => {
  return (
    <section id="schedule" className="section-padding bg-sage-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            The Day
          </h2>
          
          <div className="divider-ornament">
            <span className="text-champagne">✦</span>
          </div>
          
          <p className="font-body text-muted-foreground">
            Join us for a celebration filled with love, laughter, and unforgettable moments
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-champagne hidden md:block" />
          
          <div className="space-y-8 md:space-y-0">
            {scheduleItems.map((item, index) => (
              <div 
                key={item.title}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                  <p className="font-heading text-2xl text-sage mb-1">{item.time}</p>
                  <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-champagne flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-sage" />
                </div>
                
                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaySchedule;
