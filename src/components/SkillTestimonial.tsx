import { QuoteIcon, Star } from "lucide-react";

interface SkillTestimonialProps {
  quote: string;
  author: string;
  handle: string;
  achievement?: string;
}

const SkillTestimonial = ({ quote, author, handle, achievement }: SkillTestimonialProps) => {
  return (
    <div className="pixel-border p-8 bg-gradient-to-br from-white to-gray-50 mb-12 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="bg-maximally-blue rounded-full p-4 text-white">
          <span className="text-2xl">❝</span>
        </div>
        <div>
          <p className="font-jetbrains text-lg mb-6 leading-relaxed italic">"{quote}"</p>
          <div className="border-t border-gray-200 pt-4">
            <p className="font-press-start text-sm mb-2">{author}</p>
            <p className="font-jetbrains text-maximally-black/60 mb-1">{handle}</p>
            <p className="font-jetbrains text-maximally-blue font-semibold">{achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTestimonial;