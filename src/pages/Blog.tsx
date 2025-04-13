import { useEffect } from "react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        Blog
      </h1>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Input 
            type="search" 
            placeholder="Search posts..." 
            className="font-jetbrains"
          />
        </div>

        <div className="text-center text-maximally-black/70 font-jetbrains py-12">
          New blog posts coming soon!
        </div>
      </div>
    </div>
  );
};

export default Blog;