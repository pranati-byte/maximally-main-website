import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import Featured from "./pages/Featured";
import Privacy from "@/pages/Privacy";
import About from "./pages/About";
import Bootcamps from '@/pages/Bootcamps';
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Entrepreneurship from "./pages/Entrepreneurship";
import PublicSpeaking from "./pages/PublicSpeaking";
import NoCodeAI from "./pages/NoCodeAI";
import DigitalMarketing from "./pages/DigitalMarketing";
import CareerLaunch from "./pages/CareerLaunch";
import Community from "./pages/Community";
import Sponsor from "@/pages/Sponsor";
import Collaborate from "./pages/Collaborate";
import SummerPrograms2025 from './pages/BlogPost/SummerPrograms2025';
import MaximallyLeangap2025 from './pages/BlogPost/MaximallyLeangap2025';
import SummerBreak2025 from './pages/BlogPost/SummerBreak2025';
import RealWorldSkills2025 from './pages/BlogPost/RealWorldSkills2025';
import SchoolVsLife2025 from './pages/BlogPost/SchoolVsLife2025';
import OnlineCourses2025 from './pages/BlogPost/OnlineCourses2025';
import Internships2025 from './pages/BlogPost/Internships2025';
import JoinUs from './pages/JoinUs';
import NotFound from '@/pages/NotFound';
import TeenBusiness from './pages/BlogPost/TeenBusiness';
import SummerBootcamps2025 from './pages/BlogPost/SummerBootcamps2025';
import AIforTeens from './pages/BlogPost/AIforTeens';
import TeenStartupJourney from './pages/BlogPost/TeenStartupJourney';
import NoCodeTools from './pages/BlogPost/NoCodeTools';
import DigitalMarketingGuide from './pages/BlogPost/DigitalMarketingGuide';
import PublicSpeakingGuide from './pages/BlogPost/PublicSpeakingGuide';

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  useEffect(() => {
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://maximally.in');
    document.title = 'Maximally - Learn Real-World Skills for Indian Teenagers';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Join India\'s premier skill development platform for teenagers. Learn AI, Digital Marketing, Public Speaking & more through hands-on bootcamps.');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'teen education India, skill development, digital marketing, AI courses, public speaking, entrepreneurship, Indian students');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <WhatsAppButton />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/public-speaking" element={<PublicSpeaking />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/no-code-ai" element={<NoCodeAI />} />
            <Route path="/career-launch" element={<CareerLaunch />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/about" element={<About />} />
            {/* Team route removed */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/summer-programs-2025" element={<SummerPrograms2025 />} />
            <Route path="/blog/summer-bootcamps-2025" element={<SummerBootcamps2025 />} />
        <Route path="/blog/maximally-leangap-2025" element={<MaximallyLeangap2025 />} />
          <Route path="/blog/summer-break-2025" element={<SummerBreak2025 />} />
            <Route path="/blog/real-world-skills-2025" element={<RealWorldSkills2025 />} />
          <Route path="/blog/school-vs-life-2025" element={<SchoolVsLife2025 />} />
            <Route path="/blog/online-courses-2025" element={<OnlineCourses2025 />} />
            <Route path="/blog/internships-2025" element={<Internships2025 />} />
            <Route path="/blog/teen-business" element={<TeenBusiness />} />
            <Route path="/blog/ai-for-teenagers-no-code" element={<AIforTeens />} />
            <Route path="/blog/teen-startup-journey-student-story" element={<TeenStartupJourney />} />
            <Route path="/blog/no-code-tools-for-teen-creators" element={<NoCodeTools />} />
            <Route path="/blog/digital-marketing-for-high-schoolers" element={<DigitalMarketingGuide />} />
            <Route path="/blog/public-speaking-for-teens-guide" element={<PublicSpeakingGuide />} />
            <Route path="/blog/real-world-skills-for-teens" element={<RealWorldSkillsForTeens />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/community" element={<Community />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;