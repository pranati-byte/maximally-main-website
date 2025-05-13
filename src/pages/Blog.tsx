
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How Maximally is Building the Leangap of India",
    excerpt: "Discover how Maximally is becoming India's answer to Leangap, empowering teens to start companies and build real projects. From mentorship to real outcomes, see how we're revolutionizing teen entrepreneurship...",
    date: "April 17, 2025",
    readTime: "5 min read",
    category: "Entrepreneurship",
    link: "/blog/maximally-leangap-2025"
  },
  {
    title: "Why School Doesn't Teach You Real Life (And What We're Doing About It)",
    excerpt: "From straight A's to real-world confusion - discover how Maximally is bridging the gap between academic excellence and practical life skills that schools don't teach...",
    date: "April 17, 2025",
    readTime: "5 min read",
    category: "Education",
    link: "/blog/school-vs-life-2025"
  },
  {
    title: "How to Start a Business Before You Turn 18 (No Code, No Problem!)",
    excerpt: "Learn how to start a business before 18 using no-code tools. Build real products, grow your brand, and become a teen entrepreneur in India without learning to code...",
    date: "May 10, 2025",
    readTime: "10 min read",
    category: "Entrepreneurship",
    link: "/blog/teen-business-2025"
  },
  {
    title: "Top 10 Summer Programs for Teens in India (2025 Edition)",
    excerpt: "Discover the most impactful summer programs that will transform your skills and boost your college applications. From Maximally's intensive bootcamps to other notable programs...",
    date: "April 10, 2025",
    readTime: "8 min read",
    category: "Education",
    link: "/blog/summer-programs-2025"
  },
  {
    title: "How to Make the Most of Your Summer Break (For Students Ages 13–20)",
    excerpt: "Turn your summer break into a launchpad for success! Learn why joining Maximally's skill-focused bootcamps should be your #1 priority this summer...",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Career Development",
    link: "/blog/summer-break-2025"
  },
  {
    title: "Why Real-World Skills Matter More Than Marks in 2025",
    excerpt: "The truth about marks vs. skills in today's job market. See how 87% of employers now prioritize practical skills over academic scores, and why Maximally's approach works...",
    date: "April 10, 2025",
    readTime: "10 min read",
    category: "Industry Insights",
    link: "/blog/real-world-skills-2025"
  },
  {
    title: "Best Online Courses for Teenagers in India (Free + Paid)",
    excerpt: "A comprehensive guide to the top online learning platforms for teens. Starting with Maximally's innovative bootcamps, explore options that fit your learning style...",
    date: "April 10, 2025",
    readTime: "12 min read",
    category: "Reviews",
    link: "/blog/online-courses-2025"
  },
  {
    title: "How to Get Internships in High School (Ultimate Guide)",
    excerpt: "Your step-by-step roadmap to landing amazing internships while in high school. Learn how Maximally's Career Starter Pack bootcamp can give you the edge...",
    date: "April 10, 2025",
    readTime: "15 min read",
    category: "Career Guide",
    link: "/blog/internships-2025"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-press-start text-3xl text-maximally-black mb-6 text-center">
        &gt;&gt; Maximally Blog_
      </h1>

      <div className="max-w-3xl mx-auto">
        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-maximally-black/50 h-5 w-5" />
          <Input 
            type="search" 
            placeholder="Search posts..." 
            className="font-jetbrains pl-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <Link 
              to={post.link} 
              key={index}
            >
              <article className="pixel-border bg-white p-6 hover:transform hover:scale-[1.02] transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-press-start text-maximally-blue bg-maximally-blue/10 px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-maximally-black/60 text-sm font-jetbrains">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <span className="text-maximally-black/60 text-sm font-jetbrains">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-press-start text-xl mb-3 text-maximally-black">
                  {post.title}
                </h2>

                <p className="font-jetbrains text-maximally-black/70 mb-4">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-maximally-blue font-press-start text-sm group">
                  Read More 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
