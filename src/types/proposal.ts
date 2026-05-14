export type ProposalSection =
  | {
      type: "hero";
      eyebrow?: string;
      title: string;
      subtitle?: string;
    }
  | {
      type: "divider";
      title: string;
      text?: string;
    }
  | {
      type: "statement";
      title: string;
      text: string;
    }
  | {
      type: "cards";
      eyebrow?: string;
      title: string;
      text?: string;
      cards: {
        title: string;
        text: string;
      }[];
    };

export type Proposal = {
  slug: string;
  client: string;
  title: string;
  description: string;
  theme: "dark" | "light" | "premium";
  sections: ProposalSection[];
};
