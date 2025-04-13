
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventProps {
  title: string;
  date: string;
  price: string;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
  };
}

const Event = ({ title, date, price, timeLeft }: EventProps) => (
  <div className="pixel-card">
    <h3 className="font-press-start text-lg mb-3 text-maximally-black">{title}</h3>
    
    <div className="flex items-center mb-2">
      <Calendar className="h-4 w-4 mr-2 text-maximally-black/70" />
      <span className="font-jetbrains text-sm text-maximally-black/70">{date}</span>
    </div>
    
    <div className="flex items-center justify-between mb-6">
      <span className="font-press-start text-sm text-maximally-red">{price}</span>
      
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-2 text-maximally-blue" />
        <span className="font-jetbrains text-sm text-maximally-blue">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
        </span>
      </div>
    </div>
    
    <Button className="w-full pixel-button bg-maximally-blue hover:bg-maximally-blue/90 group">
      Enroll Now
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </div>
);

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    teenbiz: { days: 0, hours: 0, minutes: 0 },
    speechcraft: { days: 0, hours: 0, minutes: 0 },
    videoediting: { days: 0, hours: 0, minutes: 0 }
  });
  
  useEffect(() => {
    // Set future dates for each event
    const teenbizDate = new Date(Date.now() + 18 * 24 * 60 * 60 * 1000); // 18 days from now
    const speechcraftDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // 10 days from now
    const videoeditingDate = new Date(Date.now() + 25 * 24 * 60 * 60 * 1000); // 25 days from now
    
    const calculateTimeLeft = () => {
      const calculateForDate = (targetDate: Date) => {
        const difference = targetDate.getTime() - new Date().getTime();
        
        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0 };
        }
        
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        };
      };
      
      setTimeLeft({
        teenbiz: calculateForDate(teenbizDate),
        speechcraft: calculateForDate(speechcraftDate),
        videoediting: calculateForDate(videoeditingDate)
      });
    };
    
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    calculateTimeLeft(); // Initial calculation
    
    return () => clearInterval(timer);
  }, []);
  
  const events = [
    {
      title: "TeenBiz Bootcamp",
      date: "Starts May 1st",
      price: "₹499",
      timeLeft: timeLeft.teenbiz
    },
    {
      title: "SpeechCraft Pro",
      date: "Starts April 23rd",
      price: "₹399",
      timeLeft: timeLeft.speechcraft
    },
    {
      title: "Video Editing Masterclass",
      date: "Starts May 8th",
      price: "₹599",
      timeLeft: timeLeft.videoediting
    }
  ];
  
  return (
    <section id="events" className="py-20 px-4 bg-maximally-blue/5">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-6 text-center terminal">
          {">> Upcoming Bootcamps_"}
        </h2>
        
        <p className="font-jetbrains text-maximally-black/80 mb-12 text-center max-w-2xl mx-auto">
          Intensive, project-based bootcamps to help you master a skill in weeks, not months. 
          Limited seats available for each cohort.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Event key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
