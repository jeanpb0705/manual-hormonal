import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ClipboardList, 
  ListChecks, 
  Network, 
  GitBranch, 
  FlaskConical, 
  Moon,
  ChevronRight,
  ArrowLeft,
  Activity,
  FileText,
  Lightbulb,
  Target,
  CheckCircle2,
  Sparkles,
  Loader2,
  Send,
  CalendarDays,
  Lock,
  Unlock
} from 'lucide-react';

// --- CONFIGURAÇÃO DE SEGURANÇA ---
const ACCESS_PASSWORD = ""; 

// --- CONFIGURAÇÃO API ---
const getApiKey = () => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
      return import.meta.env.VITE_GEMINI_API_KEY;
    }
    if (typeof process !== 'undefined' && process.env && process.env.VITE_GEMINI_API_KEY) {
      return process.env.VITE_GEMINI_API_KEY;
    }
  } catch (e) {
    return "";
  }
  return ""; 
};

const apiKey = getApiKey();

async function callGemini(prompt, systemInstruction = "") {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) return "Chave ausente na Vercel.";

  try {
    // Passo 1: Descobrir qual modelo a sua conta permite
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
    const listData = await listRes.json();
    
    // Pegamos o primeiro modelo da sua lista que aceita gerar conteúdo
    const availableModel = listData.models?.find(m => m.supportedGenerationMethods.includes("generateContent"))?.name;

    if (!availableModel) return "O Google diz que sua chave não tem modelos liberados ainda.";

    // Passo 2: Fazer a chamada com o modelo que o próprio Google nos deu
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${availableModel}:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemInstruction}\n\n${prompt}` }] }]
      })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Resposta vazia do Google.";

  } catch (error) {
    return "Erro crítico de conexão. Verifique se sua chave API está ativa.";
  }
}

// --- ESTRUTURA DE DADOS ---
const modulesData = [
  {
    id: "anamnese",
    title: "Anamnese Hormonal Estratégica",
    icon: ClipboardList,
    description: "Estrutura de coleta de informações clínicas. Use a IA para sugerir perguntas específicas.",
    topics: [{ title: "Introdução à Anamnese Hormonal", content: { intro: "A anamnese hormonal é o primeiro passo para compreender alterações fisiológicas relacionadas ao sistema endócrino.", explanation: "Durante essa etapa são investigados sintomas físicos, comportamentais e metabólicos.", example: "Paciente relata fadiga persistente, dificuldade para dormir e alteração de humor.", application: "Esses sinais podem indicar alterações em cortisol, melatonina ou hormônios tireoidianos.", summary: "Uma anamnese bem conduzida aumenta a precisão diagnóstica." } }]
  },
  {
    id: "matriz",
    title: "Matriz de Investigação",
    icon: Network,
    description: "Relacione sintomas com hipóteses. Use a IA para gerar insights diagnósticos.",
    topics: [{ title: "Organização da Investigação Clínica", content: { intro: "A matriz de investigação conecta sintomas com possíveis causas hormonais.", explanation: "Ela ajuda a priorizar hipóteses clínicas.", example: "Fadiga + queda de libido pode sugerir alterações hormonais específicas.", application: "Essa matriz orienta a escolha de exames laboratoriais.", summary: "Ferramenta útil para sistematizar a investigação." } }]
  },
  {
    id: "questionario",
    title: "Questionário de Sintomas",
    icon: ListChecks,
    description: "Instrumento estruturado para identificação de sintomas hormonais.",
    topics: [{ title: "Mapeamento Interativo", content: { intro: "O questionário de sintomas ajuda a organizar os relatos do paciente.", explanation: "Selecione os sintomas abaixo. A Inteligência Artificial analisará o padrão e sugerirá quais eixos hormonais podem estar comprometidos.", example: "Insônia, irritabilidade e fadiga podem indicar alterações hormonais.", application: "A correlação de sintomas auxilia na definição dos exames necessários.", summary: "Questionários estruturados aumentam a eficiência da triagem clínica." } }]
  },
  {
    id: "interpretacao_exames",
    title: "Interpretação de Exames",
    icon: FlaskConical,
    description: "Guia de interpretação clínica de exames laboratoriais com analisador funcional de IA.",
    topics: [{ title: "Avaliação Laboratorial Integrada", content: { intro: "A interpretação de exames deve considerar o contexto clínico, sintomas e interações hormonais.", explanation: "Insira os valores abaixo para que a IA analise tendências funcionais fora do padrão laboratorial comum.", example: "TSH de 3.5 pode ser 'normal' para o laboratório, mas indicar hipofunção em pacientes sintomáticos.", application: "Permite correlacionar queixas clínicas com achados bioquímicos para condutas assertivas.", summary: "Exames direcionam a intervenção, mas a avaliação clínica é sempre soberana." } }]
  },
  {
    id: "fluxogramas",
    title: "Fluxogramas Clínicos",
    icon: GitBranch,
    description: "Diagramas visuais para estruturar a investigação de queixas frequentes.",
    topics: [{ title: "Raciocínio Diagnóstico Estruturado", content: { intro: "Fluxogramas visuais que ajudam a organizar a investigação clínica diante de queixas inespecíficas.", explanation: "Estabelece um passo a passo para sintomas como fadiga crônica, dificuldade de emagrecer e baixa libido.", example: "Na suspeita de hipotireoidismo, o fluxo orienta desde os sintomas iniciais até o painel completo de exames.", application: "Agiliza o atendimento, evita solicitações de exames desnecessários e aumenta a precisão diagnóstica.", summary: "Sistematiza o pensamento clínico de forma visual, objetiva e prática." } }]
  },
  {
    id: "protocolos",
    title: "Protocolos de Intervenção",
    icon: Lightbulb,
    description: "Estratégias nutricionais e de estilo de vida para condições hormonais comuns.",
    topics: [{ title: "Condutas Práticas Iniciais", content: { intro: "Apresenta intervenções iniciais para condições como SOP, TPM, menopausa, hipotireoidismo e estresse crônico.", explanation: "Reúne estratégias baseadas em mudança de estilo de vida, ajuste nutricional e suplementação.", example: "Manejo da síndrome pré-menstrual (TPM) através de modulação inflamatória e adequação de nutrientes essenciais.", application: "Fornece um ponto de partida seguro e efetivo após a identificação clínica do desequilíbrio hormonal.", summary: "Conecta o diagnóstico à prática terapêutica imediata no consultório." } }]
  },
  {
    id: "ciclo_circadiano",
    title: "Ritmo Circadiano e Melatonina",
    icon: Moon,
    description: "Impacto do ciclo sono-vigília na regulação hormonal e avaliação da insuficiência de melatonina.",
    topics: [{ title: "Cronobiologia e Sono", content: { intro: "O ritmo circadiano é fundamental para a secreção adequada de cortisol, melatonina e hormônio do crescimento (GH).", explanation: "Avalia hábitos de sono, cronotipo, exposição à luz artificial e sintomas de privação de melatonina.", example: "A privação crônica de sono afeta diretamente a resistência à insulina, apetite e a regulação do estresse.", application: "Orienta intervenções focadas na higiene do sono, suporte nutricional e ajuste cronobiológico.", summary: "O sono reparador é a base estrutural imprescindível para o equilíbrio endócrino." } }]
  },
  {
    id: "vitalidade_hormonal",
    title: "Vitalidade, DHEA e GH",
    icon: Activity,
    description: "Papel do DHEA, GH e IGF-1 na vitalidade, saúde metabólica e envelhecimento.",
    topics: [{ title: "Eixos do Envelhecimento Saudável", content: { intro: "Foca em sistemas hormonais muitas vezes negligenciados, mas essenciais para a composição corporal e disposição física.", explanation: "Aborda a avaliação clínica da baixa de DHEA, o impacto fisiológico do GH e a regulação metabólica mediada pelo IGF-1.", example: "Fadiga constante, perda de massa muscular e redução da libido podem estar diretamente ligados a falhas nesses precursores.", application: "Permite um manejo mais abrangente do processo de envelhecimento e da preservação da vitalidade do paciente.", summary: "Marcadores cruciais para a otimização da saúde metabólica a longo prazo." } }]
  },
  {
    id: "ciclo_menstrual",
    title: "Guia do Ciclo Menstrual",
    icon: CalendarDays,
    description: "Módulo bônus: Simulador interativo de fases, hormônios e condutas femininas.",
    topics: [{ title: "Saúde da Mulher", content: { intro: "Mapeamento completo dos sintomas fisiológicos e sinais de alerta ao longo de cada fase do ciclo menstrual.", explanation: "Utilize o simulador abaixo para entender a flutuação hormonal e os nutrientes estratégicos por fase.", example: "Suporte de magnésio e controle de gatilhos inflamatórios durante a fase lútea.", application: "Permite personalizar o atendimento clínico feminino com base no momento exato do ciclo reprodutivo.", summary: "Ferramenta indispensável para o cuidado integrativo e respeitoso da saúde da mulher." } }]
  }
];

// --- COMPONENTES AUXILIARES ---

const formatPlainText = (text) => {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#/g, '')
    .replace(/\n/g, '<br/>');
};

const GeminiAssistant = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleGenerate = async () => {
    if (!userInput) return;
    setLoading(true);
    setResult("");

    let prompt = "";
    let system = "És um assistente médico especialista em endocrinologia funcional.";

    if (type.includes('anamnese')) {
      prompt = `Com base no relato: "${userInput}". Sugere 5 perguntas clínicas profundas. Texto simples.`;
    } else if (type.includes('exames')) {
      prompt = `Analisa os valores: "${userInput}". Interpreta com base em SAÚDE FUNCIONAL. Texto simples.`;
    } else {
      prompt = `Sintomas: "${userInput}". Sugere 3 hipóteses e exames. Texto simples.`;
    }

    const aiResponse = await callGemini(prompt, system);
    if (aiResponse) setResult(aiResponse);
    setLoading(false);
  };

  return (
    <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-[#fb336d]/30 bg-white/5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={18} className="text-[#fb336d]" />
        <h4 className="text-sm font-bold text-white">Assistente de Inteligência Artificial</h4>
      </div>
      <div className="flex gap-2">
        <textarea 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Descreva aqui os dados clínicos..."
          className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#fb336d] h-11 resize-none"
        />
        <button 
          onClick={handleGenerate}
          disabled={loading || !userInput}
          className="bg-[#fb336d] hover:bg-[#d42a68] p-2 rounded-lg transition-all h-11 w-11 flex items-center justify-center shrink-0"
        >
          {loading ? <Loader2 size={18} className="animate-spin text-white" /> : <Send size={18} className="text-white" />}
        </button>
      </div>
      {result && (
        <div className="mt-4 p-4 bg-black/60 rounded-xl text-sm leading-relaxed text-slate-200 border border-white/10 shadow-inner">
          <div dangerouslySetInnerHTML={{ __html: formatPlainText(result) }} />
        </div>
      )}
    </div>
  );
};

const InteractiveQuestionnaire = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState("");

  const categories = [
    { name: "Metabolismo", symptoms: ["Fadiga crônica", "Ganho de peso", "Frio", "Fome"] },
    { name: "Humor/Cognição", symptoms: ["Brain fog", "Ansiedade", "Insónia", "Memória"] },
    { name: "Físico", symptoms: ["Queda cabelo", "Pele seca", "Unhas fracas", "Retenção"] },
    { name: "Hormonal", symptoms: ["Libido ↓", "Irregularidade", "Disfunção", "Fogachos"] }
  ];

  const handleAnalyze = async () => {
    setLoading(true);
    const prompt = `Analise os sintomas: ${selectedSymptoms.join(", ")}. Identifique eixos comprometidos.`;
    const aiResponse = await callGemini(prompt, "Especialista em saúde funcional.");
    if (aiResponse) setAnalysisResult(aiResponse);
    setLoading(false);
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <ListChecks className="text-[#fb336d]" size={20} /> Triagem de Sintomas
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h4 className="text-[10px] font-bold text-[#fb336d] uppercase mb-3">{cat.name}</h4>
            <div className="flex flex-wrap gap-1.5">
              {cat.symptoms.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                  className={`text-[9px] font-bold px-2 py-1.5 rounded-md transition-all border ${
                    selectedSymptoms.includes(s) ? 'bg-[#fb336d]/20 border-[#fb336d] text-white' : 'bg-black/40 border-white/10 text-slate-500'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={handleAnalyze} disabled={loading || selectedSymptoms.length === 0}
        className="w-full bg-[#fb336d] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-[#d42a68]"
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : <Activity size={18} />} Analisar Quadro Clínico
      </button>
      {analysisResult && (
        <div className="mt-4 p-4 bg-black/60 rounded-xl border border-[#fb336d]/30 text-xs leading-relaxed text-slate-200">
          <div dangerouslySetInnerHTML={{ __html: formatPlainText(analysisResult) }} />
        </div>
      )}
    </div>
  );
};

