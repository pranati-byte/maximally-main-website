
import BlogPost from '@/components/BlogPost';

const SummerBreak2025 = () => {
  const content = (
    <>
      <p className="lead font-jetbrains text-lg mb-6">
        Summer break is finally here! But instead of just Netflix and naps, what if this was the summer that changed your life? The summer that gave you skills to actually stand out?
      </p>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🌟 Why Most Teens Waste Their Summer</h2>
        <p className="mb-4">Let's be honest: The average teen's summer looks like:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Sleeping till noon</li>
          <li>Scrolling for hours</li>
          <li>Gaming marathons</li>
          <li>Hanging with friends (which is important too!)</li>
          <li>Maybe a family trip</li>
        </ul>
        <p className="mb-4">And then suddenly — it's August, and what do you have to show for it?</p>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🚀 The Maximally Summer Difference</h2>
        <p className="mb-4">This summer, you can join 200 of India's most driven teens in a 7-day intense bootcamp experience that will change how you think, speak, and create.</p>
        
        <div className="pixel-border p-6 bg-maximally-blue/5 my-8">
          <h3 className="font-press-start text-xl mb-4">💡 What Makes Our Summer Bootcamp Different:</h3>
          <ul className="list-none pl-6 mb-4 space-y-4">
            <li>✅ <strong>Not a course. An experience.</strong> – No boring lectures. Pure high-energy immersion.</li>
            <li>✅ <strong>Build something real</strong> – You'll leave with a project, not just notes.</li>
            <li>✅ <strong>Elite community</strong> – Connect with ambitious peers who pull you up.</li>
            <li>✅ <strong>Future-ready skills</strong> – From AI to public speaking to startup thinking.</li>
            <li>✅ <strong>Demo day showcase</strong> – Present to industry leaders on the final day.</li>
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">📅 Your 7-Day Transformation</h2>
        <p className="mb-4">Here's what you'll experience over just one week:</p>
        
        <ul className="list-none pl-6 mb-4 space-y-4">
          <li><strong className="font-press-start">Day 1:</strong> Orientation & mindset reset</li>
          <li><strong className="font-press-start">Day 2:</strong> Entrepreneurship fundamentals</li>
          <li><strong className="font-press-start">Day 3:</strong> Digital marketing & distribution</li>
          <li><strong className="font-press-start">Day 4:</strong> AI & no-code execution</li>
          <li><strong className="font-press-start">Day 5:</strong> Public speaking & influence</li>
          <li><strong className="font-press-start">Day 6:</strong> Personal branding</li>
          <li><strong className="font-press-start">Day 7:</strong> Demo day with special guests</li>
        </ul>

        <blockquote className="pixel-border p-6 bg-maximally-red/5 my-8">
          <p className="font-press-start">
            "The average person takes 10 years to learn these skills. You'll get the foundations in 7 days."
          </p>
        </blockquote>
      </section>

      <section className="my-8">
        <h2 className="font-press-start text-2xl mb-4">🔥 Apply Now - Limited Spots</h2>
        <p className="mb-4">Remember, this isn't just another summer program. It's a career-altering inflection point.</p>
        <p className="mb-4">We select only 200 of India's most driven teens, ages 13-20.</p>
        <p className="font-press-start text-xl my-6 text-center">Don't enroll. Apply. Because we don't hand out potential. We select it.</p>
      </section>
    </>
  );

  return (
    <BlogPost
      title="How to Make the Most of Your Summer Break (For Students Ages 13–20)"
      date="April 10, 2025"
      readTime="6 min read"
      content={content}
    />
  );
};

export default SummerBreak2025;
