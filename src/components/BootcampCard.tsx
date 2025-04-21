
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BootcampCard = () => {
  const bootcamps = [
    {
      title: "Summer Bootcamp 2025",
      description: "Join India's most ambitious teens for 7 days of project building, skill development, and unforgettable experiences.",
      dates: "May - June 2025",
      location: "Mumbai & Bangalore",
      price: "₹24,999",
      link: "/bootcamps"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {bootcamps.map((bootcamp, index) => (
        <div key={index} className="pixel-border bg-white p-6 md:p-8">
          <h3 className="font-press-start text-xl md:text-2xl mb-4">{bootcamp.title}</h3>
          <p className="font-jetbrains text-lg mb-4">{bootcamp.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <span className="font-press-start text-sm">📅 When</span>
              <p className="font-jetbrains">{bootcamp.dates}</p>
            </div>
            <div>
              <span className="font-press-start text-sm">📍 Where</span>
              <p className="font-jetbrains">{bootcamp.location}</p>
            </div>
            <div>
              <span className="font-press-start text-sm">💰 Investment</span>
              <p className="font-jetbrains">{bootcamp.price}</p>
            </div>
          </div>
          <Link to={bootcamp.link}>
            <Button className="bg-maximally-green hover:bg-maximally-green/90 text-white font-press-start px-8 py-6 text-lg">
              Apply Now →
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BootcampCard;