// --- TELA DE LOGIN ---
const LoginScreen = ({ onLogin }) => {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass.toUpperCase() === ACCESS_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0d0618]">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb336d] to-transparent"></div>
        <div className="w-16 h-16 bg-[#fb336d]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="text-[#fb336d]" size={28} />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Acesso Restrito</h1>
        <p className="text-slate-400 text-sm mb-8">Introduza a palavra-passe de aluno para aceder ao Manual Clínico Digital.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Palavra-passe"
            className={`w-full bg-black/40 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-center text-white focus:outline-none focus:border-[#fb336d] transition-all`}
          />
          <button type="submit" className="w-full bg-[#fb336d] py-3 rounded-xl font-bold hover:bg-[#d42a68] transition-all shadow-lg shadow-[#fb336d]/20 flex items-center justify-center gap-2">
            Acessar Manual <Unlock size={18}/>
          </button>
        </form>
        {error && <p className="text-red-500 text-xs mt-4 font-bold animate-pulse">Acesso Negado. Tente novamente.</p>}
      </div>
    </div>
  );
};

// --- MAIN APP ---
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  if (!isAuthenticated) return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen relative flex flex-col text-white" style={{ background: '#0d0618', fontFamily: "'Montserrat', sans-serif" }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute rounded-full" style={{ top: '-200px', right: '-200px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(251,51,109,0.3) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full" style={{ bottom: '60px', left: '-80px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(110,40,200,0.2) 0%, transparent 70%)' }} />
      </div>
      
      <nav className="relative w-full border-b border-white/10 h-[72px] z-10 flex justify-center">
        <div className="w-full max-w-6xl px-6 flex justify-between items-center">
          <img src="https://saudeavancada.com.br/wp-content/uploads/2026/03/creme-e-rosa.png" alt="Logo FSA" className="h-10 w-auto object-contain" />
        </div>
      </nav>

      <main className="relative flex-grow flex flex-col w-full max-w-6xl mx-auto z-10 px-6 py-8">
        {activeModule ? (
          <DetailView 
            moduleData={modulesData.find(m => m.id === activeModule)} 
            onBack={() => setActiveModule(null)} 
          />
        ) : (
          <div>
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold text-white mb-2">Manual Clínico de Sintomas</h1>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#fb336d] to-[#d42a68] bg-clip-text text-transparent mb-4">Saúde Hormonal</h2>
              <p className="text-slate-400 max-w-2xl leading-relaxed font-medium">Guia clínico interativo potencializado por IA para apoio à decisão clínica e investigação hormonal avançada.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modulesData.map((m) => {
                const Icon = m.icon;
                return (
                  <div 
                    key={m.id} onClick={() => setActiveModule(m.id)}
                    className="group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#fb336d]/50 hover:bg-white/10 transition-all duration-300 flex flex-col h-full shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fb336d] flex items-center justify-center mb-4 shadow-lg shadow-[#fb336d]/20 shrink-0">
                      <Icon size={20} color="white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fb336d] transition-colors">{m.title}</h3>
                      <p className="text-sm text-slate-400 line-clamp-2 font-medium">{m.description}</p>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <ChevronRight size={18} className="text-slate-600 group-hover:text-[#fb336d] transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function DetailView({ moduleData, onBack }) {
  const content = moduleData.topics[0].content;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#fb336d] mb-8 transition-colors text-sm font-semibold">
        <ArrowLeft size={16} /> Voltar ao Painel
      </button>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-1">{moduleData.title}</h2>
        <span className="text-xs font-bold text-[#fb336d] uppercase tracking-widest">{moduleData.topics[0].title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <ContentCard icon={FileText} title="Contexto" text={content.intro} />
        <ContentCard icon={Activity} title="Análise" text={content.explanation} />
        <ContentCard icon={Target} title="Aplicação" text={content.application} />
        <ContentCard icon={CheckCircle2} title="Conclusão" text={content.summary} />
      </div>

      <div className="border-t border-white/10 pt-8">
        {(moduleData.id.includes('anamnese') || moduleData.id.includes('matriz') || moduleData.id.includes('exames')) && (
          <GeminiAssistant type={moduleData.id} />
        )}
        {moduleData.id === 'questionario' && <InteractiveQuestionnaire />}
      </div>
    </div>
  );
}

function ContentCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/5 p-5 rounded-xl hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={18} className="text-[#fb336d]" />
        <h4 className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">{title}</h4>
      </div>
      <p className="text-slate-200 text-sm leading-relaxed font-medium">{text}</p>
    </div>
  );
}

// --- RENDERIZAÇÃO ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
