
import { CalendarDays, Clock } from "lucide-react";

interface Event {
  title: string;
  date: string;
  time: string;
  price: string;
  isPopular?: boolean;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents = ({
  events
}: UpcomingEventsProps) => {
  return (
    <div className="mt-12">
      <h3 className="font-press-start text-xl mb-6 text-maximally-black">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className={`pixel-border p-6 relative ${event.isPopular ? 'bg-maximally-blue/5' : 'bg-white'}`}>
            {event.isPopular && (
              <div className="absolute top-0 right-0 bg-maximally-red text-white px-3 py-1 text-sm font-jetbrains">
                Popular
              </div>
            )}
            <h4 className="font-press-start text-lg mb-2">{event.title}</h4>
            <div className="flex items-center text-maximally-black/70 mb-2">
              <CalendarDays className="h-4 w-4 mr-2" />
              <span className="font-jetbrains">{event.date}</span>
            </div>
            <div className="flex items-center text-maximally-black/70 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-jetbrains">{event.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-press-start text-maximally-blue">{event.price}</span>
              <button className="bg-maximally-red text-white px-4 py-2 font-jetbrains hover:bg-maximally-red/90 transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
