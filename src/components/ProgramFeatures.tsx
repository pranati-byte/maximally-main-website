
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface ProgramFeaturesProps {
  features: Feature[];
}

const ProgramFeatures = ({ features }: ProgramFeaturesProps) => {
  return (
    <div>
      <h2 className="text-xl font-press-start text-maximally-black mb-6">
        What You'll Learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <div className="mr-3 flex-shrink-0">
              <div className="w-6 h-6 bg-maximally-blue pixel-border flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-jetbrains font-bold text-maximally-black mb-1">{feature.title}</h3>
              <p className="font-jetbrains text-maximally-black/70 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramFeatures;
