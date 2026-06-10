import { Answers, DiagnosisResult, ActionItem } from "../types";

export function generateDiagnosis(data: Answers): DiagnosisResult {
  let score = 40;

  if (data.ugc === "Não") score += 20;
  if (data.challenge === "Poucas vendas") score += 15;
  if (data.challenge === "Baixa autoridade") score += 15;
  if (data.objective === "Gerar autoridade") score += 10;
  if (data.objective === "Aumentar vendas") score += 10;
  if (data.investment === "Nenhum") score += 10;
  if (data.investment === "Até R$1.000") score += 5;

  score = Math.min(score, 100);

  let level: string;
  let levelColor: string;

  if (score >= 80) {
    level = "Alta oportunidade para UGC";
    levelColor = "#10b981";
  } else if (score >= 60) {
    level = "Boa oportunidade para UGC";
    levelColor = "#f59e0b";
  } else {
    level = "Oportunidade moderada";
    levelColor = "#6366f1";
  }

  const insights = buildInsights(data, score);
  const actions = buildActions(data);
  const summary = buildSummary(data, score);

  return { score, level, levelColor, insights, actions, summary };
}

function buildInsights(data: Answers, score: number): string[] {
  const insights: string[] = [];

  if (data.ugc === "Não") {
    insights.push(
      "Você ainda não usa UGC — isso é uma vantagem competitiva disponível que seus concorrentes já podem estar aproveitando."
    );
  }

  const segmentMap: Record<string, string> = {
    Moda: "o segmento de Moda tem uma das maiores taxas de conversão com conteúdo autêntico de criadores.",
    Saúde: "em Saúde & Bem-estar, depoimentos reais aumentam a credibilidade e reduzem objeções de compra.",
    Alimentação: "conteúdo visual de criadores em Alimentação gera até 3x mais engajamento que fotos de estúdio.",
    Tecnologia: "em Tecnologia, reviews e unboxings de criadores aceleram a decisão de compra.",
    Educação: "na Educação, cases e depoimentos de alunos reais são os gatilhos de conversão mais poderosos.",
    Serviços: "no segmento de Serviços, prova social de clientes reais é o principal fator de confiança.",
  };

  if (segmentMap[data.segment]) {
    insights.push(`Para o seu segmento: ${segmentMap[data.segment]}`);
  }

  if (data.investment === "Nenhum") {
    insights.push(
      "Sem investimento atual em marketing, UGC oferece o melhor custo-benefício para começar a gerar resultados rapidamente."
    );
  }

  if (data.challenge === "Baixa autoridade" || data.objective === "Gerar autoridade") {
    insights.push(
      "Criadores que usam e recomendam sua marca constroem autoridade de forma muito mais orgânica que publicidade tradicional."
    );
  }

  if (score >= 80) {
    insights.push(
      `Com score ${score}/100, seu perfil é ideal para uma estratégia UGC agressiva — o retorno tende a ser rápido e mensurável.`
    );
  }

  return insights;
}

function buildActions(data: Answers): ActionItem[] {
  return [
    {
      week: "Semana 1",
      title: "Diagnóstico e Posicionamento",
      description: `Definir proposta de valor clara para o segmento de ${data.segment} e mapear os criadores ideais para o seu público.`,
      icon: "🎯",
    },
    {
      week: "Semana 2",
      title: "Seleção e Briefing de Criadores",
      description: `Identificar 3 a 5 criadores UGC alinhados com o objetivo de "${data.objective}" e produzir briefing detalhado.`,
      icon: "🤝",
    },
    {
      week: "Semana 3",
      title: "Produção e Distribuição",
      description: `Criadores gravam conteúdo autêntico focado em superar o desafio de "${data.challenge}". Aprovação e publicação.`,
      icon: "🎬",
    },
    {
      week: "Semana 4",
      title: "Análise e Escala",
      description:
        "Medir métricas de engajamento, conversão e alcance. Identificar os conteúdos vencedores e escalar a produção.",
      icon: "📊",
    },
  ];
}

function buildSummary(data: Answers, score: number): string {
  const ugcContext =
    data.ugc === "Não"
      ? "ainda não utiliza UGC"
      : "já tem familiaridade com UGC";

  return `Sua empresa (${data.size}) atua em ${data.segment}, ${ugcContext}, e busca principalmente ${data.objective.toLowerCase()}. O maior desafio atual é "${data.challenge}", com investimento mensal de ${data.investment} em marketing. Com score ${score}/100, existe uma oportunidade clara para alavancar resultados com criadores UGC.`;
}
