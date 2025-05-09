import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="text-center space-y-6">
        <h1 className="font-press-start text-4xl md:text-5xl gradient-text-rainbow animate-glow">
          404 - Page Not Found
        </h1>
        <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button className="bg-[#4D89FF] hover:bg-[#4D89FF]/90 text-white px-8 py-6 text-lg font-jetbrains">
            Return Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;