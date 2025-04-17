
import { QuoteIcon, Star } from "lucide-react";

interface SkillTestimonialProps {
  quote: string;
  author: string;
  handle: string;
  achievement?: string;
}

const SkillTestimonial = ({
  quote,
  author,
  handle,
  achievement
}: SkillTestimonialProps) => {
  return (
    <div className="mt-12 bg-maximally-blue/5 p-6 rounded-lg pixel-border">
      <div className="flex items-start">
        <QuoteIcon className="h-8 w-8 text-maximally-blue mr-3 flex-shrink-0" />
        <div>
          <p className="font-jetbrains text-lg text-maximally-black/80 mb-4">"{quote}"</p>
          <div className="flex flex-col">
            <span className="font-press-start text-sm text-maximally-black">{author}</span>
            <span className="font-jetbrains text-sm text-maximally-black/60">{handle}</span>
            {achievement && (
              <div className="mt-2 flex items-center">
                <Star className="h-4 w-4 text-maximally-blue mr-1" />
                <span className="font-jetbrains text-sm text-maximally-blue">{achievement}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTestimonial;
