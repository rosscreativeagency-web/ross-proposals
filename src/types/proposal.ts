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
    }
  | {
      type: "timeline";
      eyebrow?: string;
      title: string;
      text?: string;
      items: {
        phase: string;
        title: string;
        text: string;
      }[];
    }
  | {
      type: "pricing";
      eyebrow?: string;
      title: string;
      text?: string;
      items: {
        service: string;
        description: string;
        price: string;
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
