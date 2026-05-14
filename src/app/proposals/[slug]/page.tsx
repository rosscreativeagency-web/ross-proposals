import { notFound } from "next/navigation";
import { getProposalBySlug } from "@/content/proposals";
import { ProposalHero } from "@/components/proposal/ProposalHero";
import { DividerSection } from "@/components/proposal/DividerSection";
import { StatementSection } from "@/components/proposal/StatementSection";
import { CardsSection } from "@/components/proposal/CardsSection";

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
          return (
            <ProposalHero
              key={index}
              eyebrow={section.eyebrow}
              title={section.title}
              subtitle={section.subtitle}
            />
          );
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
          return (
            <CardsSection
              key={index}
              eyebrow={section.eyebrow}
              title={section.title}
              text={section.text}
              cards={section.cards}
            />
          );
        }

        return null;
      })}
    </main>
  );
}
