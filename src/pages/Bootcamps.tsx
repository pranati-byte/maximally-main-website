
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Bootcamp {
  title: string;
  date: string;
  time: string;
  price: string;
  description: string;
  category: string;
  isPopular?: boolean;
}

const bootcamps: Bootcamp[] = [
  {
    title: "Team-Based Startup Bootcamp",
    date: "June 1-15, 2025",
    time: "4:00 PM - 6:00 PM IST",
    price: "₹2,499",
    description: "Build a real startup with a team of ambitious teens. Learn entrepreneurship, leadership, and teamwork through hands-on experience.",
    category: "Entrepreneurship",
    isPopular: true
  }
];

const Bootcamps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-4 text-center">
          &gt;&gt; Upcoming Bootcamps_
        </h1>
        
        <p className="text-center font-jetbrains text-maximally-black/80 mb-12 max-w-2xl mx-auto">
          Level up your skills with our intensive, live bootcamps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bootcamps.map((bootcamp, index) => (
            <div key={index} className="pixel-border bg-white p-6 relative">
              {bootcamp.isPopular && (
                <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-maximally-red text-white font-press-start text-xs px-3 py-1">
                  Popular!
                </div>
              )}
              <span className="inline-block font-press-start text-xs text-maximally-blue mb-2 px-2 py-1 bg-maximally-blue/10 rounded">
                [{bootcamp.category}]
              </span>
              <h3 className="font-press-start text-lg mb-3">{bootcamp.title}</h3>
              <p className="font-jetbrains text-maximally-black/70 mb-4">
                {bootcamp.description}
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center font-jetbrains text-maximally-black/70">
                  <span className="w-20">Date:</span>
                  <span>{bootcamp.date}</span>
                </div>
                <div className="flex items-center font-jetbrains text-maximally-black/70">
                  <span className="w-20">Time:</span>
                  <span>{bootcamp.time}</span>
                </div>
                <div className="flex items-center font-jetbrains">
                  <span className="w-20">Price:</span>
                  <span className="text-maximally-red font-press-start">{bootcamp.price}</span>
                </div>
              </div>
              <button className="pixel-button bg-maximally-black text-white w-full">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
