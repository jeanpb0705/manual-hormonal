import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ClipboardList, 
  ListChecks, 
  Network, 
  FlaskConical, 
  ChevronRight,
  ArrowLeft,
  Activity,
  FileText,
  Lightbulb,
  Target,
  CheckCircle2,
  CalendarDays,
  Lock,
  Unlock,
  User,
  AlertCircle,
  History,
  Droplets,
  Zap,
  Thermometer,
  Moon,
  Loader2,
  BookOpen,
  Search,
  Filter,
  Info,
  Clock,
  Sun,
  Coffee
} from 'lucide-react';

// --- CONFIGURAÇÃO DE SEGURANÇA ---
const ACCESS_PASSWORD = ""; 

// --- COMPONENTE DE ANAMNESE ESTRATÉGICA ---
const AnamneseStrategyView = () => {
  return (
    <div className="space-y-8 mb-10 text-slate-200">
      <div className="bg-[#fb336d]/5 border border-[#fb336d]/20 rounded-2xl p-6">
        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <Target size={18} className="text-[#fb336d]" /> 
          Objetivos Principais da Ferramenta
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "padronizar a coleta de informações clínicas relevantes",
            "identificar padrões de sintomas associados a disfunções hormonais",
            "direcionar a solicitação de exames laboratoriais",
            "apoiar o raciocínio clínico",
            "monitorar a evolução do paciente ao longo do tratamento"
          ].map((item, i) => (
            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
              <CheckCircle2 size={14} className="text-[#fb336d] mt-0.5 shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
            <User size={18} className="text-[#fb336d]" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Identificação e Queixa Principal</h4>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-black/20 p-2 rounded">Nome / Idade</div>
              <div className="bg-black/20 p-2 rounded">Sexo Biológico / Profissão</div>
            </div>
            <div>
              <p className="text-[#fb336d] text-[10px] font-bold uppercase mb-1">Pergunta-chave:</p>
              <p className="text-sm italic text-white">“O que mais te incomoda hoje em relação à sua saúde?”</p>
            </div>
            <div className="text-xs space-y-1 text-slate-400">
              <p className="font-bold text-slate-300">Complementar:</p>
              <p>• Quando começou?</p>
              <p>• Está piorando, melhorando ou estável?</p>
              <p>• Já tentou algum tratamento?</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
            <History size={18} className="text-[#fb336d]" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Histórico Clínico e Medicamentos</h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[#fb336d] text-[10px] font-bold uppercase mb-1">Diagnósticos Prévios Relevantes:</p>
              <p className="text-xs text-slate-300 leading-relaxed">tireoide, SOP / endometriose, resistência à insulina / diabetes, doenças autoimunes, ansiedade/depressão.</p>
            </div>
            <div>
              <p className="text-[#fb336d] text-[10px] font-bold uppercase mb-1">Uso de Medicamentos e Hormônios:</p>
              <p className="text-xs text-slate-300">Anticoncepcional (atual ou prévio), Terapia hormonal, Antidepressivos, Corticoides.</p>
              <p className="text-[10px] text-slate-500 mt-1 italic">Incluir: nome, dose e tempo de uso.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
            <Activity size={18} className="text-[#fb336d]" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Suplementação e Avaliação Metabólica</h4>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <p>• Usa suplementos? Quais? (Dose e tempo de uso)</p>
            <div className="grid grid-cols-2 gap-2">
              <p>• Peso atual</p>
              <p>• Peso habitual</p>
            </div>
            <p>• Houve ganho de peso recente?</p>
            <div className="bg-[#fb336d]/10 p-2 rounded border border-[#fb336d]/20">
              <p className="text-[#fb336d] text-[10px] font-bold uppercase">Pergunta-chave Metabólica:</p>
              <p className="italic">“Você tem dificuldade para emagrecer ou manter o peso?”</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
            <Moon size={18} className="text-[#fb336d]" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Estilo de Vida e Sono</h4>
          </div>
          <div className="space-y-2 text-xs text-slate-300">
            <p>• Qual horário costuma dormir e acordar?</p>
            <p>• Como avalia a qualidade do seu sono? (Acorda descansada?)</p>
            <p>• Despertares noturnos? (Frequência e motivo)</p>
            <p>• Ritmo intestinal: frequência e consistência (Escala de Bristol).</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="text-[#fb336d]" size={20} /> Mapeamento de Alertas Clínicos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AlertBox 
            icon={Thermometer} 
            title="Eixo Tireoidiano" 
            symptoms="Frio excessivo, pele seca, queda de cabelo, constipação, fadiga."
            alert="Sinais de Hipofunção (TSH/T4L/T3L)"
          />
          <AlertBox 
            icon={Zap} 
            title="Eixo Adrenal (Estresse)" 
            symptoms="Cansaço ao acordar, queda de energia à tarde, desejo por sal ou doces."
            alert="Sinais de estresse crônico (HHA)"
          />
          <AlertBox 
            icon={Activity} 
            title="Metabolismo e Insulina" 
            symptoms="Compulsão por doces, sonolência pós-refeição, gordura abdominal."
            alert="Resistência à Insulina"
          />
          <AlertBox 
            icon={Droplets} 
            title="Saúde Feminina" 
            symptoms="Cólicas (Dismenorreia), Acne (Hiperandrogenismo), Libido baixa."
            alert="Desequilíbrio Hormonal / Inflamação"
          />
        </div>
      </div>
    </div>
  );
};

const AlertBox = ({ icon: Icon, title, symptoms, alert }) => (
  <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-start gap-4">
    <div className="bg-[#fb336d]/20 p-2 rounded-lg shrink-0">
      <Icon size={18} className="text-[#fb336d]" />
    </div>
    <div>
      <h5 className="text-[11px] font-bold text-white uppercase tracking-tighter mb-1">{title}</h5>
      <p className="text-xs text-slate-400 mb-2 leading-relaxed">{symptoms}</p>
      <div className="text-[10px] font-bold text-[#fb336d] flex items-center gap-1">
        <span className="animate-pulse">⚠️</span> Alerta: {alert}
      </div>
    </div>
  </div>
);

// --- MATRIZ DE INVESTIGAÇÃO ---
const InvestigationMatrixView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAxis, setFilterAxis] = useState("Todos");

  const matrixData = [
    { symptoms: "Fadiga", axis: "Tireoide", exams: "TSH, T3 livre, T4 livre", protocol: "Protocolo de suporte tireoidiano" },
    { symptoms: "Dificuldade para emagrecer", axis: "Tireoide", exams: "TSH, T3, T4", protocol: "Protocolo metabólico" },
    { symptoms: "Intolerância ao frio", axis: "Tireoide", exams: "TSH, T3 livre", protocol: "Protocolo de suporte tireoidiano" },
    { symptoms: "Constipação / Pele seca", axis: "Tireoide", exams: "TSH, T3 / TSH, T4", protocol: "Protocolo metabólico intestinal / nutricional" },
    { symptoms: "Queda de cabelo", axis: "Tireoide", exams: "TSH, Ferritina, T3", protocol: "Protocolo capilar hormonal" },
    { symptoms: "Inchaço corporal", axis: "Tireoide", exams: "TSH, T4", protocol: "Protocolo metabólico" },
    { symptoms: "Cansaço ao acordar / Queda energia tarde", axis: "Eixo Adrenal", exams: "Cortisol (curva), DHEA-S", protocol: "Protocolo suporte adrenal" },
    { symptoms: "Desejo por sal / tontura ao levantar", axis: "Eixo Adrenal", exams: "Aldosterona, Cortisol, Sódio", protocol: "Protocolo recuperação adrenal" },
    { symptoms: "Ansiedade / Insônia", axis: "Eixo HPA", exams: "Cortisol salivar, Magnésio, B6", protocol: "Protocolo modulação estresse" },
    { symptoms: "Compulsão por doces / Sonolência pós", axis: "Insulina / Metabólico", exams: "Insulina jejum, HOMA-IR, Glicada", protocol: "Protocolo resistência insulina" },
    { symptoms: "Gordura abdominal excessiva", axis: "Metabólico", exams: "Insulina, Perfil lipídico, PCR-us", protocol: "Protocolo anti-inflatário" },
    { symptoms: "TPM intensa / Cólicas", axis: "Gonadal Feminino", exams: "Progesterona, Estradiol, Vitamina D", protocol: "Protocolo saúde feminina" },
    { symptoms: "Acne / Hirsutismo", axis: "Gonadal Feminino", exams: "Testosterona livre/total, SDHEA, SHBG", protocol: "Protocolo hiperandrogenismo" },
    { symptoms: "Libido baixa (Feminino)", axis: "Gonadal Feminino", exams: "Testosterona, Estradiol, DHEA", protocol: "Protocolo vitalidade feminina" },
    { symptoms: "Falta motivação / Perda massa (Masculino)", axis: "Gonadal Masculino", exams: "Testosterona Total/Livre, SHBG, DHT", protocol: "Protocolo saúde masculina" },
    { symptoms: "Redução ereção matinal / Libido baixa", axis: "Gonadal Masculino", exams: "Testosterona, Prolactina, Estradiol", protocol: "Protocolo performance masculina" },
    { symptoms: "Sono não reparador / Acorda cansado", axis: "Ritmo Circadiano", exams: "Cortisol salivar (curva), Melatonina", protocol: "Protocolo regulação sono" },
    { symptoms: "Queda desempenho treinos / Fadiga muscular", axis: "GH/IGF-1 / Adrenal", exams: "IGF-1, DHEA-S, Cortisol", protocol: "Protocolo anabólico / suporte energético" },
    { symptoms: "Redução clareza mental / Desmotivação", axis: "Eixo HPA / Nutricional", exams: "B12, Folato, Homocisteína, DHEA-S", protocol: "Protocolo cognitivo / neuroendócrino" },
  ];

  const axes = ["Todos", ...new Set(matrixData.map(item => item.axis))];

  const filteredData = matrixData.filter(item => {
    const matchesSearch = item.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.exams.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAxis = filterAxis === "Todos" || item.axis === filterAxis;
    return matchesSearch && matchesAxis;
  });

  return (
    <div className="space-y-6">
      <div className="bg-[#fb336d]/5 border border-[#fb336d]/20 rounded-2xl p-6 mb-8">
        <h3 className="text-white font-bold flex items-center gap-2 mb-2 text-lg">
          <Network className="text-[#fb336d]" /> Matriz de Investigação Avançada
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed">
          Esta matriz conecta sinais e sintomas relatados na anamnese com os eixos hormonais associados, sugerindo exames laboratoriais pertinentes e direcionamento terapêutico.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="Buscar por sintoma ou exame..."
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#fb336d] transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-3 py-2 shrink-0">
          <Filter size={16} className="text-slate-500" />
          <select 
            className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
            value={filterAxis}
            onChange={(e) => setFilterAxis(e.target.value)}
          >
            {axes.map(axis => <option key={axis} value={axis} className="bg-[#0d0618]">{axis}</option>)}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th className="px-4 py-4">Sinais e Sintomas</th>
              <th className="px-4 py-4">Eixo Hormonal</th>
              <th className="px-4 py-4">Exames Principais</th>
              <th className="px-4 py-4">Protocolo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredData.length > 0 ? filteredData.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors group">
                <td className="px-4 py-4 font-semibold text-slate-200">{item.symptoms}</td>
                <td className="px-4 py-4">
                  <span className="bg-[#fb336d]/10 text-[#fb336d] text-[10px] px-2 py-0.5 rounded-full border border-[#fb336d]/20 font-bold">
                    {item.axis}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-400 text-xs leading-relaxed">{item.exams}</td>
                <td className="px-4 py-4 text-[#fb336d] font-bold text-[10px] uppercase flex items-center gap-1">
                  <Target size={12} /> {item.protocol}
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="px-4 py-10 text-center text-slate-500 italic">Nenhum resultado encontrado para os filtros aplicados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
        <Info className="text-[#fb336d]" size={18} />
        <p className="text-[10px] text-slate-400 leading-tight">
          <strong className="text-slate-200">Nota Clínica:</strong> A investigação deve sempre priorizar a clínica soberana. Os exames sugeridos são pontos de partida para confirmação bioquímica de hipóteses formuladas durante a anamnese.
        </p>
      </div>
    </div>
  );
};

