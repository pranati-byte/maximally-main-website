
import { Instagram, MessageCircle, MessagesSquare } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-press-start text-maximally-black mb-4 text-center">
          &gt;&gt; Join Our Community_
        </h1>
        
        <p className="text-center font-jetbrains text-maximally-black/80 mb-12 max-w-2xl mx-auto">
          Connect with ambitious teens, access exclusive content, and unlock opportunities for growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
            <Instagram className="h-8 w-8 text-maximally-blue mb-4" />
            <h3 className="font-press-start text-lg mb-2">Instagram</h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Follow our journey and get daily tips on skills that matter.
            </p>
            <a 
              href="https://instagram.com/maximally.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button bg-maximally-blue text-white hover:bg-maximally-blue/90"
            >
              Join on Instagram
            </a>
          </div>

          <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
            <MessageCircle className="h-8 w-8 text-maximally-blue mb-4" />
            <h3 className="font-press-start text-lg mb-2">WhatsApp</h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Get real-time updates and connect with fellow learners.
            </p>
            <a 
              href="https://chat.whatsapp.com/maximally" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button bg-maximally-blue text-white hover:bg-maximally-blue/90"
            >
              Join WhatsApp Group
            </a>
          </div>

          <div className="pixel-border p-6 hover:bg-maximally-blue/5 transition-colors">
            <MessagesSquare className="h-8 w-8 text-maximally-blue mb-4" />
            <h3 className="font-press-start text-lg mb-2">Discord</h3>
            <p className="font-jetbrains text-maximally-black/80 mb-4">
              Join our server for discussions and exclusive events.
            </p>
            <a 
              href="https://discord.gg/maximally" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button bg-maximally-blue text-white hover:bg-maximally-blue/90"
            >
              Join Discord Server
            </a>
          </div>
        </div>

        <div className="pixel-border p-8 bg-maximally-black/5">
          <h2 className="font-press-start text-xl mb-6 text-center">Community Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-press-start text-lg">Free Sessions</h3>
              <p className="font-jetbrains text-maximally-black/80">
                Access exclusive workshops and webinars.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-press-start text-lg">Job Opportunities</h3>
              <p className="font-jetbrains text-maximally-black/80">
                Get first access to internships and jobs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-press-start text-lg">Networking</h3>
              <p className="font-jetbrains text-maximally-black/80">
                Connect with like-minded peers.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-press-start text-lg">Event Alerts</h3>
              <p className="font-jetbrains text-maximally-black/80">
                Never miss upcoming bootcamps and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
