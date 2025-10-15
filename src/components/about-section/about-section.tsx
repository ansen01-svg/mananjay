"use client";

import profileImg from "@/assets/images/cr-1.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden" id="about">
      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 leading-tight pb-2">
                Mananjay Daimary : An Introduction
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
              <div className="absolute inset-0 rounded-full ring-4 ring-orange-400 shadow-2xl overflow-hidden">
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
      </div>
    </section>
  );
};

export default AboutSection;
