
import { Link } from 'react-router-dom';

interface Bootcamp {
  title: string;
  description: string;
  path: string;
  color: string;
  date?: string;
}

const bootcamps: Bootcamp[] = [
  {
    title: "Digital Marketing",
    description: "Master social media, content creation, and digital strategy",
    path: "/digital-marketing",
    color: "#FF5F5F"
  },
  {
    title: "No-Code & AI",
    description: "Build apps and automate with AI - no coding required",
    path: "/no-code-ai",
    color: "#39FF14"
  },
  {
    title: "Public Speaking",
    description: "Develop confidence and presentation mastery",
    path: "/public-speaking",
    color: "#00D1FF"
  },
  {
    title: "Entrepreneurship",
    description: "Launch and grow your own business ventures",
    path: "/entrepreneurship",
    color: "#FFD700"
  }
];

const BootcampCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {bootcamps.map((bootcamp, index) => (
        <Link
          key={index}
          to={bootcamp.path}
          className="block group"
        >
          <div
            className="rounded-lg p-6 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: bootcamp.color,
              boxShadow: `0 4px 14px ${bootcamp.color}40`
            }}
          >
            <h3 className="text-white font-press-start text-lg mb-2">
              {bootcamp.title}
            </h3>
            <p className="text-white/90 font-jetbrains text-sm">
              {bootcamp.description}
            </p>
            {bootcamp.date && (
              <p className="text-white/80 font-jetbrains text-xs mt-2">
                {bootcamp.date}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BootcampCard;
