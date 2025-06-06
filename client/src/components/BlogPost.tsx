
import { CalendarDays, Clock, Share2 } from 'lucide-react';
import { Button } from './ui/button';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const BlogPost = ({ title, date, readTime, content }: BlogPostProps) => {
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-press-start text-4xl md:text-5xl text-maximally-black mb-6 leading-tight">
        {title}
      </h1>
      
      <div className="flex items-center gap-6 mb-8 text-maximally-black/60 font-jetbrains">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {date}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {readTime}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={sharePost}
          className="ml-auto"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      <div className="prose prose-lg max-w-none font-jetbrains">
        {content}
      </div>
    </article>
  );
};

export default BlogPost;
