
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
    title: "TeenBiz Bootcamp - Weekend Edition",
    date: "May 15-16, 2025",
    time: "10:00 AM - 4:00 PM",
    price: "₹1,999",
    description: "Learn to launch your first micro-business.",
    category: "Entrepreneurship",
    isPopular: true
  },
  {
    title: "Public Speaking Intensive",
    date: "April 28-30, 2025",
    time: "5:00 PM - 7:00 PM",
    price: "₹1,499",
    description: "Master public speaking and presentation skills.",
    category: "Public Speaking"
  },
  {
    title: "Social Media Growth Bootcamp",
    date: "May 5-7, 2025",
    time: "4:00 PM - 6:00 PM",
    price: "₹1,299",
    description: "Learn to grow and monetize your social media presence.",
    category: "Digital Marketing",
    isPopular: true
  },
  {
    title: "Video Editing Masterclass",
    date: "May 18-19, 2025",
    time: "2:00 PM - 5:00 PM",
    price: "₹1,799",
    description: "Master video editing for social media and YouTube.",
    category: "Video Editing"
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
