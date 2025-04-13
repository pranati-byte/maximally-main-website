
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="font-press-start text-3xl mb-8 text-maximally-black">Contact Us</h1>
        <div className="max-w-2xl mx-auto font-jetbrains">
          <p className="mb-6 text-maximally-black/70">
            Have questions or want to learn more about Maximally? We'd love to hear from you!
          </p>
          <div className="pixel-card p-6">
            <h2 className="font-press-start text-xl mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input type="text" className="w-full p-2 border pixel-border" />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full p-2 border pixel-border" />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea className="w-full p-2 border pixel-border h-32"></textarea>
              </div>
              <button className="bg-maximally-blue text-white px-6 py-2 hover:bg-maximally-red transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
