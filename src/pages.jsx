/**
 * Все страницы приложения (V2).
 */
import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  CharacterCard,
  ConfirmModal,
  DpsBarChart,
  PageSection,
  RangeInput,
  TabBar,
  Tooltip,
} from './components';
import {
  ARTIFACT_SETS,
  CHARACTERS,
  DEFAULT_CHARACTER_CONFIG,
  ELEMENTS,
  FORMULA_TOOLTIPS,
  MAIN_STATS,
  RARITIES,
  REGIONS,
  SUBSTAT_OPTIONS,
  WEAPONS,
  calculateMockDps,
  getCharacterById,
  matchCharacterSearch,
} from './mockData';
import { useAppStore } from './App';

const ARTIFACT_SLOTS = [
  { key: 'flower', label: 'Flower' },
  { key: 'plume', label: 'Plume' },
  { key: 'sands', label: 'Sands' },
  { key: 'goblet', label: 'Goblet' },
  { key: 'circlet', label: 'Circlet' },
];

const SETTINGS_TABS = [
  { id: 'stats', label: 'Базовые статы' },
  { id: 'crit', label: 'Крит & Энергия' },
  { id: 'artifacts', label: 'Артефакты' },
  { id: 'constellations', label: 'Созвездия' },
];

/* ─── 1. Главная страница ─── */
export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-genshin-gold">Genshin DPS Calculator</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Калькулятор урона для Genshin Impact. Настройте персонажей, соберите команду
          из 4 героев и сравните билды с учётом артефактов, критов и созвездий.
        </p>
      </section>

      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        <Link to="/team" className="card group text-center transition hover:border-genshin-gold/60">
          <div className="mb-3 text-4xl">⚡</div>
          <h2 className="text-lg font-semibold group-hover:text-genshin-gold">Начать расчёт</h2>
          <p className="mt-2 text-sm text-slate-400">Собрать команду и рассчитать DPS</p>
        </Link>
        <Link to="/characters" className="card group text-center transition hover:border-genshin-gold/60">
          <div className="mb-3 text-4xl">👤</div>
          <h2 className="text-lg font-semibold group-hover:text-genshin-gold">Мои персонажи</h2>
          <p className="mt-2 text-sm text-slate-400">Список героев и настройка билдов</p>
        </Link>
        <Link to="/team" className="card group text-center transition hover:border-genshin-gold/60">
          <div className="mb-3 text-4xl">🛡️</div>
          <h2 className="text-lg font-semibold group-hover:text-genshin-gold">Мои команды</h2>
          <p className="mt-2 text-sm text-slate-400">4 слота для формирования отряда</p>
        </Link>
      </div>

      <PageSection title="Возможности">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'Настройка статов, артефактов и созвездий',
            'Фильтрация персонажей по элементу и редкости',
            'Расчёт DPS по навыкам (авто, E, Q)',
            'Сравнение двух билдов side-by-side',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-slate-300">
              <span className="text-genshin-gold">✦</span> {item}
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
}

