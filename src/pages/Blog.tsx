
import { Input } from "@/components/ui/input";

const posts = [
  {
    title: "How to Crush Your First MUN Conference",
    date: "March 15, 2024",
    tag: "Public Speaking"
  },
  {
    title: "Building a Startup at 16: My Journey",
    date: "March 10, 2024",
    tag: "Entrepreneurship"
  },
  {
    title: "Mastering AI Tools as a Teen",
    date: "March 5, 2024",
    tag: "Technology"
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-12 text-center">
        Latest Posts
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Input 
            type="search" 
            placeholder="Search posts..." 
            className="font-jetbrains"
          />
        </div>
        
        {posts.map((post, index) => (
          <div key={index} className="pixel-border p-6 bg-white mb-6 cursor-pointer hover:transform hover:scale-[1.02] transition-transform">
            <span className="font-jetbrains text-maximally-blue text-sm mb-2 block">{post.tag}</span>
            <h2 className="font-press-start text-lg mb-2 text-maximally-black">{post.title}</h2>
            <span className="font-jetbrains text-maximally-black/50 text-sm">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
