export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  trend: string;
  trendDirection: "up" | "down" | "neutral";
}

export interface GovernanceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface GovernanceStructureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ParticipationStep {
  number: number;
  title: string;
  description: string;
  cta: {
    text: string;
    link: string;
  };
}

export interface AdvancedParticipationItem {
  title: string;
  description: string;
  icon: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  icon: string;
  link: {
    text: string;
    url: string;
  };
}

export interface ForumTopic {
  title: string;
  author: string;
  timeAgo: string;
  replies: string;
  description: string;
  tags: Array<{
    label: string;
    color: string;
  }>;
  status: {
    label: string;
    color: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterSection {
  [key: string]: Array<{
    name: string;
    href: string;
  }>;
}
