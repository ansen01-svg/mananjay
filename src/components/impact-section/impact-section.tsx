import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden" id="impact">
      {/* Premium decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-200/30 to-green-400/20 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-base md:text-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-lg">
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
              <div className="absolute inset-0 rounded-full border-4 border-orange-400 flex items-center justify-center shadow-2xl bg-white p-12">
                <div className="text-center">
                  <h2 className="text-5xl font-medium text-orange-600 mb-4">
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
        <Dialog open={!!expandedCard} onOpenChange={() => setExpandedCard(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-orange-50/30 to-green-50/30 border-2 border-orange-200/50">
            {cardsData.map((card) => {
              if (card.id === expandedCard) {
                return (
                  <div key={card.id}>
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent mb-2">
                        {card.title}
                      </DialogTitle>
                      <p className="text-xl text-green-700 font-semibold">
                        {card.subtitle}
                      </p>
                      <p className="text-gray-600 mt-2">{card.description}</p>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {card.details.map((detail, index) => (
                        <div key={index} className="bg-gradient-to-br from-orange-50 to-green-50 p-6 rounded-lg shadow-md border border-orange-200/50">
                          <p className="text-gray-700 leading-relaxed text-justify">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </DialogContent>
        </Dialog>
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
      className={`border-[2px] rounded-3xl p-4 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
        isExpanded
          ? "bg-orange-500 border-orange-500 text-white shadow-2xl shadow-orange-500/40"
          : "bg-white/80 backdrop-blur-sm border-orange-300 hover:border-orange-500 hover:shadow-xl shadow-lg"
      }`}
      onClick={onToggle}
    >
      <div className="text-center">
        <h3
          className={`text-xl font-medium mb-3 ${
            isExpanded ? "text-white drop-shadow-lg" : "text-orange-600"
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
                ? "bg-white text-orange-600 shadow-lg"
                : "bg-orange-100 text-orange-700 hover:bg-orange-500 hover:text-white shadow-md"
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
