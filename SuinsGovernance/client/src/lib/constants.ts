export const EXTERNAL_LINKS = {
  SUINS_WEBSITE: "https://suins.io",
  SUINS_DOCS: "https://docs.suins.io",
  SUINS_DAO_DOCS: "https://docs.suins.io/dao",
  SUINS_FORUM: "https://suins.discourse.group/latest",
  SUINS_DISCORD: "https://discord.gg/69te6EwCxN",
  SUINS_GITHUB: "https://github.com/SuiNS",
  SUINS_TWITTER: "https://x.com/SuiNSdapp",
  SUINS_PROPOSALS: "https://docs.suins.io/dao/proposals",
  SUISCAN_DOMAINS: "https://suiscan.xyz/mainnet/nfts/domains",
  SUINS_VOTE: "https://vote.suins.io/",
};

export const DAO_STATS = [];

export const GOVERNANCE_FEATURES = [
  {
    title: "Community Led",
    description:
      "SuiNS is transitioning to full community governance where all major decisions are made by SuiNS name holders through transparent voting processes.",
    icon: "Users",
  },
  {
    title: "On-Chain Governance",
    description:
      "All governance decisions are executed on-chain with full transparency. Proposals, voting, and implementations are permanently recorded on the Sui blockchain.",
    icon: "ShieldCheck",
  },
  {
    title: "Proposal Process",
    description:
      "Anyone can submit improvement proposals for discussion. After refinement, proposals move to formal voting where SuiNS name holders can participate.",
    icon: "Clock",
  },
];

export const GOVERNANCE_STRUCTURE = [
  {
    title: "Community Forum",
    description: "Open to all for discussion and informal proposal submission.",
    icon: "Sparkles",
  },
  {
    title: "Technical Committee",
    description:
      "Reviews and refines technical proposals for implementation viability.",
    icon: "Check",
  },
  {
    title: "Voting Members",
    description:
      "All SuiNS name holders can vote on formal proposals based on their holdings.",
    icon: "Scale",
  },
];

export const PARTICIPATION_STEPS = [
  {
    number: 1,
    title: "Get a SuiNS Name",
    description:
      "Register a SuiNS name to establish your identity and gain voting rights in the DAO. Your voting power is tied to your name holdings.",
    cta: {
      text: "Get a SuiNS Name",
      link: "https://suins.io",
    },
  },
  {
    number: 2,
    title: "Join the Discussion",
    description:
      "Participate in forum discussions, Discord channels, and community calls to share your ideas and feedback on proposals.",
    cta: {
      text: "Join Discord",
      link: "https://discord.gg/69te6EwCxN",
    },
  },
  {
    number: 3,
    title: "Vote on Proposals",
    description:
      "Review active proposals and cast your vote directly through the governance portal. Each proposal includes detailed information and discussion.",
    cta: {
      text: "Vote on Proposals",
      link: "https://vote.suins.io/",
    },
  },
];

export const ADVANCED_PARTICIPATION = [
  {
    title: "Submit Proposals",
    description:
      "Create and submit formal improvement proposals for community vote.",
    icon: "PenLine",
  },
  {
    title: "Contribute Code",
    description:
      "Help implement approved proposals through code contributions.",
    icon: "Code",
  },
  {
    title: "Moderate Forums",
    description:
      "Help facilitate productive discussions in community channels.",
    icon: "MessageSquare",
  },
  {
    title: "Join Working Groups",
    description:
      "Participate in specialized teams focused on specific aspects of SuiNS.",
    icon: "Building",
  },
];

export const RESOURCES = [
  {
    title: "SuiNS DAO Constitution",
    description:
      "The foundational document outlining the purpose, principles, and rules of SuiNS governance.",
    icon: "FileText",
    link: {
      text: "Read Document",
      url: "https://docs.suins.io/dao",
    },
  },
  {
    title: "Proposal Process Guide",
    description:
      "Detailed explanation of how proposals are created, discussed, voted on, and implemented.",
    icon: "File",
    link: {
      text: "View Guide",
      url: "https://vote.suins.io/",
    },
  },

  {
    title: "Voting Guidelines",
    description:
      "Explanation of voting mechanisms, thresholds for proposal approval, and voting power calculation.",
    icon: "BadgeCheck",
    link: {
      text: "Read Guidelines",
      url: "https://vote.suins.io/",
    },
  },
];

export const FORUM_TOPICS = [];

export const FAQ_ITEMS = [
  {
    question: "What is SuiNS DAO?",
    answer:
      "SuiNS DAO (Decentralized Autonomous Organization) is the governance body for the Sui Name Service. It enables community members who own SuiNS names to participate in decision-making regarding the protocol's development, treasury management, and future direction.",
  },
  {
    question: "How do I become eligible to vote?",
    answer:
      "To participate in SuiNS governance voting, you need to own at least one SuiNS name. Your voting power is determined by a formula that considers the number of names you own, their quality (length, character type), and the duration of ownership. Connect your wallet to the governance portal to see your voting power.",
  },
  {
    question: "What types of proposals can be submitted?",
    answer: `The SuiNS DAO accepts several types of proposals:
      
• Sui Improvement Proposals (SIPs) - Technical changes to the protocol
• Treasury Proposals - How to allocate or use DAO funds
• Governance Proposals - Changes to governance rules and processes
• Partnership Proposals - Formal collaborations with other projects
• Community Proposals - Other initiatives that benefit the ecosystem`,
  },
  {
    question: "What is the proposal lifecycle?",
    answer: `The SuiNS proposal process follows these stages:

1. Discussion - Initial forum discussion to gather feedback
2. Drafting - Formal proposal creation following templates
3. Review - Technical committee reviews feasibility
4. Temperature Check - Informal poll for community sentiment
5. Formal Voting - On-chain voting by eligible participants
6. Implementation - Successful proposals are executed`,
  },

  {
    question: "Can I delegate my voting power?",
    answer:
      "Yes, SuiNS governance supports delegation. You can delegate your voting power to trusted community members who will vote on your behalf. This is useful if you want to participate in governance but don't have time to review all proposals. You can change your delegation or vote directly at any time.",
  },
];

export const FOOTER_LINKS = {
  Resources: [
    { name: "Documentation", href: "https://docs.suins.io/" },
    { name: "DAO Constitution", href: "https://docs.suins.io/dao" },
    { name: "Community Forum", href: "https://suins.discourse.group/latest" },
    { name: "Proposal Templates", href: "https://vote.suins.io/" },
  ],
  Governance: [
    { name: "Active Proposals", href: "https://vote.suins.io/" },

    { name: "Voting Portal", href: "https://vote.suins.io/" },
    { name: "Governance Calendar", href: "https://vote.suins.io/" },
  ],
  Community: [
    { name: "Discord", href: "https://discord.gg/69te6EwCxN" },
    { name: "Twitter", href: "https://x.com/SuiNSdapp" },
    { name: "Community Calls", href: "https://vote.suins.io/" },
    { name: "SuiNS Website", href: "https://suins.io" },
  ],
};
