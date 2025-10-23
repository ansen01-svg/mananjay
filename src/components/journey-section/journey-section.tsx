const JourneySection = () => {
  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden"
      id="journey"
    >
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="inline-block mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 leading-tight pb-2">
            Political Journey
          </h2>
          <div className="h-1 w-32 bg-orange-500 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200">
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              <p>
                {`Shri Daimary's formal political journey began in`}{" "}
                <strong className="text-orange-700">2015</strong>, though his
                involvement in social causes and governance had started much
                earlier. He chose the{" "}
                <strong className="text-orange-700">
                  {`Bodoland People's Front (BPF)`}
                </strong>{" "}
                as his political platform, inspired by its inclusive and
                progressive ideology.
              </p>
            </div>
          </div>

          {/* Vision and Beliefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-200">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {`BPF's Vision`}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {`He appreciates the BPF's vision of`}{" "}
                    <strong>
                      unity, peace, and development without discrimination of
                      caste, creed, or religion.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Core Belief Card */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-200">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    Core Political Belief
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Resources and opportunities should be{" "}
                    <strong>fairly distributed among the needy</strong>, and
                    every issue must be solved{" "}
                    <strong>
                      at the right place, at the right time, with the right
                      intent.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MLA Candidate Card - Full Width */}
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 p-8 md:p-10 rounded-2xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  MLA Candidate from Chirang Constituency
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  As an upcoming MLA candidate from Chirang Constituency, he
                  pledges to remain{" "}
                  <strong className="font-bold">
                    deeply connected with his people
                  </strong>
                  , acting not as a distant politician but as a{" "}
                  <em className="italic">guardian and guide</em> of his
                  community.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment Statement */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-orange-300">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-3">
                  A Leader for the People
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  His political journey is rooted in{" "}
                  <strong>genuine care for the community</strong>, ensuring that
                  development reaches every corner of Chirang and that{" "}
                  <strong>no one is left behind</strong> in the march towards
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
