import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "size",
    title: "Qual o tamanho da sua empresa?",
    subtitle: "Isso nos ajuda a calibrar as recomendações ao seu porte.",
    options: [
      { value: "Microempresa", label: "Microempresa", icon: "🌱" },
      { value: "Pequena Empresa", label: "Pequena Empresa", icon: "🏠" },
      { value: "Média Empresa", label: "Média Empresa", icon: "🏢" },
      { value: "Grande Empresa", label: "Grande Empresa", icon: "🏙️" },
    ],
  },
  {
    id: "investment",
    title: "Quanto investe em marketing hoje?",
    subtitle: "Considere investimentos mensais em mídia, agências e ferramentas.",
    options: [
      { value: "Nenhum", label: "Nenhum", icon: "⛔" },
      { value: "Até R$1.000", label: "Até R$1.000", icon: "💰" },
      { value: "R$1.000 a R$5.000", label: "R$1.000 a R$5.000", icon: "💳" },
      { value: "Acima de R$5.000", label: "Acima de R$5.000", icon: "🚀" },
    ],
  },
  {
    id: "ugc",
    title: "Você já conhece UGC?",
    subtitle: "User Generated Content — conteúdo criado por criadores reais para marcas.",
    options: [
      { value: "Sim", label: "Sim, conheço bem", icon: "✅" },
      { value: "Não", label: "Não, nunca ouvi falar", icon: "❓" },
    ],
  },
  {
    id: "objective",
    title: "Qual seu objetivo principal?",
    subtitle: "Foque no resultado que mais importa para o seu negócio agora.",
    options: [
      { value: "Aumentar vendas", label: "Aumentar vendas", icon: "📈" },
      { value: "Gerar autoridade", label: "Gerar autoridade", icon: "🏆" },
      { value: "Mais seguidores", label: "Mais seguidores", icon: "👥" },
      { value: "Reconhecimento de marca", label: "Reconhecimento de marca", icon: "⭐" },
    ],
  },
  {
    id: "segment",
    title: "Qual o segmento da empresa?",
    subtitle: "O contexto do mercado impacta diretamente a estratégia de conteúdo.",
    options: [
      { value: "Tecnologia", label: "Tecnologia", icon: "💻" },
      { value: "Moda", label: "Moda", icon: "👗" },
      { value: "Saúde", label: "Saúde & Bem-estar", icon: "🏥" },
      { value: "Educação", label: "Educação", icon: "📚" },
      { value: "Serviços", label: "Serviços", icon: "🛠️" },
      { value: "Alimentação", label: "Alimentação", icon: "🍽️" },
    ],
  },
  {
    id: "challenge",
    title: "Qual o maior desafio hoje?",
    subtitle: "Identificar o gargalo certo acelera os resultados.",
    options: [
      { value: "Poucas vendas", label: "Poucas vendas", icon: "📉" },
      { value: "Baixa autoridade", label: "Baixa autoridade", icon: "🔇" },
      { value: "Pouco engajamento", label: "Pouco engajamento", icon: "😶" },
      { value: "Falta de conteúdo", label: "Falta de conteúdo", icon: "📭" },
    ],
  },
];
