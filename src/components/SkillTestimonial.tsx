
import { QuoteIcon, Star } from "lucide-react";

interface SkillTestimonialProps {
  quote: string;
  author: string;
  handle: string;
  achievement?: string;
}

const SkillTestimonial = ({ quote, author, handle, achievement }: SkillTestimonialProps) => {
  return (
    <div className="mt-12 mb-8 pixel-border p-6 bg-white relative">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-maximally-black flex items-center justify-center">
        <QuoteIcon className="h-4 w-4 text-white" />
      </div>
      <blockquote className="mb-4 font-jetbrains italic text-maximally-black/80">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-jetbrains font-bold text-maximally-black">{author}</p>
          <p className="font-jetbrains text-maximally-black/60 text-sm">{handle}</p>
          {achievement && (
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-maximally-red mr-1" />
              <span className="font-jetbrains text-xs text-maximally-black/70">{achievement}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillTestimonial;
