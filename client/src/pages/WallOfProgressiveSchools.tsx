
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const schools = [
  {
    name: "Riverside School",
    location: "Ahmedabad",
    focus: "Design Thinking",
    description: "Pioneer in student-led learning and design thinking education"
  },
  {
    name: "The Valley School",
    location: "Bangalore",
    focus: "Holistic Development",
    description: "J Krishnamurti philosophy with emphasis on mindfulness"
  },
  {
    name: "Heritage Xperiential",
    location: "Gurgaon",
    focus: "Experiential Learning",
    description: "Project-based learning with real-world applications"
  },
  {
    name: "Inventure Academy",
    location: "Bangalore",
    focus: "Innovation",
    description: "Fostering entrepreneurship and creativity"
  },
  {
    name: "The School KFI",
    location: "Chennai",
    focus: "Self-Discovery",
    description: "Focus on individual growth and understanding"
  },
  {
    name: "Prakriya Green School",
    location: "Bangalore",
    focus: "Sustainability",
    description: "Eco-conscious education and sustainable living"
  },
  {
    name: "Shibumi School",
    location: "Bangalore",
    focus: "Alternative Education",
    description: "Non-competitive learning environment"
  },
  {
    name: "Rishi Valley School",
    location: "Andhra Pradesh",
    focus: "Rural Education",
    description: "Integrating local wisdom with modern education"
  },
  {
    name: "Sahyadri School",
    location: "Pune",
    focus: "Environmental Awareness",
    description: "Nature-centric learning approach"
  },
  {
    name: "Step By Step",
    location: "Noida",
    focus: "Progressive Learning",
    description: "Customized learning pathways for each student"
  },
  {
    name: "Mirambika",
    location: "New Delhi",
    focus: "Free Progress",
    description: "Based on Sri Aurobindo's educational philosophy"
  },
  {
    name: "Centre for Learning",
    location: "Bangalore",
    focus: "Alternative Education",
    description: "Small group learning with individual attention"
  }
];

const WallOfProgressiveSchools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-maximally-blue/5 py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-press-start text-4xl mb-4 text-center">Progressive Schools</h1>
        <p className="text-center mb-12 font-jetbrains text-maximally-black/70">
          Discover India's most innovative schools reshaping education
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 pixel-border">
                <h3 className="font-press-start text-lg mb-2">{school.name}</h3>
                <p className="text-maximally-blue font-bold mb-2">{school.location}</p>
                <p className="text-sm text-maximally-black/70 mb-2">Focus: {school.focus}</p>
                <p className="text-sm font-jetbrains">{school.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallOfProgressiveSchools;
