
import { GraduationCap, FileText, Users, Briefcase, Network, Star, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CareerLaunch = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto text-center">
        <h1 className="font-press-start text-4xl md:text-5xl lg:text-6xl text-maximally-black mb-6 leading-tight">
          Launch Your Future
        </h1>
        <p className="font-jetbrains text-xl md:text-2xl text-maximally-black/70 mb-8 max-w-3xl mx-auto">
          Build the career foundation that gets you noticed. Land opportunities that matter.
        </p>
        <Button className="pixel-button text-lg px-8 py-6">
          Kickstart Your Future
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Modules Grid */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Standout Applications</CardTitle>
              <CardDescription>Craft compelling college and internship applications that showcase your unique story and achievements.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <FileText className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Resume Building</CardTitle>
              <CardDescription>Create a professional resume that highlights your experiences, skills, and potential.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Interview Preparation</CardTitle>
              <CardDescription>Master the art of interviews with practical techniques and real-world scenarios.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Briefcase className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Portfolio Development</CardTitle>
              <CardDescription>Build a standout portfolio that demonstrates your projects and capabilities.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Network className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Networking Skills</CardTitle>
              <CardDescription>Learn to build meaningful connections and relationships in professional settings.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="pixel-border hover:translate-y-[-4px] transition-transform">
            <CardHeader>
              <Star className="h-8 w-8 text-maximally-blue mb-2" />
              <CardTitle>Personal Branding</CardTitle>
              <CardDescription>Create a unique personal brand that makes you memorable in competitive environments.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Where You'll Use This */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl md:text-3xl mb-8">Where You'll Use This</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-jetbrains">
            <div className="p-4 bg-white pixel-border">College Applications</div>
            <div className="p-4 bg-white pixel-border">Summer Internships</div>
            <div className="p-4 bg-white pixel-border">Global Fellowships</div>
            <div className="p-4 bg-white pixel-border">Research Programs</div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="font-press-start text-2xl md:text-3xl mb-8">Who This Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="pixel-border">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-maximally-blue mb-4" />
              <h3 className="font-press-start text-lg mb-2">High School Students</h3>
              <p className="text-sm text-gray-600">Planning for college and early career moves</p>
            </CardContent>
          </Card>
          <Card className="pixel-border">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-maximally-blue mb-4" />
              <h3 className="font-press-start text-lg mb-2">College Freshmen</h3>
              <p className="text-sm text-gray-600">Building professional foundations early</p>
            </CardContent>
          </Card>
          <Card className="pixel-border">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-maximally-blue mb-4" />
              <h3 className="font-press-start text-lg mb-2">Gap Year Students</h3>
              <p className="text-sm text-gray-600">Making the most of your transition year</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-2xl md:text-3xl mb-8">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>When should I start preparing my college applications?</AccordionTrigger>
              <AccordionContent>
                Ideally, start in Class 11 to build your profile. We'll help you plan and execute your application strategy well in advance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does career planning help high school students?</AccordionTrigger>
              <AccordionContent>
                Early career planning helps you make informed decisions about courses, internships, and skill development opportunities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What makes Maximally's approach different?</AccordionTrigger>
              <AccordionContent>
                We focus on practical skills and real-world applications, not just theory. You'll build a portfolio of work while learning.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-press-start text-3xl mb-6">Ready to Launch Your Career?</h2>
          <Button className="pixel-button text-lg px-8 py-6">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareerLaunch;
