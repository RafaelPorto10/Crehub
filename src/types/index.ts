export interface Answers {
  size: string;
  investment: string;
  ugc: string;
  objective: string;
  segment: string;
  challenge: string;
}

export interface DiagnosisResult {
  score: number;
  level: string;
  levelColor: string;
  insights: string[];
  actions: ActionItem[];
  summary: string;
}

export interface ActionItem {
  week: string;
  title: string;
  description: string;
  icon: string;
}

export interface Question {
  id: keyof Answers;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  value: string;
  label: string;
  icon: string;
}
