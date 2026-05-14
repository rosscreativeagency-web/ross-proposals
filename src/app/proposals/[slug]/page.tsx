import { notFound } from "next/navigation";
import { getProposalBySlug } from "@/content/proposals";

import { ProposalHero } from "@/components/proposal/ProposalHero";
import { DividerSection } from "@/components/proposal/DividerSection";
import { StatementSection } from "@/components/proposal/StatementSection";
import { CardsSection } from "@/components/proposal/CardsSection";
import { TimelineSection } from "@/components/proposal/TimelineSection";
import { PricingSection } from "@/components/proposal/PricingSection";
import { MediaSection } from "@/components/proposal/MediaSection";
import { CTASection } from "@/components/proposal/CTASection";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProposalPage({ params }: PageProps) {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-black">
      {proposal.sections.map((section, index) => {
        if (section.type === "hero") {
          return <ProposalHero key={index} {...section} />;
        }

        if (section.type === "divider") {
          return (
            <DividerSection
              key={index}
              title={section.title}
              text={section.text}
            />
          );
        }

        if (section.type === "statement") {
          return (
            <StatementSection
              key={index}
              title={section.title}
              text={section.text}
            />
          );
        }

        if (section.type === "cards") {
          return <CardsSection key={index} {...section} />;
        }

        if (section.type === "timeline") {
          return <TimelineSection key={index} {...section} />;
        }

        if (section.type === "pricing") {
          return <PricingSection key={index} {...section} />;
        }

        if (section.type === "media") {
          return <MediaSection key={index} {...section} />;
        }

        if (section.type === "cta") {
          return <CTASection key={index} {...section} />;
        }

        return null;
      })}
    </main>
  );
}
