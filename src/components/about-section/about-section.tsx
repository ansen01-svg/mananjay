"use client";

import profileImg from "@/assets/images/cr-1.jpg";
import Image from "next/image";
import { useState } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden"
      id="about"
    >
      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 leading-tight pb-2">
                Mananjay Daimary : Entrepreneur, Social Worker & Political
                Leader
              </h2>
              <div className="h-1 w-24 bg-orange-500 rounded-full" />
            </div>

            <div className="space-y-4 text-gray-700 text-base md:text-base leading-relaxed text-justify bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200">
              <p>
                I am Mananjay Daimary, a dedicated public servant and community
                leader from Chirang, Assam. With a deep commitment to social
                welfare and community development, I have spent years working
                towards the betterment of the people in the Bodoland region.
              </p>

              <p>
                {`As a representative of the Bodoland People's Front (BPF), I
                believe in inclusive governance, sustainable development, and
                empowering grassroots communities. My mission is to bridge the
                gap between policy and people, ensuring that every voice is
                heard and every concern addressed.`}
              </p>

              <p>
                Through collaborative leadership and transparent governance, I
                strive to create opportunities for youth, support farmers,
                promote education, and preserve our rich cultural heritage while
                embracing progress.
              </p>
            </div>
          </div>

          {/* Right Column - Image and Social */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-full max-w-md aspect-square">
              {/* Premium border effect */}
              <div className="absolute inset-0 rounded-full ring-2 ring-orange-400 shadow-2xl overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Mananjay Daimary"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative accent circle */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400 rounded-full blur-xl opacity-40" />
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded
              ? "max-h-[5000px] opacity-100 mt-12"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-12">
            {/* Early Life & Education */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200">
              <div className="inline-block mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600 pb-2">
                  Early Life & Education
                </h3>
                <div className="h-1 w-20 bg-orange-500 rounded-full" />
              </div>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
                <p>
                  Mananjay began his education at{" "}
                  <strong>Bengtol M.V. School</strong> and passed{" "}
                  <strong>HSLC from Debergaon H.S. School, Kokrajhar</strong>{" "}
                  with flying colours. He completed his{" "}
                  <strong>
                    B.Sc. from Kokrajhar Government College under Gauhati
                    University
                  </strong>
                  , followed by an <strong>M.Sc. in Physics</strong> from
                  Gauhati University and a{" "}
                  <strong>PGDM in Human Resources</strong> from{" "}
                  <em>IPEM, Ghaziabad (U.P.)</em>.
                </p>
                <p>
                  A bright student and natural leader, he actively participated
                  in community and leadership activities during his academic
                  years. His educational background helped him develop
                  analytical thinking and a deep understanding of human
                  development — which later became the foundation of his public
                  service philosophy.
                </p>
                <p className="font-semibold text-orange-700">
                  He strongly believes that{" "}
                  <em>
                    &quot;21st-century education and skills are the real drivers
                    of growth for any society or nation.&quot;
                  </em>
                </p>
              </div>
            </div>

            {/* Association with Hagrama Mahilary */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200">
              <div className="inline-block mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600 pb-2">
                  Association with Hagrama Mahilary and BTC Governance
                </h3>
                <div className="h-1 w-20 bg-orange-500 rounded-full" />
              </div>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
                <p>
                  Since <strong>2003</strong>, Shri Mananjay Daimary has been
                  closely associated with <strong>Shri Hagrama Mahilary</strong>
                  , Chief of BTC (Bodoland Territorial Council). Over the past{" "}
                  <strong>18 years</strong>, he has contributed immensely to the
                  development and functioning of the BTC government, gaining
                  deep insights into administration, governance, and project
                  execution.
                </p>
                <p>
                  He has{" "}
                  <strong>
                    successfully implemented numerous government projects
                  </strong>
                  , ensuring transparency, accountability, and long-term
                  community benefit. His active involvement has made him a known
                  and trusted figure in both political and administrative
                  circles of Bodoland.
                </p>
              </div>
            </div>

            {/* Entrepreneurial Journey */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200">
              <div className="inline-block mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600 pb-2">
                  Entrepreneurial & Leadership Journey
                </h3>
                <div className="h-1 w-20 bg-orange-500 rounded-full" />
              </div>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
                <p>
                  Mananjay began his entrepreneurial journey in{" "}
                  <strong>2011</strong> with zero financial resources but
                  abundant determination. Through years of perseverance, he
                  managed to execute multiple projects successfully and gained
                  strong expertise in management, finance, and execution.
                </p>
                <p>
                  He has trained under{" "}
                  <strong>several renowned personalities across India</strong>{" "}
                  in leadership, governance, and entrepreneurship. Having{" "}
                  <strong>traveled to different countries</strong>, he learned
                  global practices and continues to implement innovative ideas
                  in his own life and society.
                </p>
                <p className="font-semibold text-orange-700">
                  His business and leadership experiences have strengthened his
                  belief that{" "}
                  <em>
                    &quot;economic freedom and modern education are the twin
                    pillars of progress.&quot;
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Read More/Less Button */}
        <div className="flex justify-start mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
