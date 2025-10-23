import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: {
    intro: string;
    highlights?: Array<{ label: string; detail: string }>;
    details: string[];
    quote?: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "youth-organizations",
    title: "Founder of Youth Organizations",
    subtitle: "Youth Leadership & Student Empowerment",
    description: "Building Future Leaders",
    content: {
      intro:
        "Shri Mananjay Daimary is a dynamic youth leader who has founded two important student organizations:",
      highlights: [
        {
          label: "Bodoland Students Union (BSU)",
          detail: "Founded on 17th January 2014",
        },
        {
          label: "Bodo National Students Union (BONSU)",
          detail: "Founded on 7th February 2022",
        },
      ],
      details: [
        "He currently serves as the Chief Advisor of BONSU.",
        "Through these organizations, he has inspired thousands of students and youths to engage in social service, education, leadership, and community development.",
        "These unions have become strong platforms for empowering young minds across the Bodoland Territorial Region and beyond.",
      ],
    },
  },
  {
    id: "social-humanitarian",
    title: "Social Work & Humanitarian Contributions",
    subtitle: "Serving Humanity with Compassion",
    description: "Making Real Impact",
    content: {
      intro:
        "Beyond his political and business life, Mananjay's heart lies in serving humanity. As the Founder of Adventure NGO and Mananjay Daimary Social Services Foundation, he has carried out numerous initiatives in the fields of education, youth empowerment, sports, and environment.",
      details: [
        "During the COVID-19 lockdown in 2020, he personally helped more than 600 people from Assam who were stranded outside the state, spending over ₹20 lakhs of his own money to ensure their safety, transport, and basic needs. This selfless act earned him immense respect and gratitude from people across Assam.",
        "Sponsoring mountaineering and adventure sports programs for BTC youth.",
        "Promoting tree plantation and eco-awareness campaigns.",
        "Supporting young entrepreneurs and guiding them in their start-up journeys.",
        "Advocating for education, skill development, and women empowerment as tools of real progress.",
      ],
      quote:
        "A true leader uplifts others and builds a society where every person has dignity, opportunity, and hope.",
    },
  },
];

const ImpactSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden"
      id="impact"
    >
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

        {/* Main Grid - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Column - First Card */}
          <div className="flex items-center justify-center">
            <ImpactCard
              card={cardsData[0]}
              isExpanded={expandedCard === cardsData[0].id}
              onToggle={() => toggleCard(cardsData[0].id)}
            />
          </div>

          {/* Center Column - Circle */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full border-2 border-orange-400 flex items-center justify-center shadow-2xl bg-white p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl md:text-5xl font-medium text-orange-600 mb-4">
                    10 Years in Public Service
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Journey from grassroots activism to community leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Second Card */}
          <div className="flex items-center justify-center">
            <ImpactCard
              card={cardsData[1]}
              isExpanded={expandedCard === cardsData[1].id}
              onToggle={() => toggleCard(cardsData[1].id)}
            />
          </div>
        </div>

        {/* Expanded Content Modal */}
        <Dialog
          open={!!expandedCard}
          onOpenChange={() => setExpandedCard(null)}
        >
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-orange-50/30 to-green-50/30 border-2 border-orange-200/50">
            {cardsData.map((card) => {
              if (card.id === expandedCard) {
                return (
                  <div key={card.id}>
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent mb-2">
                        {card.title}
                      </DialogTitle>
                      <p className="text-lg md:text-xl text-green-700 font-semibold">
                        {card.subtitle}
                      </p>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Introduction */}
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200">
                        <p className="text-gray-700 text-base leading-relaxed text-justify">
                          {card.content.intro}
                        </p>
                      </div>

                      {/* Highlights (if available) */}
                      {card.content.highlights && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {card.content.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-orange-100 to-green-50 p-6 rounded-2xl shadow-md border border-orange-300"
                            >
                              <h4 className="text-lg font-bold text-orange-700 mb-2">
                                {index + 1}. {highlight.label}
                              </h4>
                              <p className="text-gray-600 italic">
                                {highlight.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Details */}
                      <div className="space-y-4">
                        {card.content.details.map((detail, index) => (
                          <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-orange-200"
                          >
                            <p className="text-gray-700 text-base leading-relaxed text-justify">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Quote (if available) */}
                      {card.content.quote && (
                        <div className="bg-gradient-to-r from-orange-500 to-green-600 p-8 rounded-2xl shadow-2xl">
                          <p className="text-white text-lg md:text-xl font-semibold text-center italic leading-relaxed">
                            &quot;{card.content.quote}&quot;
                          </p>
                        </div>
                      )}
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
      className={`w-full max-w-sm border-[1px] rounded-3xl p-6 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
        isExpanded
          ? "bg-orange-500 border-orange-500 text-white shadow-2xl shadow-orange-500/40"
          : "bg-white/80 backdrop-blur-sm border-orange-300 hover:border-orange-500 hover:shadow-xl shadow-lg"
      }`}
      onClick={onToggle}
    >
      <div className="text-center">
        <h3
          className={`text-xl md:text-2xl font-medium mb-3 ${
            isExpanded ? "text-white drop-shadow-lg" : "text-orange-600"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`text-sm md:text-base font-semibold mb-2 ${
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
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isExpanded
                ? "bg-white text-orange-600 shadow-lg"
                : "bg-orange-100 text-orange-700 hover:bg-orange-500 hover:text-white shadow-md"
            }`}
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
