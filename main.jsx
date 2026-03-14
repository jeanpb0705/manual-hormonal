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
const ACCESS_PASSWORD = "SAUDEAVANCADA"; 

// --- CONFIGURAÇÃO API ---
const getApiKey = () => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
      return import.meta.env.VITE_GEMINI_API_KEY;
    }
  } catch (e) {
    console.warn("Ambiente não suporta acesso direto a variáveis.");
  }
  return ""; 
};

const apiKey = getApiKey();

async function callGemini(prompt, systemInstruction = "") {
  if (!apiKey) return "Erro: Chave de API não detectada. Verifique as Environment Variables na Vercel.";
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text;
    }
    return "Erro ao processar resposta da IA.";
  } catch (error) {
    return "Erro de conexão com a API.";
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

    let prompt = `Analise os seguintes dados clínicos de acordo com a visão funcional e hormonal avançada: "${userInput}". Forneça insights práticos.`;
    const aiResponse = await callGemini(prompt, "Especialista em Endocrinologia Funcional FSA.");
    if (aiResponse) setResult(aiResponse);
    setLoading(false);
  };

  return (
    <div className="mt-6 p-6 rounded-2xl border-2 border-dashed border-[#fb336d]/30 bg-white/5">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={20} className="text-[#fb336d]" />
        <h4 className="text-sm font-bold text-white tracking-wide">ASSISTENTE CLÍNICO COM IA</h4>
      </div>
      <div className="flex flex-col gap-3">
        <textarea 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Descreva sintomas ou resultados de exames para análise..."
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fb336d] h-24 resize-none transition-all"
        />
        <button 
          onClick={handleGenerate}
          disabled={loading || !userInput}
          className="bg-[#fb336d] hover:bg-[#d42a68] py-3 rounded-xl transition-all font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#fb336d]/20"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />} 
          {loading ? "Analisando..." : "Solicitar Análise Inteligente"}
        </button>
      </div>
      {result && (
        <div className="mt-6 p-5 bg-black/60 rounded-xl text-sm leading-relaxed text-slate-200 border border-white/10 shadow-inner animate-in fade-in slide-in-from-top-2">
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
    const prompt = `Analise os seguintes sintomas marcados pelo paciente: ${selectedSymptoms.join(", ")}. Identifique possíveis eixos comprometidos e sugira exames.`;
    const aiResponse = await callGemini(prompt, "Especialista FSA em Saúde Funcional.");
    if (aiResponse) setAnalysisResult(aiResponse);
    setLoading(false);
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <ListChecks className="text-[#fb336d]" size={22} /> Triagem de Sintomas Interativa
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h4 className="text-[10px] font-black text-[#fb336d] uppercase mb-4 tracking-[0.15em]">{cat.name}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.symptoms.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                  className={`text-[10px] font-bold px-3 py-2 rounded-lg transition-all border ${
                    selectedSymptoms.includes(s) ? 'bg-[#fb336d]/20 border-[#fb336d] text-white shadow-[0_0_10px_rgba(251,51,109,0.2)]' : 'bg-black/40 border-white/10 text-slate-500 hover:border-white/30'
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
        className="w-full bg-[#fb336d] py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-[#d42a68] transition-all disabled:opacity-50"
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : <Activity size={20} />} Analisar Quadro Clínico
      </button>
      {analysisResult && (
        <div className="mt-6 p-6 bg-black/60 rounded-2xl border border-[#fb336d]/30 text-sm leading-relaxed text-slate-200 animate-in zoom-in-95">
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
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0d0618] font-sans">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl text-center relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb336d] via-[#d42a68] to-transparent"></div>
        <div className="w-20 h-20 bg-[#fb336d]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#fb336d]/20">
          <Lock className="text-[#fb336d]" size={32} />
        </div>
        <h1 className="text-2xl font-black text-white mb-3 tracking-tight">ACESSO RESTRITO</h1>
        <p className="text-slate-400 text-sm mb-10 font-medium">Insira a palavra-passe de aluno FSA para desbloquear o Manual Clínico Digital.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="password" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Palavra-passe"
            className={`w-full bg-black/40 border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-center text-white focus:outline-none focus:border-[#fb336d] transition-all text-lg tracking-[0.3em] font-bold`}
          />
          <button type="submit" className="w-full bg-[#fb336d] py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#d42a68] transition-all shadow-lg shadow-[#fb336d]/20 flex items-center justify-center gap-3">
            ACEDER AGORA <Unlock size={18}/>
          </button>
        </form>
        {error && <p className="text-red-500 text-xs mt-6 font-bold animate-pulse tracking-wide">ACESSO NEGADO. VERIFIQUE A SENHA.</p>}
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
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  if (!isAuthenticated) return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen relative flex flex-col text-white pb-20" style={{ background: '#0d0618', fontFamily: "'Montserrat', sans-serif" }}>
      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute rounded-full" style={{ top: '-10%', right: '-5%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(251,51,109,0.15) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full" style={{ bottom: '5%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(110,40,200,0.1) 0%, transparent 70%)' }} />
      </div>
      
      <nav className="relative w-full border-b border-white/5 h-[80px] z-10 flex justify-center backdrop-blur-md bg-[#0d0618]/50 sticky top-0">
        <div className="w-full max-w-6xl px-6 flex justify-between items-center">
          <img src="https://saudeavancada.com.br/wp-content/uploads/2026/03/creme-e-rosa.png" alt="Logo FSA" className="h-10 w-auto opacity-90" />
          <div className="text-[10px] font-black text-slate-500 tracking-widest border border-white/10 px-3 py-1.5 rounded-full">v2.5 ALPHA</div>
        </div>
      </nav>

      <main className="relative flex-grow flex flex-col w-full max-w-6xl mx-auto z-10 px-6 py-12">
        {activeModule ? (
          <DetailView 
            moduleData={modulesData.find(m => m.id === activeModule)} 
            onBack={() => setActiveModule(null)} 
          />
        ) : (
          <div>
            <header className="mb-14">
              <h1 className="text-5xl font-black text-white mb-3 tracking-tight">Manual Clínico Digital</h1>
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-[#fb336d]"></div>
                <h2 className="text-xl font-bold text-slate-400">Medicina e Saúde Hormonal</h2>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modulesData.map((m) => {
                const Icon = m.icon;
                return (
                  <div 
                    key={m.id} onClick={() => setActiveModule(m.id)}
                    className="group cursor-pointer p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#fb336d]/40 hover:bg-white/10 transition-all duration-500 flex flex-col h-full shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fb336d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-14 h-14 rounded-2xl bg-[#fb336d] flex items-center justify-center mb-6 shadow-xl shadow-[#fb336d]/30 group-hover:scale-110 transition-transform">
                      <Icon size={24} color="white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#fb336d] transition-colors tracking-tight">{m.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{m.description}</p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-[#fb336d] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Explorar módulo <ChevronRight size={14} />
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
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
      <button onClick={onBack} className="group flex items-center gap-3 text-slate-500 hover:text-white mb-10 transition-all text-xs font-black uppercase tracking-widest">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Painel
      </button>

      <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2.5rem] p-10 mb-10 shadow-2xl backdrop-blur-md">
        <span className="text-[10px] font-black text-[#fb336d] uppercase tracking-[0.3em] mb-4 block">{moduleData.topics[0].title}</span>
        <h2 className="text-4xl font-black text-white mb-6 tracking-tight">{moduleData.title}</h2>
        <div className="h-1 w-full bg-white/5 relative">
            <div className="absolute h-full w-1/4 bg-[#fb336d]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ContentCard icon={FileText} title="Introdução" text={content.intro} />
        <ContentCard icon={Activity} title="Explicação Clínica" text={content.explanation} />
        <ContentCard icon={Target} title="Aplicação Prática" text={content.application} />
        <ContentCard icon={CheckCircle2} title="Resumo FSA" text={content.summary} />
      </div>

      <div className="border-t border-white/10 pt-10">
        {(moduleData.id !== 'questionario' && moduleData.id !== 'fluxogramas' && moduleData.id !== 'ciclo_menstrual') && (
          <GeminiAssistant type={moduleData.id} />
        )}
        {moduleData.id === 'questionario' && <InteractiveQuestionnaire />}
      </div>
    </div>
  );
}

function ContentCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all hover:border-white/20 group">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#fb336d]/20 transition-colors">
            <Icon size={16} className="text-[#fb336d]" />
        </div>
        <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">{title}</h4>
      </div>
      <p className="text-slate-300 text-[15px] leading-relaxed font-medium">{text}</p>
    </div>
  );
}

// --- RENDERIZAÇÃO FINAL (O QUE FALTAVA) ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
