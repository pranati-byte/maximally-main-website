import { lazy } from 'react';

// Static blog post components (lazy loaded)
export const staticBlogComponents = {
  // Summer 2025 series
  'summer-programs-2025': lazy(() => import('../pages/BlogPost/SummerPrograms2025')),
  'summer-bootcamps-2025': lazy(() => import('../pages/BlogPost/SummerBootcamps2025')),
  'maximally-leangap-2025': lazy(() => import('../pages/BlogPost/MaximallyLeangap2025')),
  'summer-break-2025': lazy(() => import('../pages/BlogPost/SummerBreak2025')),
  'real-world-skills-2025': lazy(() => import('../pages/BlogPost/RealWorldSkills2025')),
  'school-vs-life-2025': lazy(() => import('../pages/BlogPost/SchoolVsLife2025')),
  'online-courses-2025': lazy(() => import('../pages/BlogPost/OnlineCourses2025')),
  'internships-2025': lazy(() => import('../pages/BlogPost/Internships2025')),
  
  // General teen content
  'teen-business': lazy(() => import('../pages/BlogPost/TeenBusiness')),
  'ai-for-teenagers-no-code': lazy(() => import('../pages/BlogPost/AIforTeens')),
  'teen-startup-journey-student-story': lazy(() => import('../pages/BlogPost/TeenStartupJourney')),
  'no-code-tools-for-teen-creators': lazy(() => import('../pages/BlogPost/NoCodeTools')),
  'digital-marketing-for-high-schoolers': lazy(() => import('../pages/BlogPost/DigitalMarketingGuide')),
  'public-speaking-for-teens-guide': lazy(() => import('../pages/BlogPost/PublicSpeakingGuide')),
  'real-world-skills-for-teens': lazy(() => import('../pages/BlogPost/RealWorldSkillsForTeens')),
  'instagram-personal-brand-teens-2025': lazy(() => import('../pages/BlogPost/InstagramPersonalBranding')),
  'first-pitch-tips-for-teens': lazy(() => import('../pages/BlogPost/PitchingTipsForTeens')),
  'side-hustle-to-startup-teen-success': lazy(() => import('../pages/BlogPost/SideHustleToStartup')),
  'gen-z-influencer-guide': lazy(() => import('../pages/BlogPost/GenZInfluencer')),
  'teen-entrepreneurship-bootcamp-experience': lazy(() => import('../pages/BlogPost/TeenEntrepreneurshipBootcamp')),
  'passion-project-to-business': lazy(() => import('../pages/BlogPost/PassionProjectToBusiness')),
  'learn-ai-in-7-days-teens': lazy(() => import('../pages/BlogPost/LearnAIInSevenDays')),
  'online-branding-tips-for-students': lazy(() => import('../pages/BlogPost/OnlineBrandingTips')),
  'teen-entrepreneurs-india-future': lazy(() => import('../pages/BlogPost/TeenEntrepreneursIndia')),
  'youtube-vs-startup-for-teens': lazy(() => import('../pages/BlogPost/YoutubeVsStartup')),
  'top-careers-for-teen-innovators': lazy(() => import('../pages/BlogPost/TopCareersForTeens')),
  
  // Makeathon content
  'makeathon-for-future': lazy(() => import('../pages/BlogPost/MakeathonForFuture')),
  'startups-through-maximally': lazy(() => import('../pages/BlogPost/StartupsThroughMaximally')),
  'maximally-makeathons-for-teachers': lazy(() => import('../pages/BlogPost/MaximallyMakeathonsForTeachers')),
  'level-up-your-game-with-maximally': lazy(() => import('../pages/BlogPost/LevelUpYourGameWithMaximally')),
  'transforming-education-with-maximally': lazy(() => import('../pages/BlogPost/TransformingEducationWithMaximally')),
  'can-teens-launch-startups': lazy(() => import('../pages/BlogPost/CanTeensLaunchStartups')),
  'dorm-to-startup-2025': lazy(() => import('../pages/BlogPost/DormToStartup2025')),
  'school-innovation-roi': lazy(() => import('../pages/BlogPost/SchoolInnovationROI')),
  'senior-dev-as-mentors': lazy(() => import('../pages/BlogPost/TechMentoringBenefits')),
  'no-code-future': lazy(() => import('../pages/BlogPost/NoCodingNoProblem')),
  'makeathon-for-career': lazy(() => import('../pages/BlogPost/CareerChangeThroughMakeathons')),
  'power-of-mentorship': lazy(() => import('../pages/BlogPost/PowerOfMentorship')),
  'makeathons-future-education': lazy(() => import('../pages/BlogPost/MakeathonsFutureEducation')),
  'girls-breaking-barriers-stem': lazy(() => import('../pages/BlogPost/GirlsBreakingBarriersSTEM')),
  'top-life-skills-teens': lazy(() => import('../pages/BlogPost/TopLifeSkillsTeens')),
  'maximally-teaches-tools': lazy(() => import('../pages/BlogPost/MaximallyTeachesTools')),
  'parents-support-makeathon': lazy(() => import('../pages/BlogPost/ParentsSupport')),
  'makeathon-faq-maximally': lazy(() => import('../pages/BlogPost/MakeathonFAQ')),
  'teamwork-leadership-maximally': lazy(() => import('../pages/BlogPost/BuildingTeamworkLeadership')),
  
  // AI Shipathon posts
  'maximally-ai-shipathon-guide': lazy(() => import('../pages/blog/MaximallyAIShipathonGuide')),
  'top-ai-hackathons-students-2025': lazy(() => import('../pages/blog/TopAIHackathonsStudents2025')),
  'no-code-ai-shipathon': lazy(() => import('../pages/blog/NoCodeAIShipathon')),
  'first-ai-project-48-hours': lazy(() => import('../pages/blog/FirstAIProject48Hours')),
  
  // Code Hypothesis posts
  'why-hackathons-got-boring-code-hypothesis': lazy(() => import('../pages/blog/WhyHackathonsGotBoring')),
  'science-wild-ideas-code-hypothesis': lazy(() => import('../pages/blog/ScienceWildIdeas')),
  'no-pitch-decks-gatekeeping-chaos': lazy(() => import('../pages/blog/NoPitchDecksGatekeepingChaos')),
  'survive-code-hypothesis-24-hours': lazy(() => import('../pages/blog/SurviveCodeHypothesis24Hours')),
  
  // Protocol 404 posts
  'protocol-404-when-system-broken': lazy(() => import('../pages/blog/Protocol404WhenSystemBroken')),
  'protocol-404-future-problem-solving': lazy(() => import('../pages/blog/Protocol404FutureOfProblemSolving')),
  'protocol-404-hacker-shortcut': lazy(() => import('../pages/blog/Protocol404HackerShortcut')),
  'protocol-404-future-of-hackathons': lazy(() => import('../pages/blog/Protocol404FutureOfHackathons')),
  
  // Project CodeGen posts
  'project-codegen-play-future': lazy(() => import('../pages/blog/ProjectCodeGenPlayFuture')),
  'project-codegen-redefining-collaboration': lazy(() => import('../pages/blog/ProjectCodeGenRedefiningCollaboration')),
  'project-codegen-idea-to-execution': lazy(() => import('../pages/blog/ProjectCodeGenIdeaToExecution')),
  'project-codegen-beyond-hackathons': lazy(() => import('../pages/blog/ProjectCodeGenBeyondHackathons')),
  
  // Partnership posts
  'masters-union-partnership': lazy(() => import('../pages/blog/MastersUnionPartnership')),
};

export const isStaticBlogPost = (slug: string): boolean => {
  return slug in staticBlogComponents;
};

export const getStaticBlogComponent = (slug: string) => {
  return staticBlogComponents[slug as keyof typeof staticBlogComponents];
};
