import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  ClipboardList, ListChecks, Network, GitBranch, FlaskConical, Moon,
  ChevronRight, ArrowLeft, Activity, FileText, Lightbulb, Target,
  CheckCircle2, Sparkles, Loader2, Send, CalendarDays, Lock, Unlock
} from 'lucide-react';

// --- CONFIGURAÇÃO ---
const ACCESS_PASSWORD = "SAUDEAVANCADA"; 

const getApiKey = () => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
      return import.meta.env.VITE_GEMINI_API_KEY;
    }
  } catch (e) { }
  return ""; 
};

const apiKey = getApiKey();

async function callGemini(prompt, systemInstruction = "") {
  if (!apiKey) return "Erro: Chave de API não detectada na Vercel.";
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
    return "Erro na resposta da IA.";
  } catch (error) { return null; }
}

const modulesData = [
  { id: "anamnese", title: "Anamnese Hormonal Estratégica", icon: ClipboardList, description: "Estrutura de coleta de informações clínicas.", topics: [{ title: "Introdução", content: { intro: "A anamnese hormonal é o primeiro passo.", explanation: "Investigação de sintomas físicos e metabólicos.", example: "Fadiga e alteração de humor.", application: "Indicações de cortisol e tireoide.", summary: "Aumenta precisão diagnóstica." } }] },
  { id: "matriz", title: "Matriz de Investigação", icon: Network, description: "Relacione sintomas com hipóteses.", topics: [{ title: "Organização", content: { intro: "Conecta sintomas com causas.", explanation: "Prioriza hipóteses clínicas.", example: "Fadiga + libido baixa.", application: "Orienta exames laboratoriais.", summary: "Sistematiza a investigação." } }] },
  { id: "questionario", title: "Questionário de Sintomas", icon: ListChecks, description: "Identificação estruturada de sintomas.", topics: [{ title: "Mapeamento", content: { intro: "Organiza os relatos do paciente.", explanation: "IA analisa o padrão dos eixos.", example: "Insônia e irritabilidade.", application: "Define exames necessários.", summary: "Eficiência na triagem." } }] },
  { id: "interpretacao_exames", title: "Interpretação de Exames", icon: FlaskConical, description: "Analisador funcional de exames.", topics: [{ title: "Avaliação Integrada", content: { intro: "Considera o contexto clínico.", explanation: "Analisa tendências funcionais.", example: "TSH fora do ótimo.", application: "Condutas assertivas.", summary: "Avaliação clínica soberana." } }] },
  { id: "fluxogramas", title: "Fluxogramas Clínicos", icon: GitBranch, description: "Diagramas visuais de investigação.", topics: [{ title: "Raciocínio Estruturado", content: { intro: "Passo a passo visual.", explanation: "Para queixas inespecíficas.", example: "Hipotireoidismo.", application: "Evita exames desnecessários.", summary: "Sistematiza o pensamento." } }] },
  { id: "protocolos", title: "Protocolos de Intervenção", icon: Lightbulb, description: "Estratégias nutricionais e estilo de vida.", topics: [{ title: "Condutas Práticas", content: { intro: "Intervenções para SOP, TPM, Menopausa.", explanation: "Ajuste nutricional e suplementação.", example: "Manejo de inflamação.", application: "Ponto de partida seguro.", summary: "Conecta diagnóstico à prática." } }] },
  { id: "ciclo_circadiano", title: "Ritmo Circadiano", icon: Moon, description: "Impacto do sono na regulação hormonal.", topics: [{ title: "Cronobiologia", content: { intro: "Secreção de cortisol e melatonina.", explanation: "Exposição à luz e cronotipo.", example: "Resistência à insulina.", application: "Higiene do sono.", summary: "Base do equilíbrio endócrino." } }] },
  { id: "vitalidade_hormonal", title: "Vitalidade, DHEA e GH", icon: Activity, description: "Saúde metabólica e envelhecimento.", topics: [{ title: "Eixos de Vitalidade", content: { intro: "Sistemas hormonais essenciais.", explanation: "Baixa de DHEA e impacto do GH.", example: "Perda de massa muscular.", application: "Preservação da vitalidade.", summary: "Otimização a longo prazo." } }] },
  { id: "ciclo_menstrual", title: "Guia do Ciclo Menstrual", icon: CalendarDays, description: "Simulador interativo de fases e condutas.", topics: [{ title: "Saúde da Mulher", content: { intro: "Mapeamento fisiológico feminino.", explanation: "Flutuação hormonal por fase.", example: "Suporte de magnésio na lútea.", application: "Personalização do atendimento.", summary: "Cuidado integrativo." } }] }
];

