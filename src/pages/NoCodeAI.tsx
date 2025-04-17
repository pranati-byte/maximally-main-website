import { ArrowRight, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillPageLayout from '@/components/SkillPageLayout';

const NoCodeAI = () => {
  return (
    <SkillPageLayout
      title="No-Code & AI"
      icon={<Database className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-blue"
      tagline="Build the future without coding."
      skillName="Builders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-builders"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-blue">
            Build Apps Like a Tech Founder
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            Master the tools used by successful founders to build million-dollar products—no coding required.
          </p>
          <Button className="bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group">
            Launch Without Code
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Button className="bg-maximally-blue hover:bg-maximally-blue/90 text-white px-8 py-6 text-lg font-jetbrains group">
            Reserve Your Spot
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default NoCodeAI;