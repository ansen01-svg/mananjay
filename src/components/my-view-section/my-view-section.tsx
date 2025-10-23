import {
  Award,
  Building2,
  GraduationCap,
  Hospital,
  Lightbulb,
  Sprout,
  TrendingUp,
  Users2,
} from "lucide-react";
import Image from "next/image";

// Import images
import visionImg1 from "@/assets/images/cr-1.jpg";
import visionImg2 from "@/assets/images/cr-2.jpg";

const VisionSection = () => {
  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden"
      id="my-view"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Vision for Chirang & Bodoland */}
        <div>
          <div className="inline-block mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 leading-tight pb-2">
              Vision for Chirang & Bodoland
            </h2>
            <div className="h-1 w-32 bg-orange-500 rounded-full" />
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Shri Daimary envisions a{" "}
                <strong className="text-orange-700">
                  modern, self-reliant, and sustainable Bodoland
                </strong>
                , where tradition and progress coexist. His key goals include:
              </p>
            </div>

            {/* Key Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Goal 1 */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500 rounded-full flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-700 mb-2">
                      Infrastructure & Institutions
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Strengthening{" "}
                      <strong>infrastructure and core institutions</strong> for
                      long-term growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-600 rounded-full flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-700 mb-2">
                      Tourism & Education Hub
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Developing{" "}
                      <strong>Chirang as a tourism and education hub</strong>{" "}
                      for Northeast India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 3 */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500 rounded-full flex-shrink-0">
                    <Hospital className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-700 mb-2">
                      Medical Tourism
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Establishing a <strong>medical tourism hub</strong> with
                      Ayurvedic and wellness centers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 4 */}
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-600 rounded-full flex-shrink-0">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-700 mb-2">
                      Agriculture & Markets
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Promoting{" "}
                      <strong>
                        agriculture, entrepreneurship, and global market access
                      </strong>{" "}
                      for local products.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 5 */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500 rounded-full flex-shrink-0">
                    <Users2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-700 mb-2">
                      Mass Employment
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Creating <strong>mass employment opportunities</strong>{" "}
                      through skill-based education and innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* All-round Development */}
              <div className="bg-gradient-to-r from-orange-500 to-green-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      All-Round Development
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      From individual growth to national contribution and global
                      recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={visionImg1}
              alt="Leadership"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 leading-tight pb-2">
                Leadership Philosophy
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To Mananjay,{" "}
                <strong className="text-orange-700">
                  leadership is about innovation, empathy, and results.
                </strong>
              </p>

              <div className="bg-gradient-to-br from-orange-100 to-green-50 p-6 rounded-xl border-l-4 border-orange-500">
                <Lightbulb className="w-8 h-8 text-orange-600 mb-3" />
                <p className="text-gray-700 italic text-base leading-relaxed">
                  &quot;Leadership is the art of solving problems and leaving a
                  positive impression in people&apos;s hearts.&quot;
                </p>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mt-4">
                His motivation comes from his inner drive to{" "}
                <strong>
                  serve, improve lives, and shape the next generation of leaders
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Message to the Youth */}
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-orange-600 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Message to the Youth
            </h2>
          </div>

          <div className="space-y-6 text-white">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <p className="text-lg md:text-xl leading-relaxed italic">
                &quot;Youth are the torchbearers of tomorrow. Don&apos;t waste
                your energy on unproductive activities — instead, focus on
                learning, skill development, and innovation. Love your land,
                respect your roots, and work for the development of your
                region.&quot;
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
              He continuously motivates young people to acquire{" "}
              <strong className="font-bold">21st-century skills</strong>, engage
              in <strong className="font-bold">entrepreneurial thinking</strong>
              , and contribute to{" "}
              <strong className="font-bold">nation-building</strong>.
            </p>
          </div>
        </div>

        {/* Recognition & Legacy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            {/* Recognition */}
            <div>
              <div className="inline-block mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-700 leading-tight pb-2">
                  Recognition & People&apos;s Support
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-orange-500 rounded-full" />
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Mananjay humbly considers{" "}
                    <strong className="text-green-700">
                      people&apos;s love and trust
                    </strong>{" "}
                    as his greatest recognition. Through 18 years of social and
                    administrative engagement, he has earned respect as a{" "}
                    <strong>visionary, mentor, and reformer</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-orange-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-base font-semibold">
                    He believes that{" "}
                    <strong className="text-green-700">
                      2026 will be the turning point
                    </strong>{" "}
                    in his political career, marking his transformation into a
                    people&apos;s representative devoted to inclusive
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Legacy */}
            <div>
              <div className="inline-block mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 leading-tight pb-2">
                  Legacy & Remembrance
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-green-600 p-6 rounded-2xl shadow-xl">
                <Award className="w-10 h-10 text-white mb-4" />
                <p className="text-white text-lg md:text-xl leading-relaxed italic">
                  &quot;I want to be remembered as a philanthropist,
                  socio-economic reformer, educationist, and people&apos;s
                  leader — someone who dedicated his life to building a
                  prosperous and educated Bodoland.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src={visionImg2}
              alt="Recognition"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* In Summary */}
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-orange-300">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600">
              In Summary
            </h2>
          </div>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg md:text-xl leading-relaxed">
              <strong className="text-orange-700">Shri Mananjay Daimary</strong>{" "}
              stands as one of the most promising leaders of Assam&apos;s new
              generation — an{" "}
              <strong className="text-green-700">
                entrepreneur with vision, a social worker with compassion, and a
                leader with integrity
              </strong>
              .
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              From a small village in Bengtol to the frontline of politics and
              public service, his journey symbolizes{" "}
              <strong className="text-orange-700">
                hope, courage, and commitment
              </strong>{" "}
              to building a better society for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