const GeminiAssistant = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState("");
  const handleGenerate = async () => {
    setLoading(true);
    const aiResponse = await callGemini(`Analise: ${userInput}. Tipo: ${type}`, "Especialista em saúde hormonal.");
    setResult(aiResponse || "Sem resposta.");
    setLoading(false);
  };
  return (
    <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-[#fb336d]/30 bg-white/5">
      <div className="flex items-center gap-2 mb-3"><Sparkles size={18} className="text-[#fb336d]" /><h4 className="text-sm font-bold text-white">Assistente IA</h4></div>
      <div className="flex gap-2">
        <textarea onChange={(e)=>setUserInput(e.target.value)} className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white h-11 resize-none" placeholder="Dados clínicos..."/>
        <button onClick={handleGenerate} className="bg-[#fb336d] p-2 rounded-lg w-11 flex items-center justify-center">{loading ? <Loader2 className="animate-spin"/> : <Send size={18}/>}</button>
      </div>
      {result && <div className="mt-4 p-4 bg-black/60 rounded-xl text-xs text-slate-200 border border-white/10">{result}</div>}
    </div>
  );
};

const LoginScreen = ({ onLogin }) => {
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => { e.preventDefault(); if(pass.toUpperCase() === ACCESS_PASSWORD) onLogin(); else alert("Senha incorreta"); };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0618] p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
        <Lock className="text-[#fb336d] mx-auto mb-4" size={40} />
        <h1 className="text-xl font-bold text-white mb-6">Manual Clínico - Acesso Alunos</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="password" onChange={(e)=>setPass(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-center" placeholder="Senha"/>
          <button className="w-full bg-[#fb336d] py-3 rounded-xl font-bold">Entrar</button>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [active, setActive] = useState(null);
  if (!isAuth) return <LoginScreen onLogin={() => setIsAuth(true)} />;
  return (
    <div className="min-h-screen bg-[#0d0618] text-white font-sans p-6">
      <div className="max-w-6xl mx-auto">
        <img src="https://saudeavancada.com.br/wp-content/uploads/2026/03/creme-e-rosa.png" className="h-8 mb-10" />
        {active ? (
          <div>
            <button onClick={()=>setActive(null)} className="text-[#fb336d] mb-6 flex items-center gap-2"><ArrowLeft size={16}/> Voltar</button>
            <h2 className="text-2xl font-bold mb-6">{modulesData.find(m=>m.id===active).title}</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
               {Object.entries(modulesData.find(m=>m.id===active).topics[0].content).map(([k, v]) => (
                 <div key={k} className="bg-white/5 p-4 rounded-xl border border-white/10"><p className="text-xs text-[#fb336d] uppercase font-bold mb-2">{k}</p><p className="text-sm text-slate-300">{v}</p></div>
               ))}
            </div>
            <GeminiAssistant type={active} />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {modulesData.map(m => (
              <div key={m.id} onClick={()=>setActive(m.id)} className="bg-white/5 p-6 rounded-2xl border border-white/10 cursor-pointer hover:border-[#fb336d]/50 transition-all">
                <div className="w-10 h-10 bg-[#fb336d] rounded-lg flex items-center justify-center mb-4"><m.icon size={20}/></div>
                <h3 className="font-bold mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400">{m.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ESTA É A PARTE QUE ESTAVA FALTANDO:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