// --- QUESTIONÁRIO DE SINTOMAS ---
const InteractiveQuestionnaire = () => {
  const [scores, setScores] = useState({});

  const axes = [
    {
      name: "Eixo Tireoidiano (HHT)",
      symptoms: [
        "Cansaço persistente ou letargia",
        "Sensação de frio excessivo",
        "Pele seca e descamativa",
        "Cabelos finos, secos ou quebradiços",
        "Queda de cabelo",
        "Unhas fracas e quebradiças",
        "Prisão de ventre (constipação)",
        "Dificuldade de concentração ou 'nevoeiro mental'",
        "Lentidão de raciocínio",
        "Ganho de peso inexplicado",
        "Dificuldade de emagrecer",
        "Retenção de líquido (inchaço)"
      ]
    },
    {
      name: "Eixo Adrenal (HHA)",
      symptoms: [
        "Cansaço ao acordar (mesmo após dormir bem)",
        "Queda brusca de energia no meio da tarde",
        "Desejo excessivo por sal ou alimentos salgados",
        "Desejo excessivo por açúcar ou cafeína",
        "Tontura ao se levantar rapidamente",
        "Sensação de sobrecarga ou dificuldade de lidar com estresse",
        "Irritabilidade frequente",
        "Ansiedade ou nervosismo excessivo",
        "Recuperação lenta após doenças ou treinos",
        "Sudorese excessiva ou ausente"
      ]
    },
    {
      name: "Eixo Gonadal Feminino",
      symptoms: [
        "Tensão Pré-Menstrual (TPM) intensa",
        "Irregularidade no ciclo menstrual",
        "Cólica menstrual excessiva",
        "Fluxo menstrual muito intenso",
        "Retenção hídrica cíclica",
        "Mastalgia (dor ou sensibilidade nas mamas)",
        "Acne em períodos específicos do ciclo",
        "Hirsutismo (crescimento excessivo de pelos)",
        "Oscilações bruscas de humor",
        "Baixa libido (desejo sexual)",
        "Ondas de calor (fogachos)",
        "Ressecamento vaginal"
      ]
    },
    {
      name: "Eixo Gonadal Masculino",
      symptoms: [
        "Redução do desejo sexual (libido)",
        "Redução da ereção matinal",
        "Fadiga persistente e falta de motivação",
        "Perda de massa muscular",
        "Aumento de gordura corporal (abdominal)",
        "Dificuldade para ganhar massa muscular",
        "Redução da força física",
        "Queda de desempenho em treinos",
        "Fadiga muscular frequente",
        "Redução da clareza mental e desmotivação"
      ]
    },
    {
      name: "Eixo Metabólico (Insulina)",
      symptoms: [
        "Fome excessiva ou compulsão por doces",
        "Sonolência ou fadiga após refeições",
        "Dificuldade de emagrecer (mesmo com dieta)",
        "Ganho de gordura na região abdominal",
        "Necessidade frequente de lanchar entre refeições",
        "Sensação de tremor ou irritabilidade se ficar sem comer",
        "Manchas escuras na pele (pescoço/axilas)",
        "Pequenos sinais de carne na pele (acrocórdons)"
      ]
    },
    {
      name: "Ritmo Circadiano",
      symptoms: [
        "Dificuldade para iniciar o sono",
        "Despertares frequentes durante a noite",
        "Sono não reparador (acorda cansado)",
        "Dificuldade de recuperação após noites mal dormidas",
        "Pico de energia à noite (dificuldade de 'desligar')",
        "Sonolência excessiva durante o dia",
        "Dependência de cafeína para funcionar",
        "Uso frequente de telas antes de dormir"
      ]
    }
  ];

  const handleScoreChange = (axis, symptom, value) => {
    setScores(prev => ({
      ...prev,
      [axis]: {
        ...(prev[axis] || {}),
        [symptom]: value
      }
    }));
  };

  const calculateAxisTotal = (axis) => {
    if (!scores[axis]) return 0;
    return Object.values(scores[axis]).reduce((a, b) => a + b, 0);
  };

  return (
    <div className="mt-8">
      <div className="bg-black/30 border border-white/10 rounded-xl p-4 mb-8">
        <p className="text-xs text-slate-400 leading-relaxed italic">
          <span className="text-[#fb336d] font-bold">Instruções:</span> Avalie a frequência de cada sintoma nas últimas semanas utilizando a escala de 0 a 4 (0: Nunca; 1: Raramente; 2: Às vezes; 3: Frequentemente; 4: Sempre).
        </p>
      </div>

      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <ListChecks className="text-[#fb336d]" size={20} /> Avaliação Funcional Integrada
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {axes.map((axis, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col h-full shadow-lg">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
              <h4 className="text-[11px] font-bold text-[#fb336d] uppercase tracking-wider">{axis.name}</h4>
              <span className={`px-2 py-1 rounded text-xs font-bold border ${
                calculateAxisTotal(axis.name) > 15 ? 'bg-[#fb336d]/20 text-[#fb336d] border-[#fb336d]/30' : 'bg-black/40 text-slate-300 border-white/10'
              }`}>
                {calculateAxisTotal(axis.name)} pts
              </span>
            </div>
            
            <div className="space-y-2 flex-grow overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
              {axis.symptoms.map((s, i) => (
                <div key={i} className="flex justify-between items-center bg-black/30 p-2 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-[10px] text-slate-300 font-medium leading-tight w-1/2 pr-2">{s}</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map(val => (
                      <button
                        key={val}
                        onClick={() => handleScoreChange(axis.name, s, val)}
                        className={`w-5 h-5 md:w-6 md:h-6 rounded text-[9px] font-bold transition-all flex items-center justify-center ${
                          scores[axis.name]?.[s] === val 
                            ? 'bg-[#fb336d] text-white shadow-lg shadow-[#fb336d]/30' 
                            : 'bg-black/60 text-slate-500 border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- PROTOCOLOS NUTRICIONAIS E DE ESTILO DE VIDA ---
const protocolosDataList = [
  {
    id: 'hpa',
    title: 'Protocolo de Regulação do Eixo do Estresse',
    subtitle: '(Eixo Hipotálamo–Hipófise–Adrenal – HPA)',
    icon: Zap,
    objetivo: 'Restabelecer o equilíbrio do eixo do estresse, modulando a produção de cortisol e melhorando a capacidade adaptativa do organismo diante de demandas físicas, emocionais e metabólicas.',
    indicacoes: ['Fadiga persistente', 'Ansiedade', 'Irritabilidade', 'Dificuldade de concentração', 'Insônia ou sono não reparador', 'Baixa tolerância ao estresse', 'Queda de energia ao longo do dia'],
    estrategiasNutri: [
      {
        titulo: '1. Organização do padrão alimentar',
        desc: 'Um dos primeiros pontos para estabilizar o eixo HPA é evitar grandes oscilações glicêmicas, que estimulam a liberação de cortisol.',
        items: [
          { titulo: 'Estratégias Recomendadas:', linhas: ['Realizar 3 a 4 refeições principais ao longo do dia', 'Evitar longos períodos de jejum em pacientes com fadiga', 'Incluir proteína em todas as refeições', 'Priorizar alimentos de baixo índice glicêmico'] },
          { titulo: 'Distribuição Sugerida:', destaque: true, linhas: ['Manhã: Proteína + carboidrato complexo', 'Almoço: Equilibrado com proteínas, vegetais e gordura boa', 'Lanche: Leve rico em proteínas ou gordura boa', 'Jantar: Leve com proteínas e vegetais'] }
        ]
      },
      {
        titulo: '2. Nutrientes Essenciais e Alimentos',
        grid: [
          { nome: 'Magnésio', desc: 'Modulação do sistema nervoso e melhora do sono.', fontes: 'Sementes de abóbora, amêndoas, espinafre, cacau 70%.' },
          { nome: 'Vitamina C', desc: 'Síntese de hormônios adrenais e antioxidante.', fontes: 'Acerola, kiwi, laranja, pimentão.' },
          { nome: 'Complexo B', desc: 'Metabolismo energético e suporte adrenal.', fontes: 'Carnes, ovos, vegetais verde-escuros.' },
          { nome: 'Proteínas Adequadas', desc: 'Estabilidade glicêmica e energia.', fontes: 'Ovos, peixes, carnes magras, leguminosas.' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Magnésio', dose: '200 – 400 mg/dia', desc: 'Relaxamento neuromuscular e melhora do sono.', destaque: true },
      { nome: 'Vitamina C', dose: '500 – 1000 mg/dia', desc: 'Suporte adrenal e modulação da resposta ao estresse.' },
      { nome: 'Complexo B', dose: '1 cáps/dia', desc: 'Suporte metabólico, energia e equilíbrio neuroendócrino.' },
      { nome: 'Adaptógenos', dose: 'Conforme avaliação', desc: 'Ashwagandha (300-600mg), Rhodiola (200-400mg).' }
    ],
    magistral: { formula: 'Magnésio glicinato (200mg) + Ashwagandha (300mg) + Vitamina B6 (10mg)', posologia: '1 dose à noite.' },
    estilo: [
      { nome: 'Ritmo Circadiano & Sono', desc: 'Dormir 7 a 9h no escuro. Exposição à luz solar pela manhã.', icon: Moon },
      { nome: 'Atividade Física', desc: 'Aeróbicos moderados, musculação e relaxamento.', icon: Activity },
      { nome: 'Manejo do Estresse', desc: 'Técnicas de respiração, meditação e contato com a natureza.', icon: User }
    ],
    resultados: 'Melhora da energia ao longo do dia, redução da ansiedade, melhora da qualidade do sono, maior capacidade de lidar com o estresse e melhora da função metabólica.',
    referencias: ['Chrousos GP. Stress and disorders of the stress system. Nat Rev Endocrinol. 2009.', 'Lopresti AL, et al. Ashwagandha for stress and anxiety. J Clin Med. 2019.']
  },
  {
    id: 'circadiano',
    title: 'Protocolo de Regulação Circadiana',
    subtitle: '(Sincronização do Ritmo Biológico e Saúde Hormonal)',
    icon: Clock,
    objetivo: 'Restabelecer a sincronização do ritmo circadiano, favorecendo a produção adequada de hormônios como cortisol, melatonina e GH, além de melhorar a energia diurna e qualidade do sono.',
    indicacoes: ['Dificuldade para dormir', 'Sono fragmentado', 'Cansaço ao acordar', 'Sonolência diurna', 'Dificuldade de concentração', 'Jet lag social', 'Cortisol noturno alto'],
    estrategiasNutri: [
      {
        titulo: '1. Organização do horário das refeições',
        desc: 'O horário das refeições funciona como um importante sincronizador circadiano, mandando sinais aos tecidos.',
        items: [
          { titulo: 'Estratégias Recomendadas:', linhas: ['Realizar café da manhã nas primeiras horas após acordar', 'Manter horários regulares de alimentação', 'Evitar refeições volumosas próximas de dormir'] },
          { titulo: 'Nutrientes de Suporte:', destaque: true, linhas: ['Triptofano (ovos, banana, aveia)', 'Magnésio (amêndoas, espinafre)', 'Carboidratos complexos no jantar para facilitar serotonina'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Magnésio', dose: '200 – 400 mg/dia', desc: 'Relaxamento neuromuscular.', destaque: true },
      { nome: 'L-Triptofano', dose: '500 – 1000 mg', desc: 'À noite. Precursor de serotonina/melatonina.' },
      { nome: 'Melatonina', dose: '0.5 – 3 mg', desc: '30 min antes de dormir. Sincronização.' }
    ],
    magistral: { formula: 'Magnésio glicinato (200mg) + L-triptofano (500mg) + Vitamina B6 (10mg)', posologia: '1 dose à noite.' },
    estilo: [
      { nome: 'Manejo da Luz', desc: 'Luz solar pela manhã (10-30m). Evitar telas azuis à noite.', icon: Sun },
      { nome: 'Rotina Regular', desc: 'Dormir e acordar em horários semelhantes todos os dias.', icon: CalendarDays }
    ],
    resultados: 'Melhora do sono, redução da fadiga diurna, melhor funcionamento metabólico e regulação do eixo cortisol-melatonina.',
    referencias: ['Czeisler CA. The human circadian timing system. 2010.', 'Walker MP. Why We Sleep. 2017.']
  },
  {
    id: 'sono',
    title: 'Protocolo de Regulação do Sono',
    subtitle: '(Qualidade, Ritmo Circadiano e Recuperação Neuroendócrina)',
    icon: Moon,
    objetivo: 'Melhorar a latência, duração e qualidade do sono, promovendo produção de melatonina e recuperação dos eixos HPA, gonadal e metabólico.',
    indicacoes: ['Dificuldade para iniciar o sono', 'Despertares noturnos', 'Acordar cansado', 'Ansiedade noturna', 'Uso excessivo de telas'],
    estrategiasNutri: [
      {
        titulo: '1. Crononutrição e Nutrientes-chave',
        items: [
          { titulo: 'Timing Alimentar:', linhas: ['Manter horários regulares', 'Jantar leve (proteína+vegetais)', 'Carbo complexo à noite para indução'] },
          { titulo: 'Nutrientes Essenciais:', destaque: true, linhas: ['Triptofano (ovos, banana, sementes)', 'Magnésio (cacau, amêndoas)', 'Vitamina B6 e Zinco'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Magnésio Inositol', dose: '200-400mg Mg + 2g Ino', desc: 'Melhora sinalização GABAérgica.', destaque: true },
      { nome: 'Passiflora / Valeriana', dose: '200-500mg', desc: 'Ação ansiolítica facilitadora.' },
      { nome: 'Glicina', dose: '2 – 3 g', desc: 'Reduz temperatura central, melhora profundidade.' }
    ],
    magistral: { formula: 'Magnésio glicinato (200mg) + L-Triptofano (500mg) + Glicina (1g)', posologia: '1 dose à noite.' },
    estilo: [
      { nome: 'Higiene do Sono', desc: 'Rotina pré-sono de desaceleração, quarto escuro e temperatura (18-22°C).', icon: Moon },
      { nome: 'Estimulantes', desc: 'Cessar cafeína após as 14h-16h.', icon: Coffee }
    ],
    resultados: 'Redução do tempo para adormecer, aumento da profundidade e melhora da energia diurna.',
    referencias: ['Riemann D, et al. European guideline for insomnia. 2017.']
  },
  {
    id: 'adaptogeno',
    title: 'Protocolo Adaptógeno',
    subtitle: '(Resiliência Neuroendócrina e Modulação do Estresse)',
    icon: Activity,
    objetivo: 'Aumentar a capacidade adaptativa do organismo ao estresse com plantas adaptógenas, normalizando cortisol e energia.',
    indicacoes: ['Estresse crônico', 'Fadiga mental', 'Baixa energia', 'Ansiedade moderada', 'Esgotamento'],
    estrategiasNutri: [
      {
        titulo: '1. Estabilidade Metabólica',
        desc: 'Adaptógenos funcionam muito melhor com eixo glicêmico estável e inflamação controlada.',
        items: [
          { titulo: 'Alimentação:', linhas: ['Evitar picos de insulina', 'Incluir peixes ricos em ômega-3', 'Frutas antioxidantes e vegetais'] },
          { titulo: 'Cofatores:', destaque: true, linhas: ['Magnésio (potencializa relaxamento)', 'Vitamina C (suporte adrenal)', 'Complexo B'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Ashwagandha', dose: '300 – 600 mg', desc: 'Foco: ansiedade, insônia e cortisol alto.', destaque: true },
      { nome: 'Rhodiola rosea', dose: '200 – 400 mg', desc: 'Foco: fadiga mental, concentração e energia.' },
      { nome: 'Panax ginseng', dose: '200 – 400 mg', desc: 'Foco: vitalidade e performance física.' },
      { nome: 'Eleutherococcus', dose: '300 – 600 mg', desc: 'Foco: resistência física e estresse longo.' }
    ],
    magistral: { formula: 'Ashwagandha (300mg) + Rhodiola rosea (200mg) + Magnésio (200mg)', posologia: '1x ao dia (manhã ou tarde).' },
    estilo: [
      { nome: 'Rotina e Pausas', desc: 'Reduzir sobrecarga de estímulos e multitarefa.', icon: Clock },
      { nome: 'Contato com Natureza', desc: 'A exposição natural reduz de forma abrupta o cortisol.', icon: Sun }
    ],
    resultados: 'Resiliência ao estresse, melhora do foco e regulação do eixo HPA.',
    referencias: ['Panossian A. Effects of adaptogens on the central nervous system. 2010.']
  },
  {
    id: 'adrenal',
    title: 'Protocolo de Suporte Adrenal',
    subtitle: '(Energia, Resiliência e Recuperação Adrenal)',
    icon: Thermometer,
    objetivo: 'Dar suporte funcional às adrenais, estabilizando produção de cortisol e DHEA.',
    indicacoes: ['Cansaço extremo ao acordar', 'Queda de energia à tarde', 'Dependência de café', 'Baixa tolerância ao estresse'],
    estrategiasNutri: [
      {
        titulo: '1. Suporte Glicêmico e Vitamínico',
        grid: [
          { nome: 'Vitamina C', desc: 'Altamente concentrada nas adrenais (síntese hormonal).', fontes: 'Acerola, kiwi, morango.' },
          { nome: 'Complexo B (B5)', desc: 'Produção de energia mitocondrial.', fontes: 'Fígado, ovos, leguminosas.' },
          { nome: 'Sódio', desc: 'Ajuda se há hipotensão/fadiga.', fontes: 'Sal de boa qualidade.' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Vitamina C', dose: '500 – 1000 mg', desc: 'Suporte antioxidante adrenal.', destaque: true },
      { nome: 'Magnésio', dose: '200 – 400 mg', desc: 'Glicinato ou dimalato.' },
      { nome: 'Vitamina B5', dose: '50 – 100 mg', desc: 'Essencial para resposta ao estresse.' },
      { nome: 'Coenzima Q10', dose: '100 – 200 mg', desc: 'Suporte energético profundo.' }
    ],
    magistral: { formula: 'Vitamina C (500mg) + Magnésio (200mg) + Vitamina B5 (50mg) + CoQ10 (100mg)', posologia: '1x ao dia.' },
    estilo: [
      { nome: 'Desmame de Estimulantes', desc: 'Reduzir cafeína que apenas mascara a exaustão adrenal.', icon: Coffee },
      { nome: 'Pausas Estratégicas', desc: 'Pausas curtas para frear a produção contínua de cortisol.', icon: User }
    ],
    resultados: 'Redução do esgotamento diurno, fim da dependência de estimulantes e energia consistente.',
    referencias: ['Wilson J. Adrenal fatigue: the 21st century stress syndrome. 2001.']
  },
  {
    id: 'energetico',
    title: 'Protocolo de Suporte Energético',
    subtitle: '(Função Mitocondrial e Produção de ATP)',
    icon: Zap,
    objetivo: 'Otimizar a produção de energia celular através da melhora mitocondrial e correção de falhas.',
    indicacoes: ['Fadiga física e mental', 'Recuperação lenta', 'Baixa tolerância ao exercício', 'Sarcopenia'],
    estrategiasNutri: [
      {
        titulo: '1. Combustível Celular',
        grid: [
          { nome: 'Ferro e B12', desc: 'Transporte de oxigênio e metabolismo neurológico.', fontes: 'Carnes, fígado, ovos.' },
          { nome: 'Coenzima Q10', desc: 'Cadeia respiratória mitocondrial direta.', fontes: 'Peixes, oleaginosas.' },
          { nome: 'Magnésio', desc: 'Cofator da molécula de ATP.', fontes: 'Vegetais verdes, sementes.' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Coenzima Q10', dose: '100 – 200 mg', desc: 'Aumento da produção de energia.', destaque: true },
      { nome: 'L-Carnitina', dose: '500 – 2000 mg', desc: 'Transporte de gordura para mitocôndria.' },
      { nome: 'Complexo B / B12', dose: '1 cápsula / 500mcg', desc: 'Ignição metabólica.' }
    ],
    magistral: { formula: 'CoQ10 (100mg) + Magnésio (200mg) + L-Carnitina (500mg) + Complexo B', posologia: '1-2x ao dia.' },
    estilo: [
      { nome: 'Atividade Física', desc: 'Aumenta diretamente o número de mitocôndrias ativas.', icon: Activity }
    ],
    resultados: 'Disposição renovada, fim da letargia e melhora clara do desempenho cognitivo.',
    referencias: ['Nicholls DG. Bioenergetics. 2013.', 'Crane FL. Biochemical functions of CoQ10. 2001.']
  },
  {
    id: 'tireoidiano',
    title: 'Protocolo de Suporte Tireoidiano',
    subtitle: '(Conversão Hormonal e Otimização de T3)',
    icon: Target,
    objetivo: 'Melhorar a conversão periférica de T4 em T3, reduzir autoimunidade e reativar metabolismo basal.',
    indicacoes: ['Intolerância ao frio', 'Dificuldade para emagrecer', 'Constipação', 'Queda de cabelo', 'Pele seca'],
    estrategiasNutri: [
      {
        titulo: '1. Micronutrientes da Tireoide',
        items: [
          { titulo: 'Cruciais:', linhas: ['Selênio (Castanha do Pará) - conversão T4>T3', 'Zinco (Carnes/Sementes) - suporte imunológico', 'Ferro (Tireoperoxidase) e Iodo'] },
          { titulo: 'Atenção (Crucíferos):', destaque: true, linhas: ['Brócolis, couve e repolho cruz podem interferir no iodo se em excesso. Preferir cozidos.'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Selênio', dose: '100 – 200 mcg', desc: 'Garante conversão e freia Anti-TPO.', destaque: true },
      { nome: 'Zinco', dose: '15 – 30 mg', desc: 'Essencial na síntese hormonal.' },
      { nome: 'L-Tirosina', dose: '500 – 1000 mg', desc: 'Aminoácido base do hormônio tireoidiano.' },
      { nome: 'Vitamina D', dose: '2000 – 5000 UI', desc: 'Modulação imune (Hashimoto).' }
    ],
    magistral: { formula: 'Selênio (100mcg) + Zinco (15mg) + L-Tirosina (500mg) + Magnésio (200mg)', posologia: '1x ao dia pela manhã.' },
    estilo: [
      { nome: 'Saúde Intestinal', desc: 'A disbiose afeta pesadamente a conversão de T3.', icon: Droplets },
      { nome: 'Controle de Estresse', desc: 'Cortisol alto desvia T4 para T3 Reverso (inativo).', icon: User }
    ],
    resultados: 'Cabelos fortes, aquecimento corporal, trânsito intestinal ativo e quebra do platô de peso.',
    referencias: ['Ventura M. Selenium and thyroid disease. 2017.']
  },
  {
    id: 'sensibilidade_insulina',
    title: 'Sensibilidade à Insulina e Metabolismo',
    subtitle: '(Flexibilidade Metabólica e Gordura Visceral)',
    icon: Activity,
    objetivo: 'Restaurar eficiência metabólica reduzindo hiperinsulinemia, picos de glicose e inflamação celular.',
    indicacoes: ['Gordura abdominal resistente', 'Sonolência pós-prandial', 'Fome de carboidratos', 'Efeito sanfona', 'HOMA-IR elevado'],
    estrategiasNutri: [
      {
        titulo: '1. Composição Estratégica',
        desc: 'Proteína (25-30%) + Fibras/Vegetais (30-40%) + Gordura Boa (20-30%). Carboidratos restritos à noite se há resistência.',
        grid: [
          { nome: 'Fibras Solúveis', desc: 'Atrasam a absorção da glicose.', fontes: 'Aveia, chia, vegetais.' },
          { nome: 'Proteínas', desc: 'Saciedade longa e gasto calórico.', fontes: 'Ovos, carnes, iogurte natural.' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Berberina', dose: '500 mg (2-3x/dia)', desc: 'Poderoso sensibilizador insulínico e redutor glicêmico.', destaque: true },
      { nome: 'Cromo', dose: '100 – 200 mcg', desc: 'Controle do desejo por doces.' },
      { nome: 'Magnésio', dose: '200 – 400 mg', desc: 'Atua no receptor de insulina.' },
      { nome: 'Myo-Inositol', dose: '2 – 4 g', desc: 'Sinalizador celular (Ótimo p/ mulheres SOP).' }
    ],
    magistral: { formula: 'Berberina (500mg) + Cromo (100mcg) + Magnésio (200mg)', posologia: '1 cápsula 15 min antes das maiores refeições.' },
    estilo: [
      { nome: 'Musculação', desc: 'Músculo é o maior sorvedouro de glicose do corpo.', icon: Activity }
    ],
    resultados: 'Queda do HOMA-IR, emagrecimento fluido e fim do "coma" pós-almoço.',
    referencias: ['Cicero AF. Berberine and metabolic health. 2016.', 'DeFronzo RA. Insulin resistance. 1991.']
  },
  {
    id: 'fome_compulsao',
    title: 'Controle de Compulsão e Fome Excessiva',
    subtitle: '(Dopamina, Serotonina e Recompensa Cerebral)',
    icon: Coffee,
    objetivo: 'Desarmar os ciclos de compulsão estabilizando o eixo glicêmico e nutrindo neurotransmissores inibitórios.',
    indicacoes: ['Desejo incontrolável por doces', 'Fome constante', 'Beliscar o dia todo', 'Ansiedade alimentar'],
    estrategiasNutri: [
      {
        titulo: '1. Estabilidade e Saciedade',
        items: [
          { titulo: 'Táticas:', linhas: ['Evitar comer carboidratos refinados isolados', 'Garantir altíssima densidade proteica de manhã'] },
          { titulo: 'Neurotransmissores:', destaque: true, linhas: ['Triptofano (Serotonina) -> Banana, cacau, aveia', 'Tirosina (Dopamina/Foco) -> Ovos, carnes'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'L-Triptofano', dose: '500 – 1000 mg', desc: 'Melhora o humor e reduz ansiedade alimentar à noite.', destaque: true },
      { nome: 'Picolinato de Cromo', dose: '200 mcg', desc: 'Abaixa picos de insulina.' },
      { nome: 'Magnésio', dose: '200 – 400 mg', desc: 'Freia o sistema nervoso simpático.' }
    ],
    magistral: { formula: 'L-Triptofano (500mg) + Magnésio (200mg) + Cromo (100mcg)', posologia: '1 dose no fim da tarde/noite.' },
    estilo: [
      { nome: 'Jejum vs Estresse', desc: 'Em casos de muita compulsão, evitar jejuns prolongados até estabilizar a insulina.', icon: Clock }
    ],
    resultados: 'Paz alimentar, fim do desespero noturno por açúcar e controle racional da dieta.',
    referencias: ['Benton D. Carbohydrates and mood. 2002.']
  },
  {
    id: 'constipacao',
    title: 'Protocolo Metabólico Intestinal',
    subtitle: '(Constipação, Motilidade e Estroboloma)',
    icon: Droplets,
    objetivo: 'Restabelecer a motilidade e microbiota, cruciais para a eliminação do excesso de estrogênio (dominância estrogênica).',
    indicacoes: ['Fezes ressecadas', 'Evacuação < 3x/semana', 'Gases frequentes', 'Inchaço'],
    estrategiasNutri: [
      {
        titulo: '1. Hidratação e Fibras',
        desc: 'Meta de 25-35g de fibras/dia com 35ml/kg de água.',
        grid: [
          { nome: 'Fibras Solúveis', desc: 'Formam gel (Psyllium, aveia, chia).' },
          { nome: 'Gorduras', desc: 'Lubrificação (Azeite, abacate).' },
          { nome: 'Laxativos Naturais', desc: 'Mamão, ameixa, kiwi.' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Psyllium', dose: '5 – 10 g/dia', desc: 'Volume e maciez fecal.', destaque: true },
      { nome: 'Citrato de Magnésio', dose: '200 – 400 mg', desc: 'Efeito osmótico suave no intestino.' },
      { nome: 'Probióticos', dose: '1-10 bi UFC', desc: 'Bifidobacterium e Lactobacillus.' }
    ],
    magistral: { formula: 'Psyllium (5g) + Magnésio Citrato (200mg) + Inulina (2g)', posologia: 'Uso diário com muita água.' },
    estilo: [
      { nome: 'Postura de Cócoras', desc: 'Uso de banquinho para facilitar o ângulo anorretal.', icon: User }
    ],
    resultados: 'Evacuação diária suave, fim do abdômen distendido e limpeza estrogênica funcional.',
    referencias: ['Suares NC. Fiber in constipation. 2011.']
  },
  {
    id: 'tpm_intensa',
    title: 'Equilíbrio Hormonal (TPM Intensa)',
    subtitle: '(Estradiol, Progesterona e Mastalgia)',
    icon: Target,
    objetivo: 'Equilibrar a queda de progesterona e combater a inflamação responsável pelo inchaço e labilidade emocional.',
    indicacoes: ['Irritabilidade profunda', 'Dor mamária', 'Retenção hídrica ciclíca', 'Cólicas fortes', 'Choro fácil'],
    estrategiasNutri: [
      {
        titulo: '1. Suporte Lúteo',
        items: [
          { titulo: 'Ações:', linhas: ['Aumentar Magnésio e B6 (reduz irritação)', 'Ômega-3 (reduz prostaglandinas da cólica)'] },
          { titulo: 'Detox:', destaque: true, linhas: ['Crucíferos (Brócolis) auxiliam na limpeza do estradiol excessivo.'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Vitamina B6 (P5P)', dose: '25 – 50 mg', desc: 'Cofator da serotonina. Excelente p/ humor.', destaque: true },
      { nome: 'Magnésio', dose: '300 mg', desc: 'Alivia inchaço e dor.' },
      { nome: 'Vitex agnus-castus', dose: '150 – 250 mg', desc: 'Aumenta progesterona endógena.' },
      { nome: 'Óleo de Prímula/Vit E', dose: 'Avaliável', desc: 'Específico para seios doloridos (Mastalgia).' }
    ],
    magistral: { formula: 'Magnésio (200mg) + Vitamina B6 (25mg) + Vitex (200mg)', posologia: 'Uso contínuo, foco na fase lútea.' },
    estilo: [
      { nome: 'Gestão de Sobrecarga', desc: 'O estresse (Cortisol) "rouba" a matéria prima da progesterona.', icon: Activity }
    ],
    resultados: 'TPM leve ou imperceptível, fim das cólicas limitantes e seios indolores.',
    referencias: ['Rapkin AJ. Treatment of premenstrual dysphoric disorder. 2013.']
  },
  {
    id: 'menopausa',
    title: 'Protocolo de Menopausa',
    subtitle: '(Ondas de Calor, Ossos e Neuroproteção)',
    icon: Thermometer,
    objetivo: 'Apoiar o declínio estrogênico atenuando fogachos, ressecamento e prevenindo sarcopenia/osteopenia.',
    indicacoes: ['Fogachos', 'Insônia', 'Ressecamento vaginal', 'Irritabilidade', 'Aumento de peso central'],
    estrategiasNutri: [
      {
        titulo: '1. Suporte Estrutural e Fitoestrógenos',
        grid: [
          { nome: 'Soja / Linhaça', desc: 'Fitoestrógenos com modulação suave.' },
          { nome: 'Cálcio + Vit D', desc: 'Proteção da matriz óssea.' },
          { nome: 'Proteínas Altas', desc: 'Prevenção direta da perda de massa muscular (sarcopenia).' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Isoflavonas', dose: '40 – 80 mg', desc: 'Redução expressiva de fogachos.', destaque: true },
      { nome: 'Cimicifuga racemosa', dose: '20 – 40 mg', desc: 'Alternativa fantástica para os calores.' },
      { nome: 'Vitamina D + K2', dose: '2000 - 5000 UI', desc: 'Fixação de cálcio no osso.' }
    ],
    magistral: { formula: 'Isoflavonas (40mg) + Magnésio (200mg) + Vit D (2000 UI) + Ômega-3', posologia: '1x ao dia.' },
    estilo: [
      { nome: 'Musculação', desc: 'Único estímulo não-medicamentoso que força a fixação óssea e muscular.', icon: Activity }
    ],
    resultados: 'Redução drástica de calores noturnos, preservação articular e estabilidade do peso.',
    referencias: ['Messina M. Soy isoflavones and menopause. 2014.']
  },
  {
    id: 'hormonal_masculino',
    title: 'Protocolo Hormonal Masculino',
    subtitle: '(Testosterona, Eixo HPT e Controle de SHBG)',
    icon: Target,
    objetivo: 'Otimizar a produção natural e biodisponibilidade da Testosterona Livre, reduzindo a ação de inibidores.',
    indicacoes: ['Baixa libido', 'Perda de massa magra', 'Aumento de gordura (aromatização)', 'Baixa motivação/foco'],
    estrategiasNutri: [
      {
        titulo: '1. Nutrição Androgênica',
        items: [
          { titulo: 'Fundamentos:', linhas: ['Colesterol bom (Ovos, azeite, abacate) é a matéria-prima da testosterona.', 'Reduzir gordura visceral (ela converte testosterona em estradiol).'] },
          { titulo: 'Minerais:', destaque: true, linhas: ['Zinco (Ostras, carnes) é vital na saúde testicular.', 'Magnésio aumenta a testosterona livre soltando-a do SHBG.'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Ashwagandha', dose: '300 – 600 mg', desc: 'Reduz cortisol, liberando o eixo para produzir Testosterona.', destaque: true },
      { nome: 'Zinco', dose: '15 – 30 mg', desc: 'Proteção e produção androgênica.' },
      { nome: 'Vitamina D', dose: '4000 UI', desc: 'Aumenta significativamente a Testo em deficientes.' },
      { nome: 'Tribulus/Maca', dose: 'Avaliável', desc: 'Foco apenas na recuperação da Libido.' }
    ],
    magistral: { formula: 'Ashwagandha (300mg) + Zinco (15mg) + Magnésio (200mg) + Vit D (2000 UI)', posologia: 'Acompanhar em exames após 60 dias.' },
    estilo: [
      { nome: 'Levantamento de Peso', desc: 'Exercícios compostos (Agachamento, Terra) são os maiores gatilhos hormonais.', icon: Activity }
    ],
    resultados: 'Retorno da vitalidade, melhora nas ereções matinais, recomposição corporal e foco afiado.',
    referencias: ['Lopresti AL. Ashwagandha and testosterone. 2019.']
  },
  {
    id: 'anabolico',
    title: 'Protocolo Anabólico e Sarcopenia',
    subtitle: '(GH, IGF-1, Fadiga e Baixa Massa Muscular)',
    icon: Activity,
    objetivo: 'Combater a perda de massa muscular e fraqueza, estimulando síntese proteica e sinalização de IGF-1.',
    indicacoes: ['Fraqueza muscular', 'Idosos com sarcopenia', 'Recuperação lenta de treinos', 'Dificuldade de hipertrofia'],
    estrategiasNutri: [
      {
        titulo: '1. Acionadores de Síntese Proteica',
        desc: 'Proteína fracionada ao longo do dia é indispensável (20-40g/refeição).',
        grid: [
          { nome: 'Leucina', desc: 'Gatilho chave da via mTOR (síntese muscular).', fontes: 'Carnes, ovos, whey.' },
          { nome: 'Carboidratos', desc: 'Pós-treino para frear catabolismo e repor glicogênio.', fontes: 'Arroz, batata, aveia.' }
        ]
      }
    ],
    suplementos: [
      { nome: 'Creatina', dose: '3 – 5 g/dia', desc: 'O suplemento mais eficaz para força, ATP e volume celular.', destaque: true },
      { nome: 'Whey Protein', dose: '20 – 30 g', desc: 'Rápida absorção para quebra de catabolismo.' },
      { nome: 'Vitamina D', dose: '2000 - 5000 UI', desc: 'Receptores VDR no músculo exigem Vit D.' }
    ],
    magistral: { formula: 'Associar uso de Creatina isolada 5g diárias + CoQ10 100mg se houver fadiga profunda.', posologia: 'Creatina todos os dias (sem pausa).' },
    estilo: [
      { nome: 'Sono (Janela do GH)', desc: 'O GH é secretado quase totalmente nas fases profundas do sono noturno.', icon: Moon }
    ],
    resultados: 'Ganho de força evidente, músculos mais cheios e interrupção do envelhecimento frágil.',
    referencias: ['Kreider RB. Creatine supplementation. 2017.', 'Phillips SM. Protein requirements. 2016.']
  },
  {
    id: 'queda_cabelo',
    title: 'Reposição Nutricional (Queda de Cabelo)',
    subtitle: '(Eflúvio Telógeno, Ferritina e Oxigenação)',
    icon: User,
    objetivo: 'Estancar a queda capilar tratando agressivamente a deficiência de Ferro/Ferritina e micronutrientes base.',
    indicacoes: ['Queda difusa severa', 'Cabelo fino e quebradiço', 'Ferritina < 50 ng/mL', 'Unhas fracas e palidez'],
    estrategiasNutri: [
      {
        titulo: '1. Otimização da Absorção de Ferro',
        items: [
          { titulo: 'Táticas de Absorção:', linhas: ['Ferro Heme (Carnes vermelhas, fígado) é altamente superior.', 'Sempre associar Vitamina C na refeição de carne para maximizar absorção.'] },
          { titulo: 'Inibidores (Cuidado!):', destaque: true, linhas: ['Nunca tomar café, chá preto ou leite (cálcio) junto com refeições ricas em ferro.'] }
        ]
      }
    ],
    suplementos: [
      { nome: 'Ferro Bisglicinato', dose: '30 – 60 mg', desc: 'Fórmula de altíssima absorção sem causar prisão de ventre.', destaque: true },
      { nome: 'Vitamina C', dose: '500 mg', desc: 'Cofator obrigatório na absorção do ferro.' },
      { nome: 'Biotina / Silício', dose: '5 mg / 10 mg', desc: 'Estrutura grossa e brilhante do fio.' },
      { nome: 'Zinco', dose: '15 – 30 mg', desc: 'Multiplicação celular no bulbo capilar.' }
    ],
    magistral: { formula: 'Ferro Bisglicinato (30mg) + Vit C (200mg) + Zinco (15mg) + Biotina (5mg)', posologia: '1x ao dia, longe de laticínios e café.' },
    estilo: [
      { nome: 'Saúde Intestinal', desc: 'Um intestino inflamado joga fora todo o ferro suplementado.', icon: Droplets }
    ],
    resultados: 'Crescimento de "baby hairs", fim da queda no banho e aumento expressivo na energia vital.',
    referencias: ['Trost LB. Iron deficiency and hair loss. 2006.']
  }
];

const ProtocolsView = () => {
  const [expandedProtocol, setExpandedProtocol] = useState(null);

  const toggleProtocol = (id) => {
    setExpandedProtocol(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#fb336d]/5 border border-[#fb336d]/20 rounded-2xl p-6 mb-8">
        <h3 className="text-white font-bold flex items-center gap-2 mb-2 text-lg">
          <Lightbulb className="text-[#fb336d]" /> Protocolos Nutricionais e de Estilo de Vida
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed">
          Projetados para conversar diretamente com o tópico anterior do manual: "Matriz de Investigação Hormonal". Clique nos protocolos abaixo para expandir e visualizar as informações detalhadas de manejo.
        </p>
      </div>

      <div className="space-y-4">
        {protocolosDataList.map((protocol) => {
          const isExpanded = expandedProtocol === protocol.id;
          const Icon = protocol.icon;
          return (
            <div key={protocol.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleProtocol(protocol.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors focus:outline-none text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#fb336d]/20 p-3 rounded-xl">
                    <Icon size={20} className="text-[#fb336d]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{protocol.title}</h4>
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">{protocol.subtitle}</p>
                  </div>
                </div>
                <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#fb336d]' : ''}`} />
              </button>

              {isExpanded && (
                <div className="p-6 md:p-8 border-t border-white/5 space-y-10 bg-black/20 animate-in slide-in-from-top-4 fade-in duration-300">
                  
                  {/* Objetivo */}
                  <div className="bg-black/40 border border-white/5 rounded-xl p-5">
                    <h5 className="text-[#fb336d] text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Target size={16} /> Objetivo do protocolo
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-medium">
                      {protocol.objetivo}
                    </p>
                    <p className="text-xs text-slate-400 mb-3 italic">Indicado para pacientes com:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {protocol.indicacoes.map((item, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-white/5 p-2 rounded border border-white/5">
                          <CheckCircle2 size={14} className="text-[#fb336d] shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Estratégias Nutricionais */}
                  <div>
                    <h5 className="text-white text-lg font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                      <FlaskConical size={18} className="text-[#fb336d]" /> Estratégias Nutricionais
                    </h5>
                    <div className="space-y-6">
                      {protocol.estrategiasNutri.map((est, i) => (
                        <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/5">
                          <h6 className="text-[#fb336d] font-bold text-sm mb-2">{est.titulo}</h6>
                          {est.desc && <p className="text-xs text-slate-300 mb-4">{est.desc}</p>}
                          {est.items && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {est.items.map((col, j) => (
                                <div key={j} className={col.destaque ? "bg-black/30 p-3 rounded-lg border border-white/5" : ""}>
                                  {col.titulo && <p className="text-[11px] font-bold text-white mb-2 uppercase tracking-wider">{col.titulo}</p>}
                                  <ul className="space-y-1.5 text-xs text-slate-400">
                                    {col.linhas.map((linha, k) => <li key={k}>• {linha}</li>)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                          {est.grid && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                              {est.grid.map((card, j) => (
                                <div key={j} className="bg-black/20 p-3 rounded border border-white/5">
                                  <p className="text-xs font-bold text-white mb-1">{card.nome}</p>
                                  <p className="text-[10px] text-slate-400">{card.desc}</p>
                                  {card.fontes && <p className="text-[10px] text-slate-500 italic mt-1">Fontes: {card.fontes}</p>}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suplementação */}
                  {protocol.suplementos && protocol.suplementos.length > 0 && (
                    <div>
                      <h5 className="text-white text-lg font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                        <Droplets size={18} className="text-[#fb336d]" /> Suplementação Direcionada
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {protocol.suplementos.map((sup, i) => (
                          <div key={i} className={`${sup.destaque ? 'bg-[#fb336d]/10 border-[#fb336d]/20' : 'bg-white/5 border-white/10'} border p-4 rounded-xl`}>
                            <p className="text-sm font-bold text-white mb-1">{sup.nome}</p>
                            <p className="text-xs text-slate-300 font-bold">{sup.dose}</p>
                            <p className="text-[10px] text-slate-400 mt-2">{sup.desc}</p>
                          </div>
                        ))}
                      </div>
                      {protocol.magistral && (
                        <div className="mt-4 bg-gradient-to-r from-black/40 to-[#fb336d]/5 border border-white/10 p-4 rounded-xl">
                          <p className="text-xs font-bold text-[#fb336d] uppercase tracking-wider mb-2">Fórmula Magistral Sugerida</p>
                          <p className="text-sm text-white font-medium">{protocol.magistral.formula}</p>
                          <p className="text-xs text-slate-400 mt-1">Posologia: {protocol.magistral.posologia}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Estilo de Vida */}
                  {protocol.estilo && protocol.estilo.length > 0 && (
                    <div>
                      <h5 className="text-white text-lg font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                        <Activity size={18} className="text-[#fb336d]" /> Estratégias de Estilo de Vida
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {protocol.estilo.map((est, i) => {
                          const EstIcon = est.icon;
                          return (
                            <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-3">
                              <EstIcon className="text-[#fb336d] shrink-0" size={18} />
                              <div className="text-[11px] text-slate-400">
                                <p className="font-bold text-white mb-1">{est.nome}</p>
                                {est.desc}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Resultados */}
                  <div className="bg-black/50 border border-white/5 p-5 rounded-xl">
                    <h6 className="text-[#fb336d] text-xs font-bold uppercase mb-2">Resultados Esperados</h6>
                    <p className="text-xs text-slate-300 mb-6">{protocol.resultados}</p>

                    <h6 className="text-slate-500 text-[10px] font-bold uppercase mb-2 border-t border-white/10 pt-4 flex items-center gap-1">
                      <BookOpen size={10} /> Referências Científicas
                    </h6>
                    <ul className="text-[10px] text-slate-500 space-y-1 italic">
                      {protocol.referencias.map((ref, i) => <li key={i}>• {ref}</li>)}
                    </ul>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- GUIA DO CICLO MENSTRUAL ---
const MenstrualCycleView = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const togglePhase = (id) => {
    setExpandedPhase(prev => prev === id ? null : id);
  };

  const padroesTPM = [
    { title: "PADRÃO 1 - DEFICIÊNCIA DE PROGESTERONA", sintomas: "Irritabilidade, ansiedade, insônia, sensibilidade", momento: "5-10 dias antes da menstruação", fisio: "Falha na produção adequada de progesterona", eixo: "Ovulatório / HPO", exames: "Progesterona (D21), estradiol, LH", sinais: "Ciclo irregular, infertilidade, fase lútea curta", condutas: ["Protocolo neuroendócrino"] },
    { title: "PADRÃO 2 - DOMINÂNCIA ESTROGÊNICA", sintomas: "Mastalgia, retenção de líquido, inchaço, irritabilidade", momento: "Final da fase lútea", fisio: "Excesso relativo de estrogênio em relação à progesterona", eixo: "Estrogênico / hepático", exames: "Estradiol, progesterona, SHBG", sinais: "Fluxo intenso, cólicas, endometriose", condutas: ["Protocolo de metabolismo do estrogênio", "Protocolo anti-inflamatório"] },
    { title: "PADRÃO 3 - DISFUNÇÃO DO EIXO HPA", sintomas: "Ansiedade intensa, irritabilidade, insônia, fadiga", momento: "Piora progressiva ao longo do ciclo", fisio: "Cortisol elevado → bloqueio da progesterona", eixo: "HPA / adrenal", exames: "Cortisol salivar, DHEA", sinais: "Cansaço ao acordar, estresse crônico", condutas: ["Protocolo modulação eixo HPA", "Protocolo de regulação do sono"] },
    { title: "PADRÃO 4 - DEFICIÊNCIA NUTRICIONAL", sintomas: "Fadiga, irritabilidade, compulsão, queda de cabelo", momento: "Todo o ciclo (piora na lútea)", fisio: "Baixa disponibilidade de cofatores hormonais (Mg/B6/Ferro)", eixo: "Nutricional", exames: "Magnésio, B6, ferritina, B12", sinais: "Unhas fracas, palidez, baixa energia", condutas: ["Protocolo reposição nutricional", "Protocolo energético"] },
    { title: "PADRÃO 5 - DISFUNÇÃO METABÓLICA", sintomas: "Compulsão por doce, fome excessiva, inchaço", momento: "Principalmente na fase lútea", fisio: "Resistência à insulina + instabilidade glicêmica", eixo: "Metabólico", exames: "Insulina, HOMA-IR, glicemia", sinais: "Dificuldade de emagrecer, gordura abdominal", condutas: ["Protocolo sensibilidade à insulina", "Protocolo metabólico"] },
    { title: "PADRÃO 6 - INFLAMAÇÃO SISTÊMICA", sintomas: "Dor, inchaço, fadiga, piora geral do ciclo", momento: "Durante todo o ciclo ou fase lútea", fisio: "Inflamação crônica afetando eixo hormonal", eixo: "Imunometabólico", exames: "PCR-us, ferritina, vitamina D", sinais: "Intestino alterado, dor crônica", condutas: ["Protocolo Anti-inflamatório Hormonal"] }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#fb336d]/5 border border-[#fb336d]/20 rounded-2xl p-6 mb-8">
        <h3 className="text-white font-bold flex items-center gap-2 mb-4 text-lg">
          <CalendarDays className="text-[#fb336d]" /> Guia Clínico do Ciclo Menstrual
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">
          Identificação de padrões clínicos e manejo nutricional e suplementar direcionado para cada fase do ciclo menstrual, uso de anticoncepcionais e protocolos de descontinuação.
        </p>
        
        {/* PADRÕES DA TPM */}
        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <Target size={16} className="text-[#fb336d]" /> Mapa de Padrões da TPM (Diagnóstico Rápido)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {padroesTPM.map((p, i) => (
            <div key={i} className="bg-black/30 rounded-xl border border-white/5 flex flex-col overflow-hidden">
              <div className="bg-white/5 px-4 py-2 border-b border-white/5">
                <p className="text-[10px] font-bold text-[#fb336d]">{p.title}</p>
              </div>
              <div className="p-4 flex-grow space-y-2">
                <p className="text-[10px] text-slate-300"><span className="font-bold text-slate-400">Sintomas:</span> {p.sintomas}</p>
                <p className="text-[10px] text-slate-300"><span className="font-bold text-slate-400">Momento:</span> {p.momento}</p>
                <p className="text-[10px] text-slate-300"><span className="font-bold text-slate-400">Fisiologia:</span> {p.fisio}</p>
                <p className="text-[10px] text-slate-300"><span className="font-bold text-slate-400">Exames:</span> {p.exames}</p>
                <p className="text-[10px] text-slate-300"><span className="font-bold text-slate-400">Sinais:</span> {p.sinais}</p>
              </div>
              <div className="bg-[#fb336d]/10 px-4 py-2 mt-auto border-t border-[#fb336d]/20">
                <p className="text-[9px] uppercase font-bold text-[#fb336d] mb-1">Direcionamento Clínico</p>
                {p.condutas.map((cond, idx) => <p key={idx} className="text-[10px] text-white font-medium flex items-center gap-1"><ChevronRight size={10}/> {cond}</p>)}
              </div>
            </div>
          ))}
        </div>
        
        {/* VISÃO GERAL DO CICLO */}
        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <Activity size={16} className="text-[#fb336d]" /> Visão Geral do Ciclo
        </h4>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-4 py-3">Fase</th>
                <th className="px-4 py-3">Dias</th>
                <th className="px-4 py-3">Hormônios Predominantes</th>
                <th className="px-4 py-3">Objetivo Fisiológico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-slate-300">
              <tr className="hover:bg-white/5"><td className="px-4 py-3 font-bold text-white">Folicular</td><td className="px-4 py-3">1–13</td><td className="px-4 py-3 text-[#fb336d] font-bold">Estradiol ↑</td><td className="px-4 py-3">Preparação folicular</td></tr>
              <tr className="hover:bg-white/5"><td className="px-4 py-3 font-bold text-white">Ovulatória</td><td className="px-4 py-3">14</td><td className="px-4 py-3 text-[#fb336d] font-bold">Pico de LH</td><td className="px-4 py-3">Ovulação</td></tr>
              <tr className="hover:bg-white/5"><td className="px-4 py-3 font-bold text-white">Lútea</td><td className="px-4 py-3">15–28</td><td className="px-4 py-3 text-[#fb336d] font-bold">Progesterona ↑</td><td className="px-4 py-3">Implantação / equilíbrio</td></tr>
              <tr className="hover:bg-white/5"><td className="px-4 py-3 font-bold text-white">Menstruação</td><td className="px-4 py-3">1–5</td><td className="px-4 py-3 text-[#fb336d] font-bold">Hormônios em baixa</td><td className="px-4 py-3">Descamação endometrial</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        {/* FASE MENSTRUAÇÃO */}
        <PhaseAccordion 
          id="menstruacao" 
          title="Menstruação (Dia 1–5)" 
          subtitle="Descamação endometrial | Fase catabólica, inflamatória e de maior perda nutricional"
          icon={Droplets}
          expanded={expandedPhase}
          onToggle={togglePhase}
          data={{
            sintomas: ["Fluxo menstrual moderado", "Leve cólica", "Redução da energia"],
            alertas: ["Sangramento intenso", "Coágulos grandes", "Cólicas incapacitantes", "Fadiga extrema", "Ciclos muito curtos ou longos"],
            exames: ["Hemograma", "Ferritina", "PCR-us", "Hormônios (se alteração persistente)"],
            condutas: [
               { title: "Prevenção e correção de perdas nutricionais", desc: "Principal foco em ferro e complexo B. Atenção especial a mulheres com fluxo intenso e fadiga pós-menstrual." },
               { title: "Controle inflamatório (ponto-chave)", desc: "Menstruação é inflamação. Modular prostaglandinas, aumentar ômega-3 e reduzir alimentos pró-inflamatórios." },
               { title: "Modulação da dor (cólica)", desc: "A dor que limita não é normal. Pensar em inflamação, deficiência de magnésio e desequilíbrio hormonal." },
               { title: "Suporte energético", desc: "Fase de menor energia fisiológica. Reduzir intensidade do treino, priorizar recuperação e evitar restrição calórica." }
            ],
            nutrientes: [
              { name: "Ferro", dose: "25–40 mg/dia", info: "Bisglicinato. Reposição de perdas e produção de hemoglobina. Fontes: carne vermelha, fígado.", mag: "Ferro bisglicinato (30 mg) + Vit C (200 mg) + Metilfolato (400 mcg)" },
              { name: "Magnésio", dose: "200–400 mg/dia", info: "Bisglicinato. Relaxamento uterino e redução da dor.", mag: "Magnésio bisglicinato (300 mg)" },
              { name: "Ômega-3", dose: "1–2 g/dia", info: "EPA+DHA. Redução de prostaglandinas inflamatórias e dor.", mag: "Ômega-3 (1000 mg)" },
              { name: "Vitamina B6", dose: "25–50 mg/dia", info: "P5P. Suporte neurológico e modulação hormonal.", mag: "Vitamina B6/P5P (25 mg)" },
              { name: "Gengibre", dose: "500–1000 mg/dia", info: "Extrato seco. Anti-inflamatório e analgésico natural.", mag: "Extrato de gengibre (500 mg)" },
              { name: "Curcumina", dose: "500–1000 mg/dia", info: "Com piperina. Anti-inflamatório potente.", mag: "Curcumina (500 mg) + Piperina (5 mg)" }
            ],
            resumo: [
              "Fluxo intenso + fadiga → Pensar em Ferro",
              "Cólica + inflamação → Magnésio + Ômega-3 + Curcumina",
              "Irritabilidade + dor → B6 + Magnésio"
            ]
          }}
          extraContent={<ClassificacaoFluxo />}
        />

        {/* FASE FOLICULAR */}
        <PhaseAccordion 
          id="folicular" 
          title="Fase Folicular (Dia 1–13)" 
          subtitle="Domínio estrogênico crescente | Fase de reconstrução metabólica e preparação ovariana"
          icon={Activity}
          expanded={expandedPhase}
          onToggle={togglePhase}
          data={{
            sintomas: ["Energia crescente", "Melhora do humor", "Clareza mental", "Aumento da disposição"],
            alertas: ["Cansaço persistente", "Queda de cabelo", "Baixa energia", "Ciclo irregular", "Sangramento prolongado"],
            exames: ["Estradiol", "FSH", "LH", "Ferritina", "Vitamina B12", "Vitamina D"],
            condutas: [
               { title: "Correção de deficiências (prioridade)", desc: "Ferro, B12, folato, vit D, magnésio. A fase exige alta demanda energética e síntese celular." },
               { title: "Suporte energético/mitocondrial", desc: "Proteína (1,2-1,6g/kg), carbos complexos. Foco na fadiga e baixa reserva ovariana." },
               { title: "Suporte à função ovariana", desc: "Zinco, Vitamina E e CoQ10 para síntese hormonal e maturação folicular." },
               { title: "Redução de inflamação basal", desc: "Reduzir ultraprocessados, ajustar ômega 3/6, melhorar microbiota." },
               { title: "Modulação HPA", desc: "Evitar excesso de treino nessa fase se houver fadiga profunda." }
            ],
            nutrientes: [
              { name: "Ferro", dose: "25–40 mg/dia", info: "Bisglicinato. Oxigenação e energia. Útil para ferritina <50, fadiga e queda de cabelo.", mag: "Ferro bisglicinato (30mg) + Vit C (200mg) + Metilfolato (400mcg)" },
              { name: "Vitamina B12", dose: "500–1000 mcg/dia", info: "Metilcobalamina. Síntese de DNA e energia. Suplementar se <500 pg/mL.", mag: "Metilcobalamina (1000 mcg)" },
              { name: "Folato (B9)", dose: "400–800 mcg/dia", info: "Metilfolato. Formação do endométrio, essencial no planejamento gestacional.", mag: "Metilfolato (400–800 mcg)" },
              { name: "Coenzima Q10", dose: "100–200 mg/dia", info: "Ubiquinol. Função mitocondrial e qualidade ovariana. Para idade >35 e fadiga.", mag: "Coenzima Q10/Ubiquinol (150 mg)" },
              { name: "Zinco", dose: "15–30 mg/dia", info: "Quelado. Ovulação e síntese hormonal.", mag: "Zinco quelado (25 mg)" },
              { name: "Vitamina D", dose: "2000–5000 UI/dia", info: "Regulação hormonal. Suplementar se <40 ng/mL.", mag: "Vit D3 (4000 UI) + Vit K2 MK-7 (100 mcg)" }
            ],
            resumo: [
              "Fadiga + queda de cabelo → pensar em ferro",
              "Baixa energia + dificuldade cognitiva → pensar em B12",
              "Ciclo irregular + fertilidade → pensar em folato + zinco"
            ]
          }}
        />

        {/* FASE OVULATÓRIA */}
        <PhaseAccordion 
          id="ovulatoria" 
          title="Fase Ovulatória (Dia 13–15)" 
          subtitle="Pico estrogênico + pico de LH | Evento inflamatório fisiológico dependente de nutrientes"
          icon={Sun}
          expanded={expandedPhase}
          onToggle={togglePhase}
          data={{
            sintomas: ["Aumento da libido", "Disposição elevada", "Muco cervical fértil", "Bem-estar geral"],
            alertas: ["Ausência de muco cervical", "Dor intensa na ovulação", "Baixa libido", "Ciclos anovulatórios"],
            exames: ["LH", "Estradiol", "Progesterona (pós-ovulação)"],
            condutas: [
               { title: "Garantir ovulação efetiva", desc: "Avaliar muco, libido e dor leve. Se ausente, suspeitar de anovulação." },
               { title: "Modulação da inflamação", desc: "Ovulação é inflamatória. Excesso gera dor; falta gera falha ovulatória." },
               { title: "Suporte antioxidante intenso", desc: "Proteger folículo do estresse oxidativo (vital na SOP e infertilidade)." },
               { title: "Metabolismo estrogênico", desc: "Garantir pico de estradiol, evitar dominância via fígado e intestino." },
               { title: "Integração HPA", desc: "Estresse alto e excesso de treino bloqueiam a ovulação." }
            ],
            nutrientes: [
              { name: "Zinco", dose: "15–30 mg/dia", info: "Maturação folicular e ovulação.", mag: "Zinco quelado (25 mg)" },
              { name: "Vitamina E", dose: "100–200 UI/dia", info: "Antioxidante, protege o folículo, melhora fluxo ovariano.", mag: "Vitamina E (200 UI)" },
              { name: "Ômega-3", dose: "1–2 g/dia", info: "EPA+DHA. Modulação inflamatória na dor ovulatória.", mag: "Ômega-3 (1000 mg)" },
              { name: "Coenzima Q10", dose: "100–200 mg/dia", info: "Energia mitocondrial do óvulo.", mag: "Coenzima Q10 (150 mg)" },
              { name: "Vitamina C", dose: "500–1000 mg/dia", info: "Antioxidante forte e suporte ao estresse oxidativo.", mag: "Vitamina C (500 mg)" },
              { name: "NAC", dose: "600–1200 mg/dia", info: "N-acetilcisteína. Suporte hepático, vital na SOP e RI.", mag: "N-acetilcisteína (600 mg)" }
            ],
            resumo: [
              "Ausência de muco cervical → pensar em estrogênio baixo",
              "Dor ovulatória intensa → pensar em inflamação",
              "Infertilidade → pensar em estresse oxidativo + qualidade oocitária"
            ]
          }}
        />

        {/* FASE LÚTEA */}
        <PhaseAccordion 
          id="lutea" 
          title="Fase Lútea (Dia 15–28)" 
          subtitle="Dominância de progesterona | Fase de estabilidade neuroendócrina e sensibilidade ao estresse"
          icon={Moon}
          expanded={expandedPhase}
          onToggle={togglePhase}
          data={{
            sintomas: ["Sensação de calma", "Sono mais profundo", "Leve redução da energia"],
            alertas: ["TPM intensa", "Irritabilidade", "Ansiedade", "Mastalgia", "Inchaço", "Compulsão alimentar", "Insônia"],
            exames: ["Progesterona (D21)", "Estradiol", "Prolactina", "Magnésio", "Vitamina B6"],
            condutas: [
               { title: "Suporte à progesterona", desc: "Foco principal se houver TPM, irritabilidade, ansiedade e mastalgia." },
               { title: "Modulação do estrogênio", desc: "Atenção a retenção hídrica, TPM intensa e dor mamária (suporte hepático)." },
               { title: "Regulação HPA (Crucial)", desc: "Fase mais sensível. Cortisol alto destrói progesterona e agrava TPM." },
               { title: "Suporte neuroendócrino", desc: "Focar em vias de GABA e Serotonina para ansiedade e compulsão." },
               { title: "Controle inflamatório", desc: "Reduzir retenção, dor pélvica e inchaço." }
            ],
            nutrientes: [
              { name: "Magnésio", dose: "200–400 mg/dia", info: "Relaxamento, GABA e modulação de cortisol.", mag: "Magnésio bisglicinato (300 mg)" },
              { name: "Vitamina B6", dose: "25–50 mg/dia", info: "P5P. Síntese de serotonina e suporte à progesterona.", mag: "Vitamina B6/P5P (25 mg)" },
              { name: "Triptofano / 5-HTP", dose: "500-1000mg ou 50-100mg", info: "Controle de humor e compulsão.", mag: "L-triptofano (500mg) + Mag (150mg) + B6 (10mg)" },
              { name: "Cálcio", dose: "500–1000 mg/dia", info: "Redução severa de TPM e irritabilidade.", mag: "Cálcio citrato (500 mg)" },
              { name: "Vitex agnus-castus", dose: "150–300 mg/dia", info: "Modula dopamina e prolactina, sobe progesterona.", mag: "Vitex agnus-castus (200 mg)" },
              { name: "Ômega-3", dose: "1–2 g/dia", info: "Redução de dor inflamatória.", mag: "Ômega-3 EPA+DHA (1000 mg)" }
            ],
            resumo: [
              "TPM + ansiedade → Magnésio + B6",
              "Compulsão alimentar → Triptofano",
              "Mastalgia + inchaço → Vitex + ômega-3"
            ]
          }}
        />

        {/* ANTICONCEPCIONAL */}
        <AnticoncepcionalAccordion expanded={expandedPhase} onToggle={togglePhase} />

        {/* DESCONTINUAÇÃO */}
        <DescontinuacaoAccordion expanded={expandedPhase} onToggle={togglePhase} />

      </div>
    </div>
  );
};

// COMPONENTES AUXILIARES PARA O GUIA DO CICLO

const ClassificacaoFluxo = () => (
  <div className="mt-8 pt-6 border-t border-white/10">
    <h5 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
      <ClipboardList size={16} className="text-[#fb336d]" /> Classificação Clínica do Fluxo Menstrual
    </h5>
    <div className="bg-black/30 border border-white/5 rounded-xl overflow-hidden mb-4">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="bg-white/5 border-b border-white/10 text-slate-400">
            <th className="p-3">Classificação</th>
            <th className="p-3">Características Clínicas</th>
            <th className="p-3">Interpretação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-slate-300">
          <tr><td className="p-3 font-bold text-[#fb336d]">Fluxo Leve</td><td className="p-3">2-4 dias, pequeno volume, sem impacto.</td><td className="p-3">Surgere baixo estímulo estrogênico, anovulação ou pílula.</td></tr>
          <tr><td className="p-3 font-bold text-blue-400">Fluxo Moderado</td><td className="p-3">3-6 dias, volume esperado, sem coágulos.</td><td className="p-3">Padrão fisiológico esperado.</td></tr>
          <tr><td className="p-3 font-bold text-red-400">Fluxo Intenso</td><td className="p-3">&gt;6-7 dias, volume aumentado, coágulos, fadiga.</td><td className="p-3">Sugere dominância estrogênica, baixa progesterona, risco de baixa ferritina.</td></tr>
        </tbody>
      </table>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
        <p className="text-[10px] font-bold text-[#fb336d] mb-1">Se Fluxo Intenso + Fadiga</p>
        <p className="text-[10px] text-slate-400">Investigar deficiência de ferro e ferritina. (Reposição Nutricional/Energético)</p>
      </div>
      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
        <p className="text-[10px] font-bold text-[#fb336d] mb-1">Se Intenso + Mastalgia/Inchaço</p>
        <p className="text-[10px] text-slate-400">Padrão de dominância estrogênica. (Metabolismo de Estrogênio/Anti-inflamatório)</p>
      </div>
      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
        <p className="text-[10px] font-bold text-[#fb336d] mb-1">Se Fluxo Leve + Irregular</p>
        <p className="text-[10px] text-slate-400">Baixa estimulação estrogênica, disfunção HHO. (Regulação do Ciclo/Amenorreia)</p>
      </div>
    </div>
  </div>
);

const PhaseAccordion = ({ id, title, subtitle, icon: Icon, expanded, onToggle, data, extraContent }) => {
  const isExpanded = expanded === id;
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => onToggle(id)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors focus:outline-none text-left"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#fb336d]/20 p-3 rounded-xl">
            <Icon size={20} className="text-[#fb336d]" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">{title}</h4>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">{subtitle}</p>
          </div>
        </div>
        <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#fb336d]' : ''}`} />
      </button>

      {isExpanded && (
        <div className="p-6 md:p-8 border-t border-white/5 space-y-8 bg-black/20 animate-in slide-in-from-top-4 fade-in duration-300">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <h6 className="text-[11px] font-bold text-[#fb336d] uppercase tracking-wider mb-2 flex items-center gap-2"><CheckCircle2 size={14}/> Sintomas Esperados</h6>
              <ul className="text-[11px] text-slate-300 space-y-1">
                {data.sintomas.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <h6 className="text-[11px] font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2"><AlertCircle size={14}/> Sinais de Alerta</h6>
              <ul className="text-[11px] text-slate-300 space-y-1">
                {data.alertas.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <h6 className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2"><FlaskConical size={14}/> Exames Úteis</h6>
              <ul className="text-[11px] text-slate-300 space-y-1">
                {data.exames.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <Target size={16} className="text-[#fb336d]" /> Objetivos e Condutas Clínicas
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.condutas.map((cond, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <p className="text-xs font-bold text-white mb-1">{cond.title}</p>
                  <p className="text-[11px] text-slate-400">{cond.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <Droplets size={16} className="text-[#fb336d]" /> Nutrientes Estratégicos
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.nutrientes.map((nutri, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col h-full">
                  <p className="text-sm font-bold text-white mb-1">{nutri.name}</p>
                  <p className="text-[10px] font-bold text-[#fb336d] mb-2">{nutri.dose}</p>
                  <p className="text-[11px] text-slate-400 leading-tight mb-3 flex-grow">{nutri.info}</p>
                  {nutri.mag && (
                    <div className="mt-auto bg-black/40 p-2 rounded border border-white/5">
                      <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Exemplo Magistral</p>
                      <p className="text-[10px] text-slate-300 italic">{nutri.mag}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fb336d]/10 border border-[#fb336d]/20 p-5 rounded-xl">
            <h6 className="text-[#fb336d] text-xs font-bold uppercase mb-3 flex items-center gap-2">
              <Lightbulb size={14} /> Resumo Prático de Prescrição
            </h6>
            <ul className="space-y-2 text-xs text-slate-200 font-medium">
              {data.resumo.map((res, i) => <li key={i} className="flex items-start gap-2"><ChevronRight size={14} className="text-[#fb336d] shrink-0 mt-0.5" /> {res}</li>)}
            </ul>
          </div>

          {extraContent}

        </div>
      )}
    </div>
  );
};

const AnticoncepcionalAccordion = ({ expanded, onToggle }) => {
  const isExp = expanded === 'anticoncepcional';
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
      <button onClick={() => onToggle('anticoncepcional')} className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors focus:outline-none text-left">
        <div className="flex items-center gap-4">
          <div className="bg-[#fb336d]/20 p-3 rounded-xl"><AlertCircle size={20} className="text-[#fb336d]" /></div>
          <div><h4 className="text-base font-bold text-white">Avaliação Clínica (Uso de Anticoncepcional)</h4><p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Atenção: Ausência de ciclo menstrual fisiológico</p></div>
        </div>
        <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isExp ? 'rotate-90 text-[#fb336d]' : ''}`} />
      </button>
      {isExp && (
        <div className="p-6 md:p-8 border-t border-white/5 space-y-6 bg-black/20 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
            <h5 className="text-red-400 text-xs font-bold uppercase mb-2 flex items-center gap-2"><AlertCircle size={14}/> Erro Clínico Comum</h5>
            <p className="text-xs text-slate-300">Avaliar o ciclo menstrual normalmente e interpretar o sangramento por privação como "saúde hormonal". Isso mascara anovulação, baixa progesterona e disfunções metabólicas sistêmicas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <h6 className="text-[11px] font-bold text-[#fb336d] uppercase mb-2">Checklist: Sintomas Atuais</h6>
              <p className="text-[10px] text-slate-400">Fadiga, queda de cabelo, baixa libido, ressecamento vaginal, alterações de humor, ansiedade/irritabilidade, dificuldade de emagrecer e retenção de líquido continuam muito válidos.</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
              <h6 className="text-[11px] font-bold text-[#fb336d] uppercase mb-2">Checklist: História Prévia</h6>
              <p className="text-[10px] text-slate-400">Irregularidade, TPM intensa, acne, SOP, dor e infertilidade. Revelam o real padrão de fundo que foi apenas 'pausado'.</p>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 md:col-span-2">
              <h6 className="text-[11px] font-bold text-[#fb336d] uppercase mb-2">Principais Impactos Fisiológicos</h6>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-slate-300">
                <div><span className="font-bold">Nutricionais:</span> ↓B6, ↓B12, ↓Folato, ↓Magnésio, ↓Zinco</div>
                <div><span className="font-bold">Hormonais:</span> ↓Testo livre, ↑SHBG, ↓Libido</div>
                <div><span className="font-bold">Metabólicos:</span> Resistência à insulina, retenção, lipídios</div>
                <div><span className="font-bold">Neuro:</span> Alteração de humor, ansiedade, piora do sono</div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-4 border-b border-white/10 pb-2">Direcionamento Clínico Prático</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col h-full">
                <p className="text-[11px] font-bold text-[#fb336d] mb-1">1. Fadiga + Queda de Cabelo</p>
                <p className="text-[10px] text-slate-400 mb-2 flex-grow">Deficiência de ferro e B12. Aumentar carne/fígado. Suplementar Ferro (25-40mg) e B12 (500-1000mcg).</p>
                <div className="bg-black/40 p-2 rounded text-[9px] text-slate-300 italic mt-auto">Magistral: Ferro bis (30mg) + Vit C (200mg) + B12 (1000mcg)</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col h-full">
                <p className="text-[11px] font-bold text-[#fb336d] mb-1">2. Baixa Libido</p>
                <p className="text-[10px] text-slate-400 mb-2 flex-grow">Impacto do SHBG alto. Aumentar gorduras boas. Suplementar Zinco (15-30mg), Magnésio (200-300mg) e Vit D.</p>
                <div className="bg-black/40 p-2 rounded text-[9px] text-slate-300 italic mt-auto">Magistral: Zinco (25mg) + Mag bis (200mg) + Vit D (4000 UI)</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col h-full">
                <p className="text-[11px] font-bold text-[#fb336d] mb-1">3. Ansiedade + Irritabilidade</p>
                <p className="text-[10px] text-slate-400 mb-2 flex-grow">Deficiência de B6 e Mag. Modulação do HPA. Reduzir café/açúcar. Suplementar Mag (300-400mg) e B6 (25-50mg).</p>
                <div className="bg-black/40 p-2 rounded text-[9px] text-slate-300 italic mt-auto">Magistral: Mag bis (300mg) + B6 P5P (25mg) + Triptofano (500mg)</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col h-full">
                <p className="text-[11px] font-bold text-[#fb336d] mb-1">4. Dif. Emagrecer / Retenção</p>
                <p className="text-[10px] text-slate-400 mb-2 flex-grow">Resistência Insulínica. Incluir fibras, Mag (200-400mg), Ômega-3 (1-2g) e Berberina (500mg 2x/dia).</p>
                <div className="bg-black/40 p-2 rounded text-[9px] text-slate-300 italic mt-auto">Magistral: Berberina (500mg) + Magnésio (200mg)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DescontinuacaoAccordion = ({ expanded, onToggle }) => {
  const isExp = expanded === 'descontinuacao';
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
      <button onClick={() => onToggle('descontinuacao')} className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors focus:outline-none text-left">
        <div className="flex items-center gap-4">
          <div className="bg-[#fb336d]/20 p-3 rounded-xl"><History size={20} className="text-[#fb336d]" /></div>
          <div><h4 className="text-base font-bold text-white">Protocolo de Descontinuação (Anticoncepcional)</h4><p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Pré, Durante e Pós - Evitar efeito rebote</p></div>
        </div>
        <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isExp ? 'rotate-90 text-[#fb336d]' : ''}`} />
      </button>
      {isExp && (
        <div className="p-6 md:p-8 border-t border-white/5 space-y-8 bg-black/20 animate-in slide-in-from-top-4 fade-in duration-300">
          
          <div className="bg-black/40 border border-white/5 rounded-xl p-5">
            <h5 className="text-[#fb336d] text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Target size={16} /> Princípio Clínico</h5>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">A retirada não é apenas "parar o remédio". É uma reprogramação do eixo hormonal para reativar o HHO, recuperar a ovulação e evitar o temido efeito rebote (acne, queda de cabelo, amenorreia).</p>
          </div>

          {/* FASE 1 */}
          <div>
            <h5 className="text-white text-md font-bold mb-3 border-b border-[#fb336d]/30 pb-2">FASE 1: Pré-descontinuação (4–8 semanas antes)</h5>
            <p className="text-xs text-slate-400 italic mb-4">"Preparar o terreno metabólico e nutricional"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Pilares Alimentares</p>
                <ul className="text-[10px] text-slate-300 space-y-1">
                  <li>• Dieta anti-inflamatória forte (Reduzir ultraprocessados)</li>
                  <li>• Proteína Adequada (1.2-1.6g/kg)</li>
                  <li>• Suporte Hepático (Brócolis, couve, rúcula, alho)</li>
                  <li>• Modulação do Intestino (Fibras 25-35g, sementes)</li>
                  <li>• Equilíbrio Glicêmico Extremo (Nunca isolar carboidratos)</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Suplementação Base</p>
                <div className="bg-black/40 p-3 rounded text-[10px] text-slate-300 italic h-full flex flex-col justify-center">
                  Magistral: Magnésio (300mg) + Vit B6 P5P (25mg) + Zinco (25mg) + Metilfolato (400mcg) + Metilcobalamina (1000mcg). <br/><br/>
                  Associar: Ômega-3 (1-2g) e Vit D (2000-5000UI).
                </div>
              </div>
            </div>
          </div>

          {/* FASE 2 */}
          <div>
            <h5 className="text-white text-md font-bold mb-3 border-b border-[#fb336d]/30 pb-2">FASE 2: Durante a descontinuação (0–4 semanas)</h5>
            <p className="text-xs text-slate-400 italic mb-4">"Retirada + suporte fisiológico imediato"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Controle Glicêmico (PRIORIDADE)</p>
                <p className="text-[10px] text-slate-300">A retirada piora a resistência à insulina transitoriamente. Focar proteína+gordura+fibra juntos.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Suporte Hepático e Intestinal</p>
                <p className="text-[10px] text-slate-300">Fígado volta a metabolizar hormônios endógenos. Manter crucíferos e probióticos naturais fortes.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Estratégias p/ Rebote</p>
                <p className="text-[10px] text-slate-300">Acne: Cortar açúcar e subir zinco. Queda de cabelo: Subir Ferro. Ansiedade: Triptofano.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-[#fb336d]/30 sm:col-span-2 lg:col-span-3">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Suplementação (Metabolismo e HPA)</p>
                <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                  <div>Hepático: DIM (100mg) + I3C (100mg)</div>
                  <div>Antioxidante: NAC (600mg) + Vit C (500mg)</div>
                  <div>Adrenal: Mag (300mg) + Ashwagandha (300mg)</div>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 3 */}
          <div>
            <h5 className="text-white text-md font-bold mb-3 border-b border-[#fb336d]/30 pb-2">FASE 3: Pós-descontinuação (1–6 meses)</h5>
            <p className="text-xs text-slate-400 italic mb-4">"Reativar eixo hormonal e restaurar ovulação"</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Condutas Focais</p>
                <ul className="text-[10px] text-slate-300 space-y-1">
                  <li>• Ovulação: Atingir alta densidade nutricional (Zinco, Vit E).</li>
                  <li>• Progesterona (Lútea): Sustentar Mag e B6.</li>
                  <li>• HPA (Estresse): Evitar jejuns e dietas low-carb severas (bloqueiam ovulação).</li>
                  <li>• Monitorar: Amenorreia &gt; 3 meses, acne brutal.</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[11px] font-bold text-[#fb336d] mb-2">Suplementação por Foco</p>
                <ul className="text-[10px] text-slate-300 space-y-2">
                  <li><span className="font-bold text-white">Ovulação:</span> Zinco(25mg)+Vit E(200 UI)+CoQ10(100mg)</li>
                  <li><span className="font-bold text-white">Ciclo / Acne:</span> Vitex(200mg) / Zinco+NAC+Ômega 3</li>
                  <li><span className="font-bold text-white">Queda Cabelo:</span> Ferro(30mg)+Biotina(5mg)+Zinco</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-white/5 p-5 rounded-xl mt-6">
            <h6 className="text-slate-500 text-[10px] font-bold uppercase mb-2 flex items-center gap-1">
              <BookOpen size={10} /> Referências Científicas (Anticoncepcional)
            </h6>
            <ul className="text-[9px] text-slate-500 space-y-1 italic column-count-1 sm:columns-2 gap-4">
              <li>• Rivera R, Yacobson I, Grimes D. Mechanism of action of hormonal contraceptives. 1999.</li>
              <li>• Hamstra DA, et al. Oral contraceptive effects on cortisol. Psychoneuroendocrinology. 2014.</li>
              <li>• Palmery M, et al. Oral contraceptives and nutrient metabolism. Eur Rev Med Pharmacol Sci. 2013.</li>
              <li>• Skovlund CW, et al. Hormonal contraception and depression. JAMA Psychiatry. 2016.</li>
              <li>• Safe S, et al. Mechanisms of estrogen metabolism. 2013.</li>
              <li>• Practice Committee ASRM. Amenorrhea evaluation. 2015.</li>
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

// --- COMPONENTE DE INTERPRETAÇÃO DE EXAMES ---
const examesData = [
  {
    grupo: "Eixo Tireoidiano",
    icon: Thermometer,
    exames: [
      {
        nome: "TSH (Hormônio Estimulante da Tireoide)",
        funcao: "Produzido pela hipófise, regula a tireoide estimulando T4 e T3. Principal indicador da regulação do eixo HPT.",
        ideal: "0,5 - 2,0 μUI/mL",
        ref: "0,4 - 4,5 μUI/mL",
        elevado: "Hipotireoidismo primário, Hashimoto, deficiência de iodo ou selênio.",
        reduzido: "Hipertireoidismo, supressão do eixo, medicação exógena, estresse intenso.",
        pratica: [
          { condicao: "TSH 2,5 - 4,5", desc: "Hipotireoidismo subclínico, início de Hashimoto ou baixa conversão. Avaliar sintomas como fadiga e queda de cabelo." },
          { condicao: "TSH > 4,5", desc: "Hipotireoidismo clínico. Avaliar T4L, T3L, Anti-TPO." },
          { condicao: "TSH < 0,4", desc: "Hipertireoidismo, doença de Graves ou excesso de reposição." }
        ]
      },
      {
        nome: "T4 Livre (Tiroxina Livre)",
        funcao: "Fração biologicamente disponível. Precursor do T3 ativo. Regula metabolismo basal e energia.",
        ideal: "1,2 - 1,5 ng/dL",
        ref: "0,8 - 1,8 ng/dL",
        elevado: "Hipertireoidismo, Doença de Graves, excesso de reposição hormonal.",
        reduzido: "Hipotireoidismo primário/central, Hashimoto, deficiências nutricionais (iodo/selênio).",
        pratica: [
          { condicao: "T4L Reduzido", desc: "Fadiga persistente, intolerância ao frio, ganho de peso, constipação." },
          { condicao: "T4L Elevado", desc: "Taquicardia, ansiedade, tremores, sudorese excessiva." }
        ]
      },
      {
        nome: "T3 Livre (Triiodotironina Livre)",
        funcao: "Fração biologicamente ativa formada pela conversão de T4. Age diretamente nos tecidos (ATP, temperatura).",
        ideal: "3,2 - 4,2 pg/mL",
        ref: "2,3 - 4,2 pg/mL",
        elevado: "Hipertireoidismo, nódulos hiperfuncionantes, excesso de medicação.",
        reduzido: "Baixa conversão periférica, estresse crônico, inflamação, falta de nutrientes.",
        pratica: [
          { condicao: "T3L Baixo c/ T4L Normal", desc: "Clássico de baixa conversão. Sugere deficiência de ferro/selênio ou estresse/inflamação." }
        ]
      },
      {
        nome: "T3 Reverso (rT3)",
        funcao: "Forma inativa do T3. Atua como freio metabólico em situações de estresse sistêmico.",
        ideal: "8 - 18 ng/dL",
        ref: "9 - 24 ng/dL",
        elevado: "Estresse crônico, privação de sono, restrição calórica severa, inflamação aguda/crônica.",
        reduzido: "Geralmente sem relevância clínica negativa isolada.",
        pratica: [
          { condicao: "rT3 Elevado", desc: "Fadiga persistente, dificuldade de perda de peso e metabolismo lento, mesmo com TSH normal." }
        ]
      },
      {
        nome: "Relação T3 / T4",
        funcao: "Avalia a eficiência da conversão periférica do T4 em T3 (ocorre fígado/rins via desiodinases).",
        ideal: "10 - 20",
        ref: "8 - 20",
        elevado: "Produção excessiva de T3 (hipertireoidismo).",
        reduzido: "Baixa conversão de T4 em T3 (desvio para T3 reverso).",
        pratica: [
          { condicao: "Relação Reduzida", desc: "Indica estresse, inflamação, restrição calórica ou falta de cofatores (selênio, ferro, zinco)." }
        ]
      },
      {
        nome: "Anti-TPO (Anticorpo Antitireoperoxidase)",
        funcao: "Marcador de atividade autoimune. Dirige-se contra a enzima que forma T3 e T4.",
        ideal: "Indetectável ou < 10 UI/mL",
        ref: "< 35 UI/mL",
        elevado: "Tireoidite de Hashimoto, Doença de Graves.",
        reduzido: "Ausência de autoimunidade ativa.",
        pratica: [
          { condicao: "Elevado c/ TSH Normal", desc: "Fase inicial de Hashimoto. Monitorar função tireoidiana periodicamente." }
        ]
      }
    ]
  },
  {
    grupo: "Eixo Adrenal",
    icon: Zap,
    exames: [
      {
        nome: "Cortisol (Salivar/Sérico)",
        funcao: "Principal hormônio de resposta ao estresse. Regula energia, glicemia, inflamação e ritmo circadiano.",
        ideal: "Manhã: 10-18 μg/dL | Tarde: 5-10 μg/dL | Noite: <3 μg/dL",
        ref: "Varia conforme método e horário.",
        elevado: "Estresse crônico, privação de sono, obesidade visceral, resistência insulínica.",
        reduzido: "Fadiga adrenal funcional, insuficiência adrenal, esgotamento crônico.",
        pratica: [
          { condicao: "Cortisol Noturno Elevado", desc: "Um dos achados mais comuns na insônia e ansiedade noturna. Bloqueia melatonina." },
          { condicao: "Cortisol Matinal Baixo", desc: "Fadiga extrema ao acordar, baixa resiliência ao estresse, tontura." }
        ]
      },
      {
        nome: "DHEA-S",
        funcao: "Precursor de hormônios sexuais (testo/estradiol). Marcador de reserva funcional adrenal e anabolismo.",
        ideal: "H: 250-450 μg/dL | M: 150-350 μg/dL",
        ref: "Dependente de idade e sexo.",
        elevado: "Hiperatividade adrenal, SOP, resistência à insulina (acne, queda de cabelo, hirsutismo).",
        reduzido: "Estresse crônico severo, envelhecimento, inflamação, fadiga.",
        pratica: [
          { condicao: "DHEA-S Baixo", desc: "Fadiga persistente, baixa vitalidade, redução de libido, péssima recuperação física." }
        ]
      },
      {
        nome: "Relação Cortisol / DHEA",
        funcao: "Reflete o equilíbrio entre o catabolismo (Cortisol) e o anabolismo/reparo (DHEA).",
        ideal: "3 a 5 : 1",
        ref: "2 a 7 : 1",
        elevado: "Predominância catabólica: estresse crônico, privação de sono, sobrecarga.",
        reduzido: "Produção elevada de DHEA (ex: SOP, hiperandrogenismo).",
        pratica: [
          { condicao: "Relação Elevada", desc: "Risco de perda de massa magra, aumento de gordura visceral, fadiga imunológica." }
        ]
      }
    ]
  },
  {
    grupo: "Hormônios Sexuais",
    icon: Activity,
    exames: [
      {
        nome: "Estradiol (E2)",
        funcao: "Principal estrogênio na fase reprodutiva. Saúde óssea, função cardiovascular, humor, libido.",
        ideal: "Folicular: 40-80 | Ovulatória: 200-500 | Lútea: 100-250 pg/mL",
        ref: "Baseado na fase do ciclo.",
        elevado: "Obesidade, SOP, dominância estrogênica (retenção hídrica, TPM intensa, mastalgia).",
        reduzido: "Falência ovariana, amenorreia hipotalâmica, menopausa (ressecamento, baixa libido).",
        pratica: [
          { condicao: "Elevado na Fase Lútea", desc: "Sugere dominância estrogênica e/ou baixa progesterona." }
        ]
      },
      {
        nome: "Progesterona",
        funcao: "Mantém a gestação, equilibra o estradiol, modula GABA (calma, sono) na fase lútea.",
        ideal: "Lútea (D21): 10 - 20 ng/mL",
        ref: "Fase folicular: < 1.0 | Lútea: 3.0 - 25 ng/mL",
        elevado: "Fase lútea normal ou reposição.",
        reduzido: "Anovulação, insuficiência lútea, estresse crônico. Causa TPM intensa, ansiedade, sangramentos.",
        pratica: [
          { condicao: "Baixa c/ E2 Normal/Alto", desc: "Clássico quadro de TPM (irritabilidade, ansiedade, insônia, cólicas)." }
        ]
      },
      {
        nome: "Testosterona Livre",
        funcao: "Fração não ligada ao SHBG. Age diretamente em libido, músculos e energia vital.",
        ideal: "H: 10-25 ng/dL | M: 0,5-2,0 ng/dL",
        ref: "H: 5-30 ng/dL | M: 0,1-3,0 ng/dL",
        elevado: "M: Hiperandrogenismo, SOP (acne, pelos). H: Uso exógeno.",
        reduzido: "H: Hipogonadismo, obesidade, estresse. M: Fadiga, baixa libido, sarcopenia.",
        pratica: [
          { condicao: "Testo Total Normal, mas Livre Baixa", desc: "Problema geralmente é o SHBG muito elevado." }
        ]
      },
      {
        nome: "SHBG (Globulina Ligadora de Hormônios Sexuais)",
        funcao: "Proteína que sequestra Testosterona e Estradiol, regulando sua disponibilidade aos tecidos.",
        ideal: "H: 30-50 nmol/L | M: 40-80 nmol/L",
        ref: "H: 10-57 | M: 18-144",
        elevado: "Uso de anticoncepcionais, hipertireoidismo. Zera a libido e causa fadiga por prender a testosterona.",
        reduzido: "Resistência à insulina, SOP, obesidade. Aumenta andrógenos livres nas mulheres.",
        pratica: [
          { condicao: "SHBG muito elevado", desc: "Típico de usuárias crônicas de pílula. Testo livre despenca." }
        ]
      },
      {
        nome: "Relação LH / FSH",
        funcao: "Avalia comando central da ovulação.",
        ideal: "Aproximadamente 1:1",
        ref: "Varia",
        elevado: "LH > FSH (Relação > 2:1) sugere fortemente SOP e anovulação.",
        reduzido: "FSH > LH na fase folicular indica falência ovariana / menopausa.",
        pratica: [
          { condicao: "LH/FSH ≥ 2:1", desc: "Alerta máximo para SOP, mesmo se ultrassom estiver normal." }
        ]
      }
    ]
  },
  {
    grupo: "Marcadores Metabólicos e Inflamatórios",
    icon: FlaskConical,
    exames: [
      {
        nome: "Insulina de Jejum",
        funcao: "Regula entrada de glicose celular. Afeta diretamente andrógenos e adiposidade.",
        ideal: "2,0 - 6,0 μUI/mL",
        ref: "2,0 - 25,0 μUI/mL",
        elevado: "Resistência à insulina, síndrome metabólica. Bloqueia emagrecimento.",
        reduzido: "Hipoglicemia ou deficiência pancreática.",
        pratica: [
          { condicao: "Insulina > 10", desc: "Clara resistência insulínica. Risco para SOP e ganho de peso abdominal." },
          { condicao: "Insulina 6-10", desc: "Fase inicial de resistência. Modificar dieta." }
        ]
      },
      {
        nome: "HOMA-IR",
        funcao: "Índice que estima a resistência à insulina (Glicemia x Insulina / 405).",
        ideal: "≤ 1,0",
        ref: "< 2,0",
        elevado: "Resistência instalada, pré-diabetes, SOP metabólica, alta inflamação.",
        reduzido: "Metabolismo sensível e eficiente.",
        pratica: [
          { condicao: "HOMA-IR > 2,0", desc: "Bloqueio à queima de gordura e inflamação celular ativa." }
        ]
      },
      {
        nome: "Ferritina",
        funcao: "Estoque de ferro. Vital para energia (ATP), transporte de O2, tireoide e cabelo. Marcador de inflamação.",
        ideal: "M: 50-100 ng/mL | H: 80-150 ng/mL",
        ref: "10 - 150 ng/mL",
        elevado: "Inflamação sistêmica crônica, esteatose, sobrecarga real de ferro.",
        reduzido: "Queda de cabelo severa, fadiga profunda, disfunção da conversão tireoidiana.",
        pratica: [
          { condicao: "Ferritina < 50", desc: "Tratar! A tireoide e o bulbo capilar sofrem muito com ferritina baixa, mesmo sem anemia." }
        ]
      },
      {
        nome: "Vitamina D (25-OH)",
        funcao: "Ação de hormônio esteroide (imunidade, ossos, fertilidade, insulina).",
        ideal: "40 - 60 ng/mL",
        ref: "> 30 ng/mL",
        elevado: "Intoxicação / hipercalcemia (Raro).",
        reduzido: "Fadiga, infecções de repetição, dor muscular (sarcopenia), baixa testosterona.",
        pratica: [
          { condicao: "< 30 ng/mL", desc: "Disfunção imunometabólica instalada. Fraqueza e letargia." }
        ]
      },
      {
        nome: "Vitamina B12 e B6",
        funcao: "B12 (Metilação, energia e mielina). B6 (Serotonina, GABA e eixo HPA).",
        ideal: "B12: 500-900 pg/mL | B6: 10-20 ng/mL",
        ref: "B12 > 200 | B6 > 5",
        elevado: "B12 alta sem repor pode ser inflamação/fígado. B6 excessiva causa parestesia.",
        reduzido: "B12: névoa mental, fadiga crônica. B6: TPM brutal, ansiedade, humor péssimo.",
        pratica: [
          { condicao: "B12 < 350", desc: "Já existe perda cognitiva funcional e de energia mitocondrial." }
        ]
      },
      {
        nome: "Magnésio Sérico / Eritrocitário",
        funcao: "Cofator de 300+ reações. ATP, relaxamento uterino, GABA, insulina.",
        ideal: "2,0 - 2,2 mg/dL",
        ref: "1,7 - 2,4 mg/dL",
        elevado: "Apenas em insuficiência renal severa ou abuso de suplemento.",
        reduzido: "Ansiedade, insônia, cãibra, cólicas extremas, resistência insulínica.",
        pratica: [
          { condicao: "< 1,8 mg/dL", desc: "Falta o 'freio' do sistema nervoso. Irritabilidade garantida." }
        ]
      },
      {
        nome: "PCR-us e Homocisteína",
        funcao: "Marcadores de inflamação. PCR-us para inflamação hepática geral, Hcy para risco vascular e metilação.",
        ideal: "PCR-us < 1,0 mg/L | Hcy: 5 - 8 μmol/L",
        ref: "PCR < 3 | Hcy 5-15",
        elevado: "Alto risco cardiometabólico. A Hcy alta indica falta de B12/Folato/B6.",
        reduzido: "Status anti-inflamatório excelente.",
        pratica: [
          { condicao: "Hcy > 10", desc: "Investigar urgentemente as vitaminas do complexo B (mutação MTHFR)." }
        ]
      },
      {
        nome: "6-Sulfatoximelatonina (aMT6s)",
        funcao: "Marcador urinário principal da produção de melatonina noturna.",
        ideal: "Curva urinária adequada ao período noturno",
        ref: "Varia por lab",
        elevado: "Uso exógeno.",
        reduzido: "Insônia, sono leve, envelhecimento celular, obesidade.",
        pratica: [
          { condicao: "aMT6s Reduzida", desc: "Sinaliza falha brutal no ritmo circadiano. Associar com higiene do sono urgente." }
        ]
      },
      {
        nome: "IGF-1",
        funcao: "Reflete a produção de GH. Marcador de reparo, anabolismo e longevidade.",
        ideal: "Quartil superior da referência para a idade",
        ref: "Conforme idade/sexo",
        elevado: "Resistência insulínica, excesso calórico ou hiperatividade do eixo.",
        reduzido: "Sarcopenia, fadiga, falta de reparo celular noturno (falta de GH).",
        pratica: [
          { condicao: "IGF-1 muito baixo", desc: "Declínio acentuado de vitalidade, pele fina e perda de massa magra." }
        ]
      }
    ]
  }
];

const ExamCard = ({ exame }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
        <span className="font-bold text-white text-[13px] text-left">{exame.nome}</span>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block text-[10px] text-[#fb336d] font-bold px-2 py-1 bg-[#fb336d]/10 rounded border border-[#fb336d]/20">
            Ideal: {exame.ideal.split('|')[0]}
          </span>
          <ChevronRight size={18} className={`text-slate-500 transition-transform ${isOpen ? 'rotate-90 text-[#fb336d]' : ''}`} />
        </div>
      </button>
      
      {isOpen && (
        <div className="p-5 border-t border-white/5 bg-black/30 space-y-4 animate-in fade-in">
          <p className="text-[11px] text-slate-300 leading-relaxed">
            <span className="text-[#fb336d] font-bold uppercase tracking-wider">Função Clínica:</span> {exame.funcao}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/40 p-3 rounded-lg border border-white/5">
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Valores Ideais Funcionais</p>
              <p className="text-[11px] font-bold text-emerald-400">{exame.ideal}</p>
            </div>
            <div className="bg-black/40 p-3 rounded-lg border border-white/5">
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Referência Laboratorial Padrão</p>
              <p className="text-[11px] text-slate-300">{exame.ref}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-500/5 p-3 rounded-lg border border-red-500/10">
              <p className="text-[10px] font-bold text-red-400 mb-1 flex items-center gap-1"><AlertCircle size={12}/> Valores Elevados</p>
              <p className="text-[10px] text-slate-300">{exame.elevado}</p>
            </div>
            <div className="bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
              <p className="text-[10px] font-bold text-blue-400 mb-1 flex items-center gap-1"><Droplets size={12}/> Valores Reduzidos</p>
              <p className="text-[10px] text-slate-300">{exame.reduzido}</p>
            </div>
          </div>

          {exame.pratica && (
            <div className="bg-[#fb336d]/5 p-4 rounded-xl border border-[#fb336d]/10 mt-4">
              <p className="text-[11px] font-bold text-white mb-3 flex items-center gap-2"><Target size={14} className="text-[#fb336d]"/> Interpretação Prática Rápida</p>
              <ul className="space-y-2">
                {exame.pratica.map((p, i) => (
                  <li key={i} className="text-[10px] text-slate-300 flex items-start gap-2">
                    <ChevronRight size={12} className="text-[#fb336d] shrink-0 mt-0.5" /> 
                    <span><strong className="text-[#fb336d]">{p.condicao}:</strong> {p.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ExamesInterpretationView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGroups = examesData.map(group => ({
    ...group,
    exames: group.exames.filter(ex => 
      ex.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.funcao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.ideal.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.exames.length > 0);

  return (
    <div className="space-y-6">
      <div className="bg-[#fb336d]/5 border border-[#fb336d]/20 rounded-2xl p-6 mb-8">
        <h3 className="text-white font-bold flex items-center gap-2 mb-2 text-lg">
          <FlaskConical className="text-[#fb336d]" /> Interpretação Funcional de Exames
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed">
          Guia de análise laboratorial integrada. Foque nos valores ideais funcionais para antecipar sintomas antes que se tornem patologias irreversíveis.
        </p>
      </div>

      <div className="relative mb-8">
         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
         <input 
           type="text" 
           placeholder="Buscar por hormônio ou exame..." 
           className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#fb336d] transition-all shadow-lg" 
           onChange={e => setSearchTerm(e.target.value)} 
         />
      </div>

      <div className="space-y-8">
         {filteredGroups.length > 0 ? filteredGroups.map((grupo, idx) => {
            const IconGroup = grupo.icon;
            return (
              <div key={idx} className="animate-in fade-in slide-in-from-bottom-2">
                 <h4 className="text-[#fb336d] text-sm font-bold flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                   <IconGroup size={18}/> {grupo.grupo}
                 </h4>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                   {grupo.exames.map((exame, eIdx) => (
                      <ExamCard key={eIdx} exame={exame} />
                   ))}
                 </div>
              </div>
            )
         }) : (
           <div className="text-center py-10 bg-white/5 border border-white/10 rounded-xl">
             <FlaskConical size={32} className="text-slate-500 mx-auto mb-3" />
             <p className="text-slate-400 text-sm">Nenhum exame encontrado para "{searchTerm}"</p>
           </div>
         )}
      </div>
    </div>
  );
};

// --- ESTRUTURA DE DADOS ---
const modulesData = [
  {
    id: "anamnese",
    title: "Anamnese Hormonal Estratégica",
    icon: ClipboardList,
    description: "Estrutura completa baseada no protocolo de investigação FSA para coleta de dados clínicos.",
    topics: [{ title: "Protocolo de Investigação Estratégica", content: { intro: "A anamnese hormonal é a ferramenta estruturada para investigar a saúde hormonal no consultório.", explanation: "Este módulo segue o roteiro do arquivo de Anamnese Estratégica, permitindo identificar padrões antes dos exames.", example: "Investigação de eixos tireoidiano, adrenal e saúde feminina.", application: "Aplicada na primeira consulta para padronizar o raciocínio clínico.", summary: "Uma anamnese rigorosa é a base do sucesso terapêutico hormonal." } }]
  },
  {
    id: "questionario",
    title: "Questionário de Sintomas Hormonais",
    icon: ListChecks,
    description: "Ferramenta de triagem clínica para identificação de padrões de disfunção hormonal.",
    topics: [{ title: "Mapeamento Clínico Integrado", content: { intro: "Destinado a identificar padrões que possam sugerir alterações nos principais eixos hormonais.", explanation: "Como os sintomas raramente apontam para um único hormônio, use a ferramenta para analisar desequilíbrios integrados.", example: "Identificar padrões e direcionar exames laboratoriais.", application: "Ferramenta de apoio ao raciocínio clínico.", summary: "Correlacione com o histórico e avaliação física." } }]
  },
  {
    id: "matriz",
    title: "Matriz de Investigação",
    icon: Network,
    description: "Relacione sintomas com hipóteses clínicas baseadas nos eixos FSA.",
    topics: [{ title: "Organização da Investigação Clínica", content: { intro: "A matriz de investigação conecta sintomas com possíveis causas hormonais.", explanation: "Ela ajuda a priorizar hipóteses clínicas cruzando sinais e sintomas com eixos hormonais e exames laboratoriais.", example: "Fadiga + intolerância ao frio sugerindo suporte tireoidiano.", application: "Essa matriz orienta a escolha estratégica de exames laboratoriais e protocolos.", summary: "Ferramenta essencial para o raciocínio clínico sistêmico." } }]
  },
  {
    id: "protocolos",
    title: "Protocolos Nutricionais e de Estilo de Vida",
    icon: Lightbulb,
    description: "Estratégias nutricionais e de estilo de vida para condições hormonais comuns.",
    topics: [{ title: "Condutas Práticas Iniciais", content: { intro: "Apresenta intervenções iniciais para condições como SOP, TPM e estresse crônico.", explanation: "Estratégias baseadas em mudança de estilo de vida e nutrição.", example: "Manejo da TPM através de modulação inflamatória.", application: "Ponto de partida seguro após identificação clínica.", summary: "Conecta o diagnóstico à prática terapêutica." } }]
  },
  {
    id: "interpretacao_exames",
    title: "Interpretação de Exames",
    icon: FlaskConical,
    description: "Guia de interpretação clínica de exames laboratoriais com valores funcionais.",
    topics: [{ title: "Avaliação Laboratorial Integrada", content: { intro: "A interpretação de exames deve considerar o contexto clínico e sintomas.", explanation: "Utilize os valores de referência funcional para análise funcional.", example: "TSH de 3.5 pode indicar hipofunção em pacientes sintomáticos.", application: "Permite correlacionar queixas com achados bioquímicos.", summary: "A avaliação clínica é sempre soberana." } }]
  },
  {
    id: "ciclo_menstrual",
    title: "Guia do Ciclo Menstrual",
    icon: CalendarDays,
    description: "Mapeamento dos sintomas fisiológicos ao longo do ciclo menstrual e descontinuação do uso de ACO.",
    topics: [{ title: "Saúde da Mulher", content: { intro: "Mapeamento completo dos sintomas fisiológicos ao longo do ciclo e protocolo de ACO.", explanation: "Entenda a flutuação hormonal, padrões da TPM e nutrientes estratégicos em cada fase.", example: "Suporte de magnésio na fase lútea, reposição de ferro na menstruação.", application: "Personalizar o atendimento feminino com e sem anticoncepcional.", summary: "Ferramenta indispensável para o cuidado integrativo e acompanhamento da saúde feminina." } }]
  }
];

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
        <p className="text-slate-400 text-sm mb-8">Introduza a senha de aluno para acessar o Manual Clínico Digital.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Senha de Acesso"
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
        {moduleData.id === 'anamnese' && <AnamneseStrategyView />}
        {moduleData.id === 'questionario' && <InteractiveQuestionnaire />}
        {moduleData.id === 'matriz' && <InvestigationMatrixView />}
        {moduleData.id === 'protocolos' && <ProtocolsView />}
        {moduleData.id === 'ciclo_menstrual' && <MenstrualCycleView />}
        {moduleData.id === 'interpretacao_exames' && <ExamesInterpretationView />}
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

// --- MAIN APP ---
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0d0618';
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
              <h1 className="text-4xl font-extrabold text-white mb-2">Guia Hormonal</h1>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#fb336d] to-[#d42a68] bg-clip-text text-transparent mb-4">Do sintoma ao protocolo, com raciocínio clínico estruturado</h2>
              <p className="text-slate-400 max-w-2xl leading-relaxed font-medium">Guia clínico interativo para apoio à decisão clínica e investigação hormonal avançada.</p>
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
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #fb336d44; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #fb336d; }
      `}</style>
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