/* ─── 2. Список персонажей ─── */
export function CharactersPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [elementFilter, setElementFilter] = useState('');
  const [weaponFilter, setWeaponFilter] = useState('');
  const [rarityFilter, setRarityFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const filtered = useMemo(() => {
    return CHARACTERS.filter((c) => {
      if (!matchCharacterSearch(c, search)) return false;
      if (elementFilter && c.element !== elementFilter) return false;
      if (weaponFilter && c.weapon !== weaponFilter) return false;
      if (rarityFilter && c.rarity !== Number(rarityFilter)) return false;
      if (regionFilter && c.region !== regionFilter) return false;
      return true;
    });
  }, [search, elementFilter, weaponFilter, rarityFilter, regionFilter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-genshin-gold">Персонажи</h1>
      <p className="mb-6 text-slate-400">{CHARACTERS.length} героев · Luna VI</p>

      {/* Фильтры */}
      <div className="card mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <input
          type="search"
          placeholder="Поиск (EN / RU)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field lg:col-span-1"
        />
        <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="select-field">
          <option value="">Все регионы</option>
          {REGIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select value={elementFilter} onChange={(e) => setElementFilter(e.target.value)} className="select-field">
          <option value="">Все элементы</option>
          {ELEMENTS.map((el) => (
            <option key={el} value={el}>{el}</option>
          ))}
        </select>
        <select value={weaponFilter} onChange={(e) => setWeaponFilter(e.target.value)} className="select-field">
          <option value="">Все оружия</option>
          {WEAPONS.map((w) => (
            <option key={w} value={w}>{w}</option>
          ))}
        </select>
        <select value={rarityFilter} onChange={(e) => setRarityFilter(e.target.value)} className="select-field">
          <option value="">Вся редкость</option>
          {RARITIES.map((r) => (
            <option key={r} value={r}>{r}★</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={() => navigate(`/character/${char.id}`)}
            onConfigure={() => navigate(`/character/${char.id}`)}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate-400">Персонажи не найдены</p>
      )}
    </div>
  );
}

/* ─── 3. Настройки персонажа ─── */
export function CharacterSettingsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { savedCharacters, saveCharacter } = useAppStore();
  const character = getCharacterById(id);

  const [activeTab, setActiveTab] = useState('stats');
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Загружаем сохранённый конфиг или дефолт + базовые статы персонажа
  const existing = savedCharacters.find((s) => s.characterId === id);
  const [config, setConfig] = useState(() => {
    if (existing) return { ...existing.config };
    const base = character?.baseStats || {};
    return {
      ...DEFAULT_CHARACTER_CONFIG,
      hp: base.hp || 0,
      def: base.def || 0,
      em: base.em || 0,
      atkBonus: base.atk || 0,
    };
  });

  if (!character) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-slate-400">Персонаж не найден</p>
        <Link to="/characters" className="btn-primary mt-4 inline-block">К списку</Link>
      </div>
    );
  }

  const updateConfig = (key, value) => setConfig((prev) => ({ ...prev, [key]: value }));

  const updateArtifact = (slot, field, value) => {
    setConfig((prev) => ({
      ...prev,
      artifacts: {
        ...prev.artifacts,
        [slot]: { ...prev.artifacts[slot], [field]: value },
      },
    }));
  };

  const updateSubstat = (slot, index, field, value) => {
    setConfig((prev) => {
      const substats = [...prev.artifacts[slot].substats];
      substats[index] = { ...substats[index], [field]: value };
      return {
        ...prev,
        artifacts: {
          ...prev.artifacts,
          [slot]: { ...prev.artifacts[slot], substats },
        },
      };
    });
  };

  // Подсчёт бонусов сетов (упрощённо: по количеству одинаковых set id)
  const setCounts = Object.values(config.artifacts).reduce((acc, art) => {
    acc[art.set] = (acc[art.set] || 0) + 1;
    return acc;
  }, {});

  const handleSave = () => {
    saveCharacter({ characterId: id, config, savedAt: Date.now() });
    setShowSaveModal(false);
    navigate('/team');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <span className="text-5xl">{character.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <p className="text-slate-400">{character.nameRu} · {character.element} · {character.weapon} · {character.rarity}★</p>
        </div>
      </div>

      <TabBar tabs={SETTINGS_TABS} active={activeTab} onChange={setActiveTab} />

      {/* Блок: Базовые статы */}
      {activeTab === 'stats' && (
        <PageSection title="Базовые статы">
          <div className="grid gap-6 sm:grid-cols-2">
            <RangeInput label="Уровень" value={config.level} onChange={(v) => updateConfig('level', v)} min={1} max={90} />
            <RangeInput label="ATK (база + бонус)" value={config.atkBonus} onChange={(v) => updateConfig('atkBonus', v)} min={0} max={5000} />
            <RangeInput label="HP" value={config.hp} onChange={(v) => updateConfig('hp', v)} min={0} max={50000} />
            <RangeInput label="Защита" value={config.def} onChange={(v) => updateConfig('def', v)} min={0} max={5000} />
            <RangeInput label="Elemental Mastery" value={config.em} onChange={(v) => updateConfig('em', v)} min={0} max={1200} />
          </div>
        </PageSection>
      )}

      {/* Блок: Крит & Энергия */}
      {activeTab === 'crit' && (
        <PageSection title="Крит & Энергия">
          <div className="grid gap-6 sm:grid-cols-3">
            <RangeInput label="CRIT Rate" value={config.critRate} onChange={(v) => updateConfig('critRate', v)} min={0} max={100} suffix="%" tooltip={FORMULA_TOOLTIPS.critRate} />
            <RangeInput label="CRIT DMG" value={config.critDmg} onChange={(v) => updateConfig('critDmg', v)} min={0} max={400} suffix="%" tooltip={FORMULA_TOOLTIPS.critDmg} />
            <RangeInput label="Energy Recharge" value={config.energyRecharge} onChange={(v) => updateConfig('energyRecharge', v)} min={0} max={400} suffix="%" tooltip={FORMULA_TOOLTIPS.energyRecharge} />
          </div>
        </PageSection>
      )}

      {/* Блок: Артефакты */}
      {activeTab === 'artifacts' && (
        <div className="space-y-6">
          {ARTIFACT_SLOTS.map(({ key, label }) => (
            <PageSection key={key} title={label}>
              <div className="grid gap-4 lg:grid-cols-2">
                <label className="block">
                  <span className="mb-1 text-sm text-slate-300">Сет</span>
                  <select
                    value={config.artifacts[key].set}
                    onChange={(e) => updateArtifact(key, 'set', e.target.value)}
                    className="select-field"
                  >
                    {ARTIFACT_SETS.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 text-sm text-slate-300">Main Stat</span>
                  <select
                    value={config.artifacts[key].mainStat}
                    onChange={(e) => updateArtifact(key, 'mainStat', e.target.value)}
                    className="select-field"
                  >
                    {MAIN_STATS[key].map((stat) => (
                      <option key={stat} value={stat}>{stat}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {config.artifacts[key].substats.map((sub, i) => (
                  <div key={i} className="flex gap-2">
                    <select
                      value={sub.stat}
                      onChange={(e) => updateSubstat(key, i, 'stat', e.target.value)}
                      className="select-field flex-1"
                    >
                      {SUBSTAT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={sub.value}
                      onChange={(e) => updateSubstat(key, i, 'value', Number(e.target.value))}
                      className="input-field w-24"
                    />
                  </div>
                ))}
              </div>
            </PageSection>
          ))}

          {/* Автоматические бонусы сетов */}
          <PageSection title="Бонусы сетов">
            <Tooltip text={FORMULA_TOOLTIPS.setBonus}>
              <span className="mb-3 inline-block text-sm text-genshin-gold">ⓘ Как считаются бонусы</span>
            </Tooltip>
            <div className="space-y-2">
              {Object.entries(setCounts).map(([setId, count]) => {
                const setInfo = ARTIFACT_SETS.find((s) => s.id === setId);
                if (!setInfo) return null;
                return (
                  <div key={setId} className="rounded-lg bg-slate-800/50 p-3 text-sm">
                    <strong>{setInfo.name}</strong> ({count} шт.)
                    {count >= 2 && <p className="text-green-400">2pc: {setInfo.bonus2}</p>}
                    {count >= 4 && <p className="text-green-400">4pc: {setInfo.bonus4}</p>}
                  </div>
                );
              })}
            </div>
          </PageSection>
        </div>
      )}

      {/* Блок: Созвездия */}
      {activeTab === 'constellations' && (
        <PageSection title="Созвездия">
          <div className="mb-6 flex flex-wrap gap-2">
            {[0, 1, 2, 3, 4, 5, 6].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => updateConfig('constellation', c)}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition ${
                  config.constellation === c
                    ? 'bg-genshin-gold text-slate-900 ring-2 ring-amber-300'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                C{c}
              </button>
            ))}
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-slate-200">{character.constellations[config.constellation]}</p>
            <p className="mt-2 text-sm text-amber-400">⚠ Влияет на расчёт</p>
          </div>
        </PageSection>
      )}

      <div className="mt-8 flex justify-end">
        <button type="button" className="btn-primary" onClick={() => setShowSaveModal(true)}>
          Сохранить
        </button>
      </div>

      <ConfirmModal
        open={showSaveModal}
        title="Сохранить персонажа?"
        message={`${character.name} будет добавлен в список для формирования команды.`}
        onConfirm={handleSave}
        onCancel={() => setShowSaveModal(false)}
      />
    </div>
  );
}

/* ─── 4. Формирование команды: 4 ячейки с выпадающим списком ─── */
export function TeamPage() {
  const navigate = useNavigate();
  const { savedCharacters, team, setTeamSlot, clearTeamSlot, setLastResults } = useAppStore();
  const [search, setSearch] = useState('');

  const getConfigForCharacter = (characterId) => {
    const saved = savedCharacters.find((s) => s.characterId === characterId);
    if (saved) return saved.config;

    const character = getCharacterById(characterId);
    const base = character?.baseStats || {};
    return {
      ...DEFAULT_CHARACTER_CONFIG,
      hp: base.hp || 0,
      def: base.def || 0,
      em: base.em || 0,
      atkBonus: base.atk || 0,
    };
  };

  const getCharInfo = (slot) => {
    const char = getCharacterById(slot.characterId);
    return { ...char, config: slot.config };
  };

  const teamCount = team.filter(Boolean).length;

  const availableCharacters = useMemo(() => {
    return CHARACTERS.filter((c) => matchCharacterSearch(c, search));
  }, [search]);

  /** Персонаж уже занят в другом слоте */
  const isTakenInOtherSlot = (characterId, slotIndex) =>
    team.some((slot, i) => i !== slotIndex && slot?.characterId === characterId);

  const handleSlotChange = (slotIndex, characterId) => {
    if (!characterId) {
      clearTeamSlot(slotIndex);
      return;
    }
    setTeamSlot(slotIndex, {
      characterId,
      config: getConfigForCharacter(characterId),
    });
  };

  const handleCalculate = () => {
    const members = team.filter(Boolean).map(getCharInfo);
    if (members.length === 0) return;

    const results = members.map((m) => ({
      ...m,
      dps: calculateMockDps(m, m.config),
    }));

    const totalDps = results.reduce((sum, r) => sum + r.dps.totalDps, 0);
    setLastResults({ members: results, totalDps, rotationTime: 20 });
    navigate('/results');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-genshin-gold">Формирование команды</h1>
      <p className="mb-6 text-slate-400">
        В каждой ячейке выберите персонажа из списка. Один герой — только в одной ячейке.
      </p>

      <div className="card mb-6">
        <label className="block">
          <span className="mb-1 block text-sm text-slate-300">Поиск персонажа в списках</span>
          <input
            type="search"
            placeholder="Имя (EN / RU)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field max-w-md"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((slot, index) => {
          const char = slot ? getCharacterById(slot.characterId) : null;
          const isConfigured = slot && savedCharacters.some((s) => s.characterId === slot.characterId);

          return (
            <div key={index} className="card flex flex-col gap-3 border-2 border-slate-600">
              <span className="text-sm font-bold text-genshin-gold">Ячейка {index + 1}</span>

              <label className="block">
                <span className="mb-1 block text-xs text-slate-400">Выберите персонажа</span>
                <select
                  value={slot?.characterId || ''}
                  onChange={(e) => handleSlotChange(index, e.target.value)}
                  className="select-field w-full cursor-pointer"
                >
                  <option value="">— Не выбран —</option>
                  {availableCharacters.map((c) => {
                    const taken = isTakenInOtherSlot(c.id, index);
                    const saved = savedCharacters.find((s) => s.characterId === c.id);
                    return (
                      <option key={c.id} value={c.id} disabled={taken}>
                        {taken
                          ? `${c.name} (занят)`
                          : `${c.name}${saved ? ` · Lv.${saved.config.level}` : ''}`}
                      </option>
                    );
                  })}
                </select>
              </label>

              {char && slot ? (
                <div className="flex flex-col items-center rounded-lg bg-slate-800/80 py-4 text-center">
                  <span className="text-4xl">{char.icon}</span>
                  <p className="mt-2 font-semibold">{char.name}</p>
                  <p className="text-xs text-slate-400">{char.nameRu}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Lv. {slot.config.level} · C{slot.config.constellation}
                  </p>
                  {!isConfigured && (
                    <Link
                      to={`/character/${char.id}`}
                      className="mt-2 text-xs text-genshin-gold hover:underline"
                    >
                      Настроить билд →
                    </Link>
                  )}
                </div>
              ) : (
                <div className="flex min-h-[120px] items-center justify-center rounded-lg border border-dashed border-slate-600 text-sm text-slate-500">
                  Выберите из списка ↑
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/characters" className="btn-secondary">Настроить персонажа</Link>
        <button
          type="button"
          className="btn-primary px-8 py-3 text-lg"
          disabled={teamCount === 0}
          onClick={handleCalculate}
        >
          Рассчитать DPS ({teamCount}/4)
        </button>
      </div>
    </div>
  );
}

/* ─── 5. Результаты DPS ─── */
export function ResultsPage() {
  const { lastResults, comparisonBuilds, addComparisonBuild } = useAppStore();
  const [rotationTime, setRotationTime] = useState(lastResults?.rotationTime || 20);

  if (!lastResults) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-slate-400">Сначала рассчитайте DPS команды</p>
        <Link to="/team" className="btn-primary mt-4 inline-block">К команде</Link>
      </div>
    );
  }

  const { members, totalDps } = lastResults;
  const dpsPerRotation = Math.round(totalDps * (rotationTime / 20));
  const chartData = members.map((m) => ({ label: m.name, value: m.dps.totalDps }));

  const skillRows = ['auto', 'skill', 'burst'];
  const skillLabels = { auto: 'Автоатака', skill: 'Elemental Skill', burst: 'Elemental Burst' };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-genshin-gold">Результаты DPS</h1>

      {/* Урон персонажей */}
      <PageSection title="Урон персонажей" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400">
                <th className="py-2 pr-4">Персонаж</th>
                <th className="py-2 pr-4">Навык</th>
                <th className="py-2 pr-4">Обычный</th>
                <th className="py-2">Крит</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) =>
                skillRows.map((skill) => (
                  <tr key={`${m.id}-${skill}`} className="border-b border-slate-800">
                    <td className="py-2 pr-4">
                      {skill === 'auto' && (
                        <span className="flex items-center gap-2">
                          {m.icon} {m.name}
                          {m.dps.constellationAffected && <span title="Созвездие влияет">⭐</span>}
                        </span>
                      )}
                    </td>
                    <td className="py-2 pr-4 text-slate-300">{skillLabels[skill]}</td>
                    <td className="py-2 pr-4">{m.dps[skill].normal.toLocaleString()}</td>
                    <td className="py-2 text-genshin-gold">{m.dps[skill].crit.toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </PageSection>

      {/* Общий DPS команды */}
      <PageSection title="Общий DPS команды" className="mb-6">
        <div className="mb-4 flex items-center gap-4">
          <label className="text-sm text-slate-300">
            Время ротации (сек):
            <input
              type="number"
              min={5}
              max={60}
              value={rotationTime}
              onChange={(e) => setRotationTime(Number(e.target.value))}
              className="input-field ml-2 inline-block w-20"
            />
          </label>
          <Tooltip text={FORMULA_TOOLTIPS.dps}>
            <span className="text-genshin-gold cursor-help">ⓘ</span>
          </Tooltip>
        </div>
        <p className="mb-4 text-2xl font-bold text-genshin-gold">
          {dpsPerRotation.toLocaleString()} DPS за {rotationTime} сек
        </p>
        <DpsBarChart data={chartData} />
      </PageSection>

      {/* Сравнение билдов */}
      <PageSection title="Сравнение билдов">
        <button
          type="button"
          className="btn-secondary mb-4"
          onClick={() => addComparisonBuild({ label: `Билд ${comparisonBuilds.length + 1}`, totalDps, members })}
        >
          Добавить для сравнения
        </button>

        {comparisonBuilds.length >= 2 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-slate-800/50 p-4">
              <h3 className="mb-3 font-semibold text-genshin-gold">Билд A</h3>
              <p className="text-2xl font-bold">{comparisonBuilds[0].totalDps.toLocaleString()} DPS</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {comparisonBuilds[0].members.map((m) => (
                  <li key={m.id}>{m.name}: {m.dps.totalDps.toLocaleString()}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-slate-800/50 p-4">
              <h3 className="mb-3 font-semibold text-genshin-gold">Билд B</h3>
              <p className="text-2xl font-bold">{comparisonBuilds[1].totalDps.toLocaleString()} DPS</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {comparisonBuilds[1].members.map((m) => (
                  <li key={m.id}>{m.name}: {m.dps.totalDps.toLocaleString()}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-400">
            Сохраните минимум 2 расчёта для сравнения (нажмите «Добавить для сравнения» дважды с разными билдами)
          </p>
        )}
      </PageSection>
    </div>
  );
}
