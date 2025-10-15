import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

const cardsData: CardData[] = [
  {
    id: "peoples-person",
    title: "People's Person",
    subtitle: "Political Leader & Candidate",
    description: "2020 - Present",
    details: [
      "Leading grassroots initiatives and representing the interests of Chirang constituency. Focusing on agricultural development, youth employment, infrastructure improvement, and cultural preservation.",
      "Working closely with community leaders to address local challenges and implement sustainable solutions.",
      "Built strong connections with constituents through consistent engagement and accessible leadership approach.",
    ],
  },
  {
    id: "facilitator",
    title: "Facilitator of Change",
    subtitle: "Program Director",
    description: "2015 - 2020",
    details: [
      "Spearheaded multiple community development initiatives across rural areas. Implemented education programs, healthcare camps, and skill development workshops.",
      "Successfully coordinated with local organizations to provide resources and support to underprivileged communities.",
      "Demonstrated exemplary leadership in driving positive change and empowering local communities.",
    ],
  },
  {
    id: "contributor",
    title: "Contributor in Nation Building",
    subtitle: "Volunteer Coordinator",
    description: "2012 - 2015",
    details: [
      "Organized relief efforts during natural disasters, coordinated volunteer activities, and managed distribution of essential supplies.",
      "Worked with youth groups to promote environmental conservation and cultural activities in local villages.",
      "Fostered community resilience and cultural preservation through dedicated grassroots work.",
    ],
  },
  {
    id: "organization-builder",
    title: "Organization Builder",
    subtitle: "Community Leadership",
    description: "Multiple Initiatives",
    details: [
      "Building strong community networks and establishing frameworks for sustainable local development.",
      "Creating platforms for youth engagement and skill development programs.",
      "Developing partnerships with organizations to maximize impact and resource efficiency.",
    ],
  },
];

const ImpactSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-white" id="impact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <button className="bg-orange-default text-white px-8 py-3 rounded-full text-base md:text-lg font-bold uppercase tracking-wider hover:bg-orange-light transition-colors">
            IMPACT
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column - First Two Cards */}
          <div className="space-y-4">
            {cardsData.slice(0, 2).map((card) => (
              <ImpactCard
                key={card.id}
                card={card}
                isExpanded={expandedCard === card.id}
                onToggle={() => toggleCard(card.id)}
              />
            ))}
          </div>

          {/* Center Column - Circle */}
          <div className="flex items-center justify-center lg:py-8">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full border-[1px] border-orange-default flex items-center justify-center p-12">
                <div className="text-center">
                  <h2 className="text-5xl font-medium text-orange-default mb-4">
                    5 Years in Public Service
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Journey from grassroots activism to community leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Last Two Cards */}
          <div className="space-y-4">
            {cardsData.slice(2, 4).map((card) => (
              <ImpactCard
                key={card.id}
                card={card}
                isExpanded={expandedCard === card.id}
                onToggle={() => toggleCard(card.id)}
              />
            ))}
          </div>
        </div>

        {/* Expanded Content Modal */}
        {expandedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setExpandedCard(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                ×
              </button>

              {cardsData.map((card) => {
                if (card.id === expandedCard) {
                  return (
                    <div
                      key={card.id}
                      className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                      <div className="md:col-span-3 mb-6">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                          {card.title}
                        </h2>
                        <p className="text-xl text-[#FF8B6A] font-semibold">
                          {card.subtitle}
                        </p>
                        <p className="text-gray-600 mt-2">{card.description}</p>
                      </div>
                      {card.details.map((detail, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed text-justify">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ImpactCardProps {
  card: CardData;
  isExpanded: boolean;
  onToggle: () => void;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  card,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`border-[1px] border-orange-default rounded-3xl p-4 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl ${
        isExpanded
          ? "bg-[#FF8B6A] border-[#FF8B6A] text-white"
          : "bg-white border-gray-200 hover:border-[#FF8B6A]"
      }`}
      onClick={onToggle}
    >
      <div className="text-center">
        <h3
          className={`text-xl font-medium mb-3 ${
            isExpanded ? "text-white" : "text-[#FF8B6A]"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`text-sm font-semibold mb-2 ${
            isExpanded ? "text-white opacity-90" : "text-gray-600"
          }`}
        >
          {card.subtitle}
        </p>
        <p
          className={`text-sm mb-6 ${
            isExpanded ? "text-white opacity-80" : "text-gray-500"
          }`}
        >
          {card.description}
        </p>

        <div className="flex justify-center">
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isExpanded
                ? "bg-white text-[#FF8B6A]"
                : "bg-gray-100 text-[#FF8B6A] hover:bg-[#FF8B6A] hover:text-white"
            }`}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
