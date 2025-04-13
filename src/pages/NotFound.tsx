import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-press-start text-4xl text-maximally-black mb-4">404</h1>
      <p className="font-jetbrains text-maximally-black/70 mb-8 text-center">
        Oops! This level doesn't exist. Let's get you back on track.
      </p>
      <Link 
        to="/" 
        className="font-press-start text-maximally-blue hover:text-maximally-red transition-colors"
      >
        &lt; Return Home
      </Link>
    </div>
  );
};

export default NotFound;