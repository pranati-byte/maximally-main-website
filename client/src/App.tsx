import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

import Index from "./pages/Index";
import Makeathon from "./pages/Makeathon";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import ThankYou from "./pages/ThankYou";
import Featured from "./pages/Featured";
import Bootcamps from '@/pages/Bootcamps';
import Blog from "./pages/Blog";
import Community from "./pages/Community";

import Collaborate from "./pages/Collaborate";
import SummerPrograms2025 from './pages/BlogPost/SummerPrograms2025';
import MaximallyLeangap2025 from './pages/BlogPost/MaximallyLeangap2025';
import SummerBreak2025 from './pages/BlogPost/SummerBreak2025';
import RealWorldSkills2025 from './pages/BlogPost/RealWorldSkills2025';
import SchoolVsLife2025 from './pages/BlogPost/SchoolVsLife2025';
import OnlineCourses2025 from './pages/BlogPost/OnlineCourses2025';
import Internships2025 from './pages/BlogPost/Internships2025';

import NotFound from '@/pages/NotFound';
import TeenBusiness from './pages/BlogPost/TeenBusiness';
import SummerBootcamps2025 from './pages/BlogPost/SummerBootcamps2025';
import AIforTeens from './pages/BlogPost/AIforTeens';
import TeenStartupJourney from './pages/BlogPost/TeenStartupJourney';
import NoCodeTools from './pages/BlogPost/NoCodeTools';
import DigitalMarketingGuide from './pages/BlogPost/DigitalMarketingGuide';
import PublicSpeakingGuide from './pages/BlogPost/PublicSpeakingGuide';
import RealWorldSkillsForTeens from './pages/BlogPost/RealWorldSkillsForTeens';
import InstagramPersonalBranding from './pages/BlogPost/InstagramPersonalBranding';
import PitchingTipsForTeens from './pages/BlogPost/PitchingTipsForTeens';
import SideHustleToStartup from "@/pages/BlogPost/SideHustleToStartup";
import GenZInfluencer from "@/pages/BlogPost/GenZInfluencer";
import TeenEntrepreneurshipBootcamp from "@/pages/BlogPost/TeenEntrepreneurshipBootcamp";
import PassionProjectToBusiness from "@/pages/BlogPost/PassionProjectToBusiness";
import LearnAIInSevenDays from "@/pages/BlogPost/LearnAIInSevenDays";
import OnlineBrandingTips from "@/pages/BlogPost/OnlineBrandingTips";
import TeenEntrepreneursIndia from "@/pages/BlogPost/TeenEntrepreneursIndia";
import YoutubeVsStartup from "@/pages/BlogPost/YoutubeVsStartup";
import TopCareersForTeens from "@/pages/BlogPost/TopCareersForTeens";
import WallOfProgressiveSchools from "@/pages/WallOfProgressiveSchools";
import Events from "./pages/Events";
import MakeathonForFuture from './pages/BlogPost/MakeathonForFuture';
import StartupsThroughMaximally from './pages/BlogPost/StartupsThroughMaximally';
import MaximallyMakeathonsForTeachers from './pages/BlogPost/MaximallyMakeathonsForTeachers';
import LevelUpYourGameWithMaximally from './pages/BlogPost/LevelUpYourGameWithMaximally';
import TransformingEducationWithMaximally from './pages/BlogPost/TransformingEducationWithMaximally';
import CanTeensLaunchStartups from './pages/BlogPost/CanTeensLaunchStartups';
import DormToStartup2025 from './pages/BlogPost/DormToStartup2025';
import SchoolInnovationROI from './pages/BlogPost/SchoolInnovationROI';
import TechMentoringBenefits from './pages/BlogPost/TechMentoringBenefits';
import NoCodingNoProblem from './pages/BlogPost/NoCodingNoProblem';
import CareerChangeThroughMakeathons from './pages/BlogPost/CareerChangeThroughMakeathons';
import PowerOfMentorship from './pages/BlogPost/PowerOfMentorship';
import MakeathonsFutureEducation from './pages/BlogPost/MakeathonsFutureEducation';
import GirlsBreakingBarriersSTEM from './pages/BlogPost/GirlsBreakingBarriersSTEM';
import TopLifeSkillsTeens from './pages/BlogPost/TopLifeSkillsTeens';
import MaximallyTeachesTools from './pages/BlogPost/MaximallyTeachesTools';
import ParentsSupport from './pages/BlogPost/ParentsSupport';
import MakeathonFAQ from './pages/BlogPost/MakeathonFAQ';
import BuildingTeamworkLeadership from './pages/BlogPost/BuildingTeamworkLeadership';
import Allies from './pages/Allies';
import Shipathon from './pages/Shipathon';


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
    // Set default meta tags
    document.title = 'Maximally - Learn Real-World Skills for Indian Teenagers';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Join India\'s premier skill development platform for teenagers. Learn AI, Digital Marketing, Public Speaking & more through hands-on bootcamps.');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'teen education India, skill development, digital marketing, AI courses, public speaking, entrepreneurship, Indian students');

    // Add robots meta tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'index, follow');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />

          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bootcamps" element={<Navigate to="/" replace />} />
            <Route path="/makeathon" element={<Makeathon />} />
            {/* Team route removed */}

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
            <Route path="/blog/instagram-personal-brand-teens-2025" element={<InstagramPersonalBranding />} />
            <Route path="/blog/first-pitch-tips-for-teens" element={<PitchingTipsForTeens />} />
            <Route path="/blog/side-hustle-to-startup-teen-success" element={<SideHustleToStartup />} />
            <Route path="/blog/gen-z-influencer-guide" element={<GenZInfluencer />} />
            <Route path="/blog/teen-entrepreneurship-bootcamp-experience" element={<TeenEntrepreneurshipBootcamp />} />
            <Route path="/blog/passion-project-to-business" element={<PassionProjectToBusiness />} />
            <Route path="/blog/learn-ai-in-7-days-teens" element={<LearnAIInSevenDays />} />
            <Route path="/blog/online-branding-tips-for-students" element={<OnlineBrandingTips />} />
            <Route path="/blog/teen-entrepreneurs-india-future" element={<TeenEntrepreneursIndia />} />
            <Route path="/blog/youtube-vs-startup-for-teens" element={<YoutubeVsStartup />} />
            <Route path="/blog/top-careers-for-teen-innovators" element={<TopCareersForTeens />} />
            <Route path="/wall-of-progressive-schools" element={<WallOfProgressiveSchools />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            <Route path="/community" element={<Community />} />
            <Route path="/collaborate" element={<Collaborate />} />

            <Route path="/featured" element={<Featured />} />

            <Route path="/events" element={<Events />} />
          <Route path="/blog/makeathon-for-future" element={<MakeathonForFuture />} />
          <Route path="/blog/startups-through-maximally" element={<StartupsThroughMaximally />} />
          <Route path="/blog/maximally-makeathons-for-teachers" element={<MaximallyMakeathonsForTeachers />} />
          <Route path="/blog/level-up-your-game-with-maximally" element={<LevelUpYourGameWithMaximally />} />
          <Route path="/blog/transforming-education-with-maximally" element={<TransformingEducationWithMaximally />} />
          <Route path="/blog/can-teens-launch-startups" element={<CanTeensLaunchStartups />} />
          <Route path="/blog/dorm-to-startup-2025" element={<DormToStartup2025 />} />
          <Route path="/blog/school-innovation-roi" element={<SchoolInnovationROI />} />
          <Route path="/blog/senior-dev-as-mentors" element={<TechMentoringBenefits />} />
          <Route path="/blog/no-code-future" element={<NoCodingNoProblem />} />
          <Route path="/blog/makeathon-for-career" element={<CareerChangeThroughMakeathons />} />
          <Route path="/blog/power-of-mentorship" element={<PowerOfMentorship />} />
          <Route path="/blog/makeathons-future-education" element={<MakeathonsFutureEducation />} />
          <Route path="/blog/girls-breaking-barriers-stem" element={<GirlsBreakingBarriersSTEM />} />
          <Route path="/blog/top-life-skills-teens" element={<TopLifeSkillsTeens />} />
          <Route path="/blog/maximally-teaches-tools" element={<MaximallyTeachesTools />} />
          <Route path="/blog/parents-support-makeathon" element={<ParentsSupport />} />
          <Route path="/blog/makeathon-faq-maximally" element={<MakeathonFAQ />} />
          <Route path="/blog/teamwork-leadership-maximally" element={<BuildingTeamworkLeadership />} />
          <Route path="/allies" element={<Allies />} />
          <Route path="/shipathon" element={<Shipathon />} />

          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;