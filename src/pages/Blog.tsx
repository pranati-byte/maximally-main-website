import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "What It's Really Like Inside a Teen Entrepreneurship Bootcamp",
    excerpt: "Discover what it's like inside a teen startup bootcamp and how it can help you turn your business ideas into reality with Maximally Bootcamp...",
    date: "January 17, 2025",
    readTime: "8 min read",
    category: "Entrepreneurship",
    link: "/blog/teen-entrepreneurship-bootcamp-experience"
  },
  {
    title: "The Gen Z Guide to Becoming a Young Influencer",
    excerpt: "Discover how to become a Gen Z influencer in 2025! Learn creating content, growing your following, and building your personal brand as a teen...",
    date: "January 17, 2025",
    readTime: "8 min read",
    category: "Social Media",
    link: "/blog/gen-z-influencer-guide-teens"
  },
  {
    title: "From Side Hustle to Startup: Teen Founders Who Made It Big",
    excerpt: "Discover how teens turn their side hustles into successful startups. From weekend hobbies to real businesses—learn the path to teen entrepreneurship...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Entrepreneurship",
    link: "/blog/side-hustle-to-startup-teen-success"
  },
  {
    title: "10 Real-World Skills Schools Never Taught You (But We Will)",
    excerpt: "Discover essential real-world skills every teen should know before turning 18. From financial literacy to entrepreneurship—learn what school doesn't teach...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Life Skills",
    link: "/blog/real-world-skills-for-teens"
  },
  {
    title: "Why Every Teen Should Learn Public Speaking (Even If You're Shy)",
    excerpt: "Discover how public speaking builds confidence, leadership, and communication—even for shy students. Learn practical steps to overcome fear and speak with impact...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Skills Development",
    link: "/blog/public-speaking-for-teens-guide"
  },
  {
    title: "The Ultimate Guide to Digital Marketing for High School Students",
    excerpt: "Learn digital marketing as a teen! How to build brands, earn online, and grow real-world skills. Perfect for high school students looking to start their digital journey...",
    date: "April 17, 2025",
    readTime: "10 min read",
    category: "Digital Marketing",
    link: "/blog/digital-marketing-for-high-schoolers"
  },
  {
    title: "No-Code Tools Every Teen Creator Should Try This Summer",
    excerpt: "Create apps, websites, and businesses without coding—perfect for teen creators this summer. Discover the best no-code tools and start building today...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Technology",
    link: "/blog/no-code-tools-for-teen-creators"
  },
  {
    title: "How I Built My First Startup as a Student (And How You Can TOO)",
    excerpt: "A real teen founder shares how he built his first startup while still in school. Get inspired and start yours. From school project to successful launch...",
    date: "April 17, 2025",
    readTime: "10 min read",
    category: "Entrepreneurship",
    link: "/blog/teen-startup-journey-student-story"
  },
  {
    title: "AI for Teenagers: Learn the Future Without Coding",
    excerpt: "Explore how teenagers can start learning AI without coding—using no-code tools, real-world projects, and beginner-friendly platforms. Start building with AI today...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Technology",
    link: "/blog/ai-for-teenagers-no-code"
  },
  {
    title: "Top 5 Summer Bootcamps for Teenagers in India (2025 Edition)",
    excerpt: "Discover the best summer bootcamps where Indian teens can learn AI, coding, entrepreneurship & digital skills. Find the perfect program to kickstart your tech journey...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Education",
    link: "/blog/summer-bootcamps-2025"
  },
  {
    title: "How to Start a Business Before You Turn 18 (No Code, No Problem!)",
    excerpt: "Learn how to start a business before 18 using no-code tools. Build real products, grow your brand, and become a teen entrepreneur without writing a single line of code...",
    date: "April 17, 2025",
    readTime: "8 min read",
    category: "Entrepreneurship",
    link: "/blog/teen-business"
  },
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
    category: "Education"
  },
  {
    title: "Top 10 Summer Programs for Teens in India (2025 Edition)",
    excerpt: "Discover the most impactful summer programs that will transform your skills and boost your college applications. From Maximally's intensive bootcamps to other notable programs...",
    date: "April 10, 2025",
    readTime: "8 min read",
    category: "Education"
  },
  {
    title: "How to Make the Most of Your Summer Break (For Students Ages 13–20)",
    excerpt: "Turn your summer break into a launchpad for success! Learn why joining Maximally's skill-focused bootcamps should be your #1 priority this summer...",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Career Development"
  },
  {
    title: "Why Real-World Skills Matter More Than Marks in 2025",
    excerpt: "The truth about marks vs. skills in today's job market. See how 87% of employers now prioritize practical skills over academic scores, and why Maximally's approach works...",
    date: "April 10, 2025",
    readTime: "10 min read",
    category: "Industry Insights"
  },
  {
    title: "Best Online Courses for Teenagers in India (Free + Paid)",
    excerpt: "A comprehensive guide to the top online learning platforms for teens. Starting with Maximally's innovative bootcamps, explore options that fit your learning style...",
    date: "April 10, 2025",
    readTime: "12 min read",
    category: "Reviews"
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
              to={post.link || 
                (post.title === "Why School Doesn't Teach You Real Life (And What We're Doing About It)"
                  ? "/blog/school-vs-life-2025"
                  : post.title === "How Maximally is Building the Leangap of India"
                    ? "/blog/maximally-leangap-2025"
                  : post.title === "Top 10 Summer Programs for Teens in India (2025 Edition)" 
                    ? "/blog/summer-programs-2025" 
                  : post.title === "How to Make the Most of Your Summer Break (For Students Ages 13–20)"
                    ? "/blog/summer-break-2025"
                  : post.title === "Why Real-World Skills Matter More Than Marks in 2025"
                    ? "/blog/real-world-skills-2025"
                  : post.title === "Best Online Courses for Teenagers in India (Free + Paid)"
                    ? "/blog/online-courses-2025"
                  : post.title === "How to Get Internships in High School (Ultimate Guide)"
                    ? "/blog/internships-2025"
                  : post.title === "How to Build Your Teen's Confidence Without Tutors or Tuitions"
                    ? "/blog/build-teen-confidence"
                  : post.title === "How to Start a Business Before You Turn 18 (No Code, No Problem!)"
                    ? "/blog/teen-business"
                  : "#")
              } 
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
