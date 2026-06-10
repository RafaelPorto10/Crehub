import { useState, useCallback } from "react";
import { questions } from "./data/questions";
import { generateDiagnosis } from "./services/diagnosis";
import { Answers } from "./types";

const INITIAL_ANSWERS: Answers = {
  size: "",
  investment: "",
  ugc: "",
  objective: "",
  segment: "",
  challenge: "",
};

type Screen = "welcome" | "quiz" | "result";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = questions[step];
  const progress = (step / questions.length) * 100;

  const handleOptionSelect = useCallback(
    (value: string) => {
      setSelectedOption(value);

      const newAnswers = { ...answers, [currentQuestion.id]: value };
      setAnswers(newAnswers);

      setTimeout(() => {
        setSelectedOption(null);
        if (step + 1 >= questions.length) {
          setScreen("result");
        } else {
          setStep((prev) => prev + 1);
        }
      }, 350);
    },
    [answers, currentQuestion, step]
  );

  const handleRestart = () => {
    setScreen("welcome");
    setStep(0);
    setAnswers(INITIAL_ANSWERS);
    setSelectedOption(null);
  };

  if (screen === "welcome") {
    return (
      <div className="app-container">
        <div className="card">
          <div className="brand">
            <div className="brand-dot" />
            <span className="brand-name">CreHub</span>
          </div>

          <div className="welcome-eyebrow">Diagnóstico Inteligente</div>

          <h1 className="welcome-title">
            Descubra o{" "}
            <span className="highlight">potencial oculto</span>
            {" "}da sua marca
          </h1>

          <p className="welcome-body">
            Em menos de 2 minutos, nosso algoritmo analisa o perfil da
            sua empresa e revela como criadores UGC podem acelerar seus
            resultados — com um plano de ação personalizado.
          </p>

          <div className="welcome-stats">
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">perguntas rápidas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100</span>
              <span className="stat-label">pontos de score</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30</span>
              <span className="stat-label">dias de plano</span>
            </div>
          </div>

          <div className="welcome-meta">
            <div className="meta-item">
              <span className="meta-icon">⚡</span>
              <span>Resultado imediato</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🎯</span>
              <span>100% personalizado</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🔒</span>
              <span>Gratuito</span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => setScreen("quiz")}>
            <span>Iniciar diagnóstico</span>
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  if (screen === "result") {
    const result = generateDiagnosis(answers);
    const circumference = 2 * Math.PI * 46;
    const dashOffset = circumference - (result.score / 100) * circumference;

    return (
      <div className="app-container">
        <div className="card">
          <div className="brand">
            <div className="brand-dot" />
            <span className="brand-name">CreHub</span>
          </div>

          <div className="result-header">
            <div className="result-eyebrow">Seu diagnóstico está pronto</div>

            <div className="score-ring">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  fill="none"
                  stroke={result.levelColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)" }}
                />
              </svg>
              <div className="score-ring-text">
                <span className="score-value" style={{ color: result.levelColor }}>
                  {result.score}
                </span>
                <span className="score-unit">/ 100</span>
              </div>
            </div>

            <div className="result-level" style={{ color: result.levelColor }}>
              {result.level}
            </div>

            <p className="result-summary">{result.summary}</p>
          </div>

          {/* Insights */}
          <p className="section-title">Por que UGC faz sentido para você</p>
          <div className="insights-list">
            {result.insights.map((insight, i) => (
              <div key={i} className="insight-item">
                <span className="insight-icon">💡</span>
                <span>{insight}</span>
              </div>
            ))}
          </div>

          {/* Action Plan */}
          <div className="action-plan">
            <p className="section-title">Plano de ação — 30 dias</p>
            <div className="action-list">
              {result.actions.map((action, i) => (
                <div key={i} className="action-item">
                  <div className="action-icon-wrap">{action.icon}</div>
                  <div>
                    <div className="action-week">{action.week}</div>
                    <div className="action-title">{action.title}</div>
                    <div className="action-desc">{action.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <div className="cta-title">
              Pronto para <span className="highlight">crescer com UGC</span>?
            </div>
            <p className="cta-body">
              A CreHub conecta marcas como a sua com criadores UGC verificados —
              conteúdo autêntico que converte de verdade.
            </p>
            <button className="btn-primary">
              <span>Conhecer a CreHub</span>
              <span>→</span>
            </button>
          </div>

          <button className="btn-secondary" onClick={handleRestart}>
            Refazer diagnóstico
          </button>
        </div>
      </div>
    );
  }

  // Quiz screen
  const isTwoCol = currentQuestion.options.length === 2;

  return (
    <div className="app-container">
      <div className="card">
        <div className="brand">
          <div className="brand-dot" />
          <span className="brand-name">CreHub</span>
        </div>

        <div className="progress-wrapper">
          <div className="progress-header">
            <span className="progress-label">Diagnóstico</span>
            <span className="progress-count">
              {step + 1} / {questions.length}
            </span>
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="question-content" key={step}>
          <div className="question-subtitle">
            Pergunta {step + 1}
          </div>
          <h2 className="question-title">{currentQuestion.title}</h2>
          <p className="question-hint">{currentQuestion.subtitle}</p>

          <div className={`options-grid ${isTwoCol ? "two-col" : ""}`}>
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                className={`option-btn ${selectedOption === option.value ? "selected" : ""}`}
                onClick={() => handleOptionSelect(option.value)}
                disabled={selectedOption !== null}
              >
                <span className="option-icon">{option.icon}</span>
                <span className="option-label">{option.label}</span>
                <span className="option-check" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
