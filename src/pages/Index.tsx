
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillTracks from "@/components/SkillTracks";
import WhyMaximally from "@/components/WhyMaximally";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SkillTracks />
      <WhyMaximally />
      <Testimonials />
      <Community />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
