
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

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-press-start text-maximally-black mb-6">
        Upcoming Bootcamps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="pixel-border bg-white p-6 relative">
            {event.isPopular && (
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-maximally-red text-white font-press-start text-xs px-3 py-1">
                Popular!
              </div>
            )}
            <h3 className="font-press-start text-lg mb-3">{event.title}</h3>
            <div className="flex items-center mb-2">
              <CalendarDays className="h-4 w-4 text-maximally-black mr-2" />
              <span className="font-jetbrains text-maximally-black/70">{event.date}</span>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="h-4 w-4 text-maximally-black mr-2" />
              <span className="font-jetbrains text-maximally-black/70">{event.time}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-press-start text-maximally-red">{event.price}</span>
              <button className="pixel-button bg-maximally-black text-white text-sm px-4 py-2">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
