import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Cpu,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  LifeBuoy,
  LineChart,
  ListTodo,
  MessageCircle,
  MousePointer2,
  Palette,
  Presentation,
  Rocket,
  Search,
  Send,
  Server,
  Share2,
  Shield,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

const canvasWrap =
  "scroll-showcase-card__canvas relative z-[1] mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-100 dark:border-gray-700/70";

function IconTile({
  icon: Icon,
  label,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-1.5 rounded-xl border border-gray-200/90 dark:border-gray-600/80 bg-gray-50/90 dark:bg-gray-800/50 px-2.5 py-2 text-center ${className}`}
    >
      <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" aria-hidden />
      <span className="text-[9px] font-medium text-gray-600 dark:text-gray-400 leading-tight px-0.5">
        {label}
      </span>
    </div>
  );
}

/** Card grande — startups: jornada + cluster de capacidades */
export function StartupProductCanvas() {
  const steps = [
    { y: 14, filled: true },
    { y: 46, filled: true },
    { y: 78, filled: true },
    { y: 110, filled: false },
  ];
  const evolution = [
    { label: "Primeiro passo", done: true },
    { label: "Primeira versão", done: true },
    { label: "Clientes usando", done: true },
    { label: "Próximo nível", done: false },
  ];
  const chips = [
    "Apresentação para investidor",
    "Números de uso",
    "Plano por trimestre",
    "Informações para investidor",
  ];
  return (
    <div className={canvasWrap}>
      <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:gap-7 lg:gap-10">
        <div className="flex gap-3 sm:min-w-[4.5rem] sm:flex-col sm:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 sm:[writing-mode:vertical-lr] sm:rotate-180">
            caminho
          </span>
          <svg
            viewBox="0 0 48 124"
            className="w-12 h-36 sm:h-40 text-gray-300 dark:text-gray-600 shrink-0"
            aria-hidden
          >
            <line
              x1="24"
              y1="12"
              x2="24"
              y2="112"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            {steps.map((s, i) => (
              <circle
                key={i}
                cx="24"
                cy={s.y}
                r={s.filled ? 5 : 4}
                className={
                  s.filled
                    ? "fill-gray-900 dark:fill-white stroke-gray-900 dark:stroke-white"
                    : "fill-transparent stroke-gray-400 dark:stroke-gray-500"
                }
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>
        <div className="min-w-0 flex-1 space-y-4 lg:space-y-5">
          <div>
            <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 lg:text-[11px]">
              O que você vê na proposta
            </p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 lg:gap-3">
              <IconTile icon={Search} label="Entender" />
              <IconTile icon={Layers} label="Organização" />
              <IconTile icon={GitBranch} label="Atualizações" />
              <IconTile icon={LineChart} label="Resultados" />
              <IconTile icon={Target} label="Metas" />
              <IconTile icon={Rocket} label="Lançamento" />
              <IconTile icon={Presentation} label="Apresentação" />
              <IconTile icon={Wallet} label="Orçamento" />
              <IconTile icon={Boxes} label="Crescimento" className="col-span-3 sm:col-span-4" />
            </div>
          </div>
          <div className="rounded-xl border border-gray-200/90 dark:border-gray-600/90 bg-gradient-to-br from-gray-50/95 to-white dark:from-gray-800/50 dark:to-gray-900/30 px-3 py-3 sm:px-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-2.5">
              Crescimento do negócio
            </p>
            <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {evolution.map((stage, i) => (
                <Fragment key={stage.label}>
                  {i > 0 && (
                    <ArrowRight
                      className="h-3 w-3 text-gray-300 dark:text-gray-600 shrink-0 mx-0.5"
                      aria-hidden
                    />
                  )}
                  <span
                    className={`inline-flex items-center rounded-lg border px-2 py-1 text-[10px] font-mono uppercase tracking-wide ${
                      stage.done
                        ? "border-gray-900/20 bg-gray-900/[0.06] text-gray-800 dark:border-white/20 dark:bg-white/10 dark:text-gray-100"
                        : "border-dashed border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
                    }`}
                  >
                    {stage.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-md border border-gray-200/90 dark:border-gray-600 bg-gray-50/90 dark:bg-gray-800/40 px-2 py-1 text-[10px] text-gray-600 dark:text-gray-400"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card grande — ágil: visão simples do processo */
export function AgileDeliveryCanvas() {
  const phases: { icon: LucideIcon; label: string; sub: string }[] = [
    { icon: Search, label: "Entender", sub: "o que você precisa" },
    { icon: ListTodo, label: "Construir", sub: "em etapas curtas" },
    { icon: Timer, label: "Acompanhar", sub: "reuniões fixas" },
    { icon: Send, label: "Colocar no ar", sub: "para o seu time" },
  ];
  const chips = [
    "Você escolhe o que vem primeiro",
    "Demonstrações ao vivo",
    "Valor combinado antes de começar",
  ];
  return (
    <div className={canvasWrap}>
      <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-900/30 px-3 py-3 sm:px-4 mb-3">
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-500">
          <span>começo</span>
          <div className="flex-1 flex items-center gap-1 mx-2 min-w-0">
            <span className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
            <Sparkles className="h-3 w-3 shrink-0 text-gray-400 dark:text-gray-500" />
            <span className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
          </div>
          <span>resultado</span>
        </div>
        <p className="text-center text-[11px] text-gray-600 dark:text-gray-400 mt-2 leading-snug">
          Você vê <span className="text-gray-800 dark:text-gray-200 font-medium">cada entrega</span> antes de investir na próxima — sem surpresa na fatura.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {phases.map((phase, i) => {
          const PhaseIcon = phase.icon;
          return (
            <div key={phase.label} className="relative flex flex-col items-center text-center">
              {i > 0 && (
                <ArrowRight
                  className="hidden sm:block absolute -left-1.5 top-6 h-3 w-3 text-gray-300 dark:text-gray-600 z-0"
                  aria-hidden
                />
              )}
              <div className="relative z-[1] w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white/80 dark:bg-gray-800/60 px-2 py-3">
                <PhaseIcon className="h-5 w-5 mx-auto text-gray-600 dark:text-gray-400 mb-1.5" />
                <p className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">
                  {phase.label}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 leading-snug">
                  {phase.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {chips.map((c) => (
          <span
            key={c}
            className="inline-flex items-center rounded-md border border-gray-200/90 dark:border-gray-600 bg-gray-50/90 dark:bg-gray-800/40 px-2 py-1 text-[10px] text-gray-600 dark:text-gray-400"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/** CRM — pipeline compacto */
export function CrmPipelineCanvas() {
  const steps: { label: string; icon: LucideIcon }[] = [
    { label: "Contato", icon: Share2 },
    { label: "Negócio", icon: Database },
    { label: "Cliente", icon: BarChart3 },
  ];
  return (
    <div className={canvasWrap}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-3">
        Caminho do cliente
      </p>
      <div className="flex items-start justify-center gap-1 sm:gap-2">
        {steps.map((step, i) => {
          const StepIcon = step.icon;
          return (
            <Fragment key={step.label}>
              <div className="flex flex-col items-center flex-1 min-w-0 max-w-[5.5rem]">
                <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-2 bg-gray-50/80 dark:bg-gray-800/50 mb-1.5">
                  <StepIcon className="h-4 w-4 text-gray-600 dark:text-gray-400 mx-auto" />
                </div>
                <span className="text-[9px] font-mono text-gray-500 dark:text-gray-500 text-center leading-tight px-0.5">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="hidden sm:block h-3 w-3 mt-3 text-gray-300 dark:text-gray-600 shrink-0"
                  aria-hidden
                />
              )}
            </Fragment>
          );
        })}
      </div>
      <div className="flex items-center gap-1.5 mt-3 justify-center max-w-[12rem] mx-auto">
        {steps.map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-600"
          />
        ))}
      </div>
    </div>
  );
}

/** Automação / sob medida */
export function AutomationCanvas() {
  return (
    <div className={canvasWrap}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-3">
        Tudo conversando
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-800/50 px-3 py-2 flex items-center gap-2">
          <Workflow className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Processos</span>
        </div>
        <Zap className="h-4 w-4 text-gray-400 shrink-0" aria-hidden />
        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-800/50 px-3 py-2 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Sistemas ligados</span>
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-2 flex-wrap">
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
          avisos automáticos
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
          fila de tarefas
        </span>
      </div>
    </div>
  );
}

/** Card largo — tecnologia em linguagem simples */
export function TechStackCanvas() {
  const items: { icon: LucideIcon; t: string }[] = [
    { icon: Layers, t: "Telas e app" },
    { icon: Database, t: "Dados" },
    { icon: Server, t: "Hospedagem" },
    { icon: Shield, t: "Proteção" },
  ];
  return (
    <div className={canvasWrap}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-3">
        O que cuidamos
      </p>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {items.map(({ icon: I, t }) => (
          <div
            key={t}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50/90 dark:bg-gray-800/50 pl-2 pr-3 py-1.5"
          >
            <I className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Faixa compacta de ícones (cards menores) */
export function MiniIconStrip({
  label,
  items,
}: {
  label: string;
  items: { icon: LucideIcon; hint: string }[];
}) {
  return (
    <div className={canvasWrap}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-2.5">
        {label}
      </p>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
        {items.map(({ icon: I, hint }) => (
          <div
            key={hint}
            title={hint}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400"
          >
            <I className="h-4 w-4" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Atalhos para cards de suporte / equipe */
export function SupportMicroCanvas() {
  return (
    <MiniIconStrip
      label="Canais"
      items={[
        { icon: MessageCircle, hint: "comunicação" },
        { icon: LifeBuoy, hint: "suporte" },
        { icon: Activity, hint: "monitoramento" },
      ]}
    />
  );
}

export function UxMicroCanvas() {
  return (
    <MiniIconStrip
      label="Experiência"
      items={[
        { icon: Palette, hint: "visual limpo" },
        { icon: MousePointer2, hint: "fácil de usar" },
        { icon: Eye, hint: "objetivo claro" },
      ]}
    />
  );
}

export function ScaleMicroCanvas() {
  return (
    <MiniIconStrip
      label="Escala"
      items={[
        { icon: TrendingUp, hint: "mais clientes" },
        { icon: Server, hint: "suporta pico" },
        { icon: Gauge, hint: "rápido o bastante" },
      ]}
    />
  );
}

export function TeamMicroCanvas() {
  return (
    <MiniIconStrip
      label="Time"
      items={[
        { icon: Users, hint: "equipe dedicada" },
        { icon: MessageCircle, hint: "conversa direta" },
        { icon: GitBranch, hint: "troca sem ruído" },
      ]}
    />
  );
}
