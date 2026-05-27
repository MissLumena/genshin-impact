/**
 * Общие UI-компоненты: шапка, модалка, карточки, поля ввода.
 */
import { Link, useLocation } from 'react-router-dom';
import { ELEMENT_COLORS } from './mockData';

/** V2: только Главная и Результаты — Персонажи/Команда доступны с главной */
const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/results', label: 'Результаты' },
];

/** Шапка с логотипом и навигацией */
export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-700/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-genshin-gold">
          <span className="text-2xl">⚔️</span>
          Genshin DPS Calc
        </Link>
        <nav className="flex flex-wrap gap-1 sm:gap-2">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                pathname === to || (to !== '/' && pathname.startsWith(to))
                  ? 'bg-genshin-gold/20 text-genshin-gold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

/** Модальное окно подтверждения */
export function ConfirmModal({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-600 bg-genshin-panel p-6 shadow-xl">
        <h3 className="mb-2 text-lg font-semibold text-genshin-gold">{title}</h3>
        <p className="mb-6 text-slate-300">{message}</p>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="btn-secondary">
            Отмена
          </button>
          <button type="button" onClick={onConfirm} className="btn-primary">
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
}

/** Tooltip с формулой расчёта */
export function Tooltip({ text, children }) {
  return (
    <span className="group relative inline-flex cursor-help">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-56 -translate-x-1/2 rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200 shadow-lg group-hover:block">
        {text}
      </span>
    </span>
  );
}

/** Карточка персонажа для списка */
export function CharacterCard({ character, onConfigure, onClick }) {
  const elementClass = ELEMENT_COLORS[character.element] || 'text-slate-300 bg-slate-700';

  return (
    <article
      className="card cursor-pointer transition hover:border-genshin-gold/50 hover:shadow-lg hover:shadow-genshin-gold/10"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800 text-3xl">
          {character.icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">{character.name}</h3>
          {character.nameRu && (
            <p className="truncate text-xs text-slate-400">{character.nameRu}</p>
          )}
          <span className={`mt-1 inline-block rounded px-2 py-0.5 text-xs ${elementClass}`}>
            {character.element}
          </span>
          <p className="mt-1 text-xs text-slate-400">
            {character.weapon} · {'★'.repeat(character.rarity)}
            {character.region && ` · ${character.region}`}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="btn-primary mt-4 w-full"
        onClick={(e) => {
          e.stopPropagation();
          onConfigure?.();
        }}
      >
        Настроить
      </button>
    </article>
  );
}

/** Поле ввода с валидацией диапазона */
export function RangeInput({ label, value, onChange, min, max, step = 1, tooltip, suffix = '' }) {
  const clamp = (v) => Math.min(max, Math.max(min, Number(v) || min));

  return (
    <label className="block">
      <span className="mb-1 flex items-center gap-1 text-sm text-slate-300">
        {label}
        {tooltip && (
          <Tooltip text={tooltip}>
            <span className="text-genshin-gold">ⓘ</span>
          </Tooltip>
        )}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clamp(e.target.value))}
          className="input-field flex-1"
        />
        {suffix && <span className="text-sm text-slate-400">{suffix}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-genshin-gold"
      />
    </label>
  );
}

/** Обёртка секции страницы */
export function PageSection({ title, children, className = '' }) {
  return (
    <section className={`card ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}

/** Кнопки табов для страницы настроек */
export function TabBar({ tabs, active, onChange }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2 border-b border-slate-700 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            active === tab.id
              ? 'bg-genshin-gold text-slate-900'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/** Простая bar-chart для вклада в DPS */
export function DpsBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between text-sm">
            <span>{item.label}</span>
            <span className="text-genshin-gold">{item.value.toLocaleString()} DPS</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-genshin-gold/80 to-amber-600"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
