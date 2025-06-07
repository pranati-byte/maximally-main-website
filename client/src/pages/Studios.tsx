
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
        <section className="py-12 sm:py-16 md:py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="font-press-start text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 sm:mb-6 text-maximally-red glitch-effect leading-tight">
              maximally studios
            </h1>
            <p className="font-press-start text-sm sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-[#FFD700] leading-relaxed">
              india's media engine for gen z founders & creators
            </p>
            <p className="font-jetbrains text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              we turn teen projects into public movements.<br className="hidden sm:block" />
              <span className="block sm:inline"> podcasts, reels, founder docs, creative chaos — welcome to the hype machine.</span>
            </p>
            <Button 
              className="font-press-start bg-maximally-red hover:bg-maximally-red/80 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg min-h-[48px] w-full sm:w-auto max-w-sm sm:max-w-none"
              onClick={() => window.location.href = 'mailto:studios@maximally.in'}
            >
              📩 get featured / collab with us
            </Button>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 sm:py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-center text-[#FFD700] leading-tight">
              🎥 WHAT WE DO
            </h2>
            <p className="font-press-start text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 text-center text-white leading-relaxed px-2">
              you build. we document. the world watches.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              <Card className="bg-black border-maximally-red hover:border-maximally-red/80 transition-colors">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎙️</div>
                  <p className="font-jetbrains text-white text-sm sm:text-base leading-relaxed">record a podcast with us</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red hover:border-maximally-red/80 transition-colors">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎬</div>
                  <p className="font-jetbrains text-white text-sm sm:text-base leading-relaxed">shoot reels or a short founder doc</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red hover:border-maximally-red/80 transition-colors">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📦</div>
                  <p className="font-jetbrains text-white text-sm sm:text-base leading-relaxed">get content made for your startup/side project</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red hover:border-maximally-red/80 transition-colors">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📢</div>
                  <p className="font-jetbrains text-white text-sm sm:text-base leading-relaxed">distribute your stuff across maximally's audience</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-maximally-red hover:border-maximally-red/80 transition-colors sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                  <p className="font-jetbrains text-white text-sm sm:text-base leading-relaxed">co-create brand stories, campaigns, or series</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="font-jetbrains text-center mt-6 sm:mt-8 text-white text-sm sm:text-base px-2">
              by teens, for the world. always real. never cringe.
            </p>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-12 sm:py-16 px-4 bg-black">
          <div className="container mx-auto">
            <h2 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-center text-[#FFD700] leading-tight">
              🧠 WHO IT'S FOR
            </h2>
            
            <p className="font-press-start text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-center leading-relaxed px-2">
              📌 if you're a young founder, creator, or just someone doing cool sh*t — we want you here.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3 sm:space-y-4 font-jetbrains text-sm sm:text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-maximally-red mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">building a product in your hostel dorm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maximally-red mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">starting a nonprofit from your bedroom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maximally-red mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">want to tell your story but don't know how</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maximally-red mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">need help turning your vibe into a real brand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maximally-red mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">just wanna make content that slaps</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center mt-6 sm:mt-8 px-2">
              <p className="font-jetbrains text-[#FFD700] mb-2 text-sm sm:text-base leading-relaxed">
                it's all free — unless you want pro-level creative help.
              </p>
              <p className="font-jetbrains text-gray-400 text-sm sm:text-base leading-relaxed">
                we offer content services too (at super affordable Gen Z prices).
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-center text-[#FFD700] leading-tight">
              ⚡ SERVICES
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[500px] border-collapse border border-maximally-red">
                  <thead>
                    <tr className="bg-maximally-red">
                      <th className="font-press-start p-2 sm:p-3 md:p-4 text-left border border-maximally-red text-xs sm:text-sm md:text-base">What You Get</th>
                      <th className="font-press-start p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-xs sm:text-sm md:text-base">Free</th>
                      <th className="font-press-start p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-xs sm:text-sm md:text-base">Paid</th>
                    </tr>
                  </thead>
                  <tbody className="font-jetbrains">
                    <tr>
                      <td className="p-2 sm:p-3 md:p-4 border border-maximally-red text-xs sm:text-sm md:text-base">Podcast Collab</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-green-400 text-sm sm:text-base">✅</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-sm sm:text-base">—</td>
                    </tr>
                    <tr className="bg-gray-800">
                      <td className="p-2 sm:p-3 md:p-4 border border-maximally-red text-xs sm:text-sm md:text-base">Insta/YouTube Feature</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-green-400 text-sm sm:text-base">✅</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-sm sm:text-base">—</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3 md:p-4 border border-maximally-red text-xs sm:text-sm md:text-base">Story Reels / Founder Docs</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-sm sm:text-base">—</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-green-400 text-sm sm:text-base">✅</td>
                    </tr>
                    <tr className="bg-gray-800">
                      <td className="p-2 sm:p-3 md:p-4 border border-maximally-red text-xs sm:text-sm md:text-base">Branding Kits / Promo Edits</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-sm sm:text-base">—</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-green-400 text-sm sm:text-base">✅</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3 md:p-4 border border-maximally-red text-xs sm:text-sm md:text-base">Growth Help / Distribution</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-green-400 text-sm sm:text-base">✅</td>
                      <td className="p-2 sm:p-3 md:p-4 text-center border border-maximally-red text-green-400 text-sm sm:text-base">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="font-jetbrains text-xs sm:text-sm text-gray-400 text-center mt-3 sm:mt-4 px-2 leading-relaxed">
                our paid services help fund free creator collabs. support the builder ecosystem ✊
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 sm:py-16 px-4 bg-black">
          <div className="container mx-auto text-center">
            <h2 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-[#FFD700] leading-tight">
              🏆 OUR VISION
            </h2>
            
            <p className="font-press-start text-sm sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed px-2">
              we want maximally studios to become the home of gen z founders and creative rebels.
            </p>
            
            <p className="font-jetbrains text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
              from fashion startups to meme pages to solo coders building AI in tier 3 towns —<br className="hidden sm:block" />
              <span className="block sm:inline"> this is your studio. your mic. your moment.</span>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="font-press-start text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-maximally-red leading-tight">
              📩 let's create together.
            </h2>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center max-w-2xl mx-auto">
              <Button 
                className="font-press-start bg-maximally-red hover:bg-maximally-red/80 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full md:w-auto min-h-[48px]"
                onClick={() => window.location.href = 'mailto:studios@maximally.in'}
              >
                get featured →
              </Button>
              
              <Button 
                variant="outline"
                className="font-press-start border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base w-full md:w-auto min-h-[48px]"
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
