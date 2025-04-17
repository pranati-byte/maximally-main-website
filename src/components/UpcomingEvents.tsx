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
  return <div className="mt-12">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => {})}
      </div>
    </div>;
};
export default UpcomingEvents;