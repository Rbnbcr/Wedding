import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import OurStory from "@/components/wedding/OurStory";
import DaySchedule from "@/components/wedding/DaySchedule";
import SaveTheDate from "@/components/wedding/SaveTheDate";
import GiftSection from "@/components/wedding/GiftSection";
import AdviceSection from "@/components/wedding/AdviceSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import HostInfo from "@/components/wedding/HostInfo";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OurStory />
      <DaySchedule />
      <SaveTheDate />
      <GiftSection />
      <AdviceSection />
      <RSVPSection />
      <HostInfo />
      <Footer />
    </div>
  );
};

export default Index;
