import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import About from "./pages/About";
import Bootcamps from '@/pages/Bootcamps';
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Entrepreneurship from "./pages/Entrepreneurship";
import PublicSpeaking from "./pages/PublicSpeaking";
import NoCodeAI from "./pages/NoCodeAI";
import DigitalMarketing from "./pages/DigitalMarketing";
import VideoEditing from "./pages/VideoEditing";
import CareerLaunch from "./pages/CareerLaunch";
import Community from "./pages/Community";
import Sponsor from "@/pages/Sponsor"; // Added import for Sponsor page


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://maximally.in');
    document.title = 'Maximally - Learn Real-World Skills';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Helping ambitious teens learn the real-world skills that schools forgot to teach.');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/public-speaking" element={<PublicSpeaking />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/no-code-ai" element={<NoCodeAI />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/career-launch" element={<CareerLaunch />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/community" element={<Community />} /> {/* Add the Community route */}
            <Route path="/sponsor" element={<Sponsor />} /> {/* Added Sponsor route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;