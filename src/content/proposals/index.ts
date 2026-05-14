import { spmProposal } from "./spm";

export const proposals = [spmProposal];

export function getProposalBySlug(slug: string) {
  return proposals.find((proposal) => proposal.slug === slug);
}
