
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const Studios = () => {
  return (
    <>
      <SEO 
        title="Studios - Maximally Studios | India's Media Engine for Gen Z Founders"
        description="We turn teen projects into public movements. Podcasts, reels, founder docs, creative chaos — welcome to the hype machine."
        keywords="maximally studios, gen z founders, teen creators, podcasts, content creation, startup media"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="font-press-start text-4xl md:text-6xl mb-6 text-maximally-red glitch-effect">
              maximally studios
            </h1>
            <p className="font-press-start text-xl md:text-2xl mb-4 text-[#FFD700]">
              india's media engine for gen z founders & creators
            </p>
            <p className="font-jetbrains text-lg mb-8 max-w-2xl mx-auto">
              we turn teen projects into public movements.<br />
              podcasts, reels, founder docs, creative chaos — welcome to the hype machine.
            </p>
            <Button 
              className="font-press-start bg-maximally-red hover:bg-maximally-red/80 text-white px-8 py-4 text-lg"
              onClick={() => window.location.href = 'mailto:studios@maximally.in'}
            >
              📩 get featured / collab with us
            </Button>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="font-press-start text-3xl mb-4 text-center text-[#FFD700]">
              🎥 WHAT WE DO
            </h2>
            <p className="font-press-start text-xl mb-12 text-center text-white">
              you build. we document. the world watches.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-black border-maximally-red">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎙️</div>
                  <p className="font-jetbrains text-white">record a podcast with us</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <p className="font-jetbrains text-white">shoot reels or a short founder doc</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📦</div>
                  <p className="font-jetbrains text-white">get content made for your startup/side project</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📢</div>
                  <p className="font-jetbrains text-white">distribute your stuff across maximally's audience</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <p className="font-jetbrains text-white">co-create brand stories, campaigns, or series</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="font-jetbrains text-center mt-8 text-white">
              by teens, for the world. always real. never cringe.
            </p>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto">
            <h2 className="font-press-start text-3xl mb-8 text-center text-[#FFD700]">
              🧠 WHO IT'S FOR
            </h2>
            
            <p className="font-press-start text-xl mb-8 text-center">
              📌 if you're a young founder, creator, or just someone doing cool sh*t — we want you here.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4 font-jetbrains text-lg">
                <li className="flex items-center">
                  <span className="text-maximally-red mr-3">•</span>
                  building a product in your hostel dorm
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-red mr-3">•</span>
                  starting a nonprofit from your bedroom
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-red mr-3">•</span>
                  want to tell your story but don't know how
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-red mr-3">•</span>
                  need help turning your vibe into a real brand
                </li>
                <li className="flex items-center">
                  <span className="text-maximally-red mr-3">•</span>
                  just wanna make content that slaps
                </li>
              </ul>
            </div>
            
            <div className="text-center mt-8">
              <p className="font-jetbrains text-[#FFD700] mb-2">
                it's all free — unless you want pro-level creative help.
              </p>
              <p className="font-jetbrains text-gray-400">
                we offer content services too (at super affordable Gen Z prices).
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="font-press-start text-3xl mb-8 text-center text-[#FFD700]">
              ⚡ SERVICES
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-maximally-red">
                  <thead>
                    <tr className="bg-maximally-red">
                      <th className="font-press-start p-4 text-left border border-maximally-red">What You Get</th>
                      <th className="font-press-start p-4 text-center border border-maximally-red">Free</th>
                      <th className="font-press-start p-4 text-center border border-maximally-red">Paid</th>
                    </tr>
                  </thead>
                  <tbody className="font-jetbrains">
                    <tr>
                      <td className="p-4 border border-maximally-red">Podcast Collab</td>
                      <td className="p-4 text-center border border-maximally-red text-green-400">✅</td>
                      <td className="p-4 text-center border border-maximally-red">—</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="p-4 border border-maximally-red">Insta/YouTube Feature</td>
                      <td className="p-4 text-center border border-maximally-red text-green-400">✅</td>
                      <td className="p-4 text-center border border-maximally-red">—</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-maximally-red">Story Reels / Founder Docs</td>
                      <td className="p-4 text-center border border-maximally-red">—</td>
                      <td className="p-4 text-center border border-maximally-red text-green-400">✅</td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="p-4 border border-maximally-red">Branding Kits / Promo Edits</td>
                      <td className="p-4 text-center border border-maximally-red">—</td>
                      <td className="p-4 text-center border border-maximally-red text-green-400">✅</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-maximally-red">Growth Help / Distribution</td>
                      <td className="p-4 text-center border border-maximally-red text-green-400">✅</td>
                      <td className="p-4 text-center border border-maximally-red text-green-400">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="font-jetbrains text-sm text-gray-400 text-center mt-4">
                our paid services help fund free creator collabs. support the builder ecosystem ✊
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto text-center">
            <h2 className="font-press-start text-3xl mb-8 text-[#FFD700]">
              🏆 OUR VISION
            </h2>
            
            <p className="font-press-start text-xl mb-6">
              we want maximally studios to become the home of gen z founders and creative rebels.
            </p>
            
            <p className="font-jetbrains text-lg max-w-3xl mx-auto">
              from fashion startups to meme pages to solo coders building AI in tier 3 towns —<br />
              this is your studio. your mic. your moment.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="font-press-start text-4xl mb-8 text-maximally-red">
              📩 let's create together.
            </h2>
            
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Button 
                className="font-press-start bg-maximally-red hover:bg-maximally-red/80 text-white px-8 py-4 text-lg w-full md:w-auto"
                onClick={() => window.location.href = 'mailto:studios@maximally.in'}
              >
                get featured →
              </Button>
              
              <Button 
                variant="outline"
                className="font-press-start border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-6 py-4 w-full md:w-auto"
                onClick={() => window.location.href = 'mailto:studios@maximally.in'}
              >
                want content help? →
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Studios;
