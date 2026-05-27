/**
 * Mock-данные V2: полный ростер Luna VI + артефакты + mock-расчёт.
 */
export const ELEMENTS = ['Pyro', 'Hydro', 'Electro', 'Cryo', 'Anemo', 'Geo', 'Dendro'];
export const WEAPONS = ['Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'];
export const RARITIES = [4, 5];

export const REGIONS = [
  'Special',
  'Mondstadt',
  'Liyue',
  'Inazuma',
  'Sumeru',
  'Fontaine',
  'Natlan',
  'Nod-Krai',
  'Snezhnaya',
  'Celestia',
];

export const ELEMENT_COLORS = {
  Pyro: 'text-orange-400 bg-orange-400/20',
  Hydro: 'text-blue-400 bg-blue-400/20',
  Electro: 'text-purple-400 bg-purple-400/20',
  Cryo: 'text-cyan-300 bg-cyan-300/20',
  Anemo: 'text-teal-300 bg-teal-300/20',
  Geo: 'text-yellow-500 bg-yellow-500/20',
  Dendro: 'text-green-400 bg-green-400/20',
};

export const ARTIFACT_SETS = [
  { id: 'gladiator', name: "Gladiator's Finale", bonus2: 'ATK +18%', bonus4: 'Normal/Charged ATK +35% DMG' },
  { id: 'crimson', name: 'Crimson Witch of Flames', bonus2: 'Pyro DMG +15%', bonus4: 'Overload/Burning +40%, Vaporize/Melt +15%' },
  { id: 'emblem', name: 'Emblem of Severed Fate', bonus2: 'ER +20%', bonus4: 'Burst DMG +25% of ER (max 75%)' },
  { id: 'shimenawa', name: "Shimenawa's Reminiscence", bonus2: 'ATK +18%', bonus4: 'Normal/Charged/Plunge +50% (costs 15 Energy)' },
  { id: 'heart', name: 'Heart of Depth', bonus2: 'Hydro DMG +15%', bonus4: 'Normal/Charged ATK +30% for 15s' },
  { id: 'thunder', name: 'Thundering Fury', bonus2: 'Electro DMG +15%', bonus4: 'Skill CD -40% after reaction' },
];

export const MAIN_STATS = {
  flower: ['HP'],
  plume: ['ATK'],
  sands: ['HP%', 'ATK%', 'DEF%', 'EM', 'ER'],
  goblet: ['HP%', 'ATK%', 'DEF%', 'EM', 'Physical DMG', 'Elemental DMG'],
  circlet: ['HP%', 'ATK%', 'DEF%', 'EM', 'CRIT Rate', 'CRIT DMG', 'Healing Bonus'],
};

export const SUBSTAT_OPTIONS = ['ATK', 'ATK%', 'HP', 'HP%', 'DEF', 'DEF%', 'CRIT Rate', 'CRIT DMG', 'EM', 'ER'];

const DEFAULT_CONSTELLATIONS = (name) =>
  Array.from({ length: 7 }, (_, i) => `C${i}: ${name} — эффект созвездия (mock).`);

/** Компактное описание персонажа: id, EN, RU, регион, элемент, оружие, редкость, иконка */
const ROSTER = [
  ['traveler', 'Traveler', 'Путешественник (ГГ)', 'Special', 'Anemo', 'Sword', 5, '🌟'],
  ['aloy', 'Aloy', 'Элой', 'Special', 'Cryo', 'Bow', 5, '🏹'],
  ['skirk', 'Skirk', 'Скирк', 'Special', 'Cryo', 'Sword', 5, '❄️'],
  ['training-dummy', 'Training Dummy', 'Манекен', 'Special', 'Geo', 'Polearm', 4, '🎯'],
  ['albedo', 'Albedo', 'Альбедо', 'Mondstadt', 'Geo', 'Sword', 5, '🎨'],
  ['barbara', 'Barbara', 'Барбара', 'Mondstadt', 'Hydro', 'Catalyst', 4, '💧'],
  ['bennett', 'Bennett', 'Беннет', 'Mondstadt', 'Pyro', 'Sword', 4, '🔥'],
  ['venti', 'Venti', 'Венти', 'Mondstadt', 'Anemo', 'Bow', 5, '🍃'],
  ['jean', 'Jean', 'Джинн', 'Mondstadt', 'Anemo', 'Sword', 5, '🌪️'],
  ['diluc', 'Diluc', 'Дилюк', 'Mondstadt', 'Pyro', 'Claymore', 5, '🍷'],
  ['diona', 'Diona', 'Диона', 'Mondstadt', 'Cryo', 'Bow', 4, '🐱'],
  ['klee', 'Klee', 'Кли', 'Mondstadt', 'Pyro', 'Catalyst', 5, '💣'],
  ['kaeya', 'Kaeya', 'Кэйа', 'Mondstadt', 'Cryo', 'Sword', 4, '❄️'],
  ['lisa', 'Lisa', 'Лиза', 'Mondstadt', 'Electro', 'Catalyst', 4, '📚'],
  ['mika', 'Mika', 'Мика', 'Mondstadt', 'Cryo', 'Polearm', 4, '🛡️'],
  ['mona', 'Mona', 'Мона', 'Mondstadt', 'Hydro', 'Catalyst', 5, '🔮'],
  ['noelle', 'Noelle', 'Ноэлль', 'Mondstadt', 'Geo', 'Claymore', 4, '🛡️'],
  ['rosaria', 'Rosaria', 'Розария', 'Mondstadt', 'Cryo', 'Polearm', 4, '🌹'],
  ['razor', 'Razor', 'Рэйзор', 'Mondstadt', 'Electro', 'Claymore', 4, '⚡'],
  ['sucrose', 'Sucrose', 'Сахароза', 'Mondstadt', 'Anemo', 'Catalyst', 4, '🧪'],
  ['fischl', 'Fischl', 'Фишль', 'Mondstadt', 'Electro', 'Bow', 4, '🦅'],
  ['amber', 'Amber', 'Эмбер', 'Mondstadt', 'Pyro', 'Bow', 4, '🏹'],
  ['eula', 'Eula', 'Эола', 'Mondstadt', 'Cryo', 'Claymore', 5, '💃'],
  ['dalya', 'Dalya', 'Далия', 'Mondstadt', 'Hydro', 'Catalyst', 5, '🌊'],
  ['durin', 'Durin', 'Дурин', 'Mondstadt', 'Pyro', 'Sword', 5, '🐉'],
  ['varka', 'Varka', 'Варка', 'Mondstadt', 'Anemo', 'Claymore', 5, '🗡️'],
  ['prun', 'Prun', 'Прюн', 'Mondstadt', 'Hydro', 'Bow', 4, '🫐'],
  ['loen', 'Loen', 'Лоэн', 'Mondstadt', 'Dendro', 'Catalyst', 5, '🍃'],
  ['baizhu', 'Baizhu', 'Бай Чжу', 'Liyue', 'Dendro', 'Catalyst', 5, '🐍'],
  ['beidou', 'Beidou', 'Бэй Доу', 'Liyue', 'Electro', 'Claymore', 4, '⚓'],
  ['ganyu', 'Ganyu', 'Гань Юй', 'Liyue', 'Cryo', 'Bow', 5, '🦌'],
  ['yelan', 'Yelan', 'Е Лань', 'Liyue', 'Hydro', 'Bow', 5, '🃏'],
  ['keqing', 'Keqing', 'Кэ Цин', 'Liyue', 'Electro', 'Sword', 5, '⚡'],
  ['ningguang', 'Ningguang', 'Нин Гуан', 'Liyue', 'Geo', 'Catalyst', 4, '📜'],
  ['xingqiu', 'Xingqiu', 'Син Цю', 'Liyue', 'Hydro', 'Sword', 4, '📖'],
  ['xinyan', 'Xinyan', 'Синь Янь', 'Liyue', 'Pyro', 'Claymore', 4, '🎸'],
  ['xiangling', 'Xiangling', 'Сян Лин', 'Liyue', 'Pyro', 'Polearm', 4, '🍳'],
  ['xiao', 'Xiao', 'Сяо', 'Liyue', 'Anemo', 'Polearm', 5, '👹'],
  ['hu-tao', 'Hu Tao', 'Ху Тао', 'Liyue', 'Pyro', 'Polearm', 5, '🔥'],
  ['qiqi', 'Qiqi', 'Ци Ци', 'Liyue', 'Cryo', 'Sword', 5, '🧊'],
  ['zhongli', 'Zhongli', 'Чжун Ли', 'Liyue', 'Geo', 'Polearm', 5, '🪨'],
  ['chongyun', 'Chongyun', 'Чун Юнь', 'Liyue', 'Cryo', 'Claymore', 4, '🧊'],
  ['shenhe', 'Shenhe', 'Шэнь Хэ', 'Liyue', 'Cryo', 'Polearm', 5, '🕊️'],
  ['yun-jin', 'Yun Jin', 'Юнь Цзинь', 'Liyue', 'Geo', 'Polearm', 4, '🎭'],
  ['yanfei', 'Yanfei', 'Янь Фэй', 'Liyue', 'Pyro', 'Catalyst', 4, '📋'],
  ['yaoyao', 'Yaoyao', 'Яо Яо', 'Liyue', 'Dendro', 'Polearm', 4, '🥕'],
  ['xianyun', 'Xianyun', 'Сянъюнь', 'Liyue', 'Anemo', 'Catalyst', 5, '☁️'],
  ['ka-ming', 'Ka Ming', 'Ка Мин', 'Liyue', 'Pyro', 'Claymore', 5, '🦁'],
  ['lan-yan', 'Lan Yan', 'Лань Янь', 'Liyue', 'Anemo', 'Catalyst', 4, '🪁'],
  ['zi-bai', 'Zi Bai', 'Цзы Бай', 'Liyue', 'Electro', 'Sword', 5, '⚡'],
  ['ayaka', 'Ayaka', 'Аяка', 'Inazuma', 'Cryo', 'Sword', 5, '❄️'],
  ['ayato', 'Ayato', 'Аято', 'Inazuma', 'Hydro', 'Sword', 5, '🌊'],
  ['gorou', 'Gorou', 'Горо', 'Inazuma', 'Geo', 'Bow', 4, '🐕'],
  ['yae-miko', 'Yae Miko', 'Яэ Мико', 'Inazuma', 'Electro', 'Catalyst', 5, '🦊'],
  ['yoimiya', 'Yoimiya', 'Ёимия', 'Inazuma', 'Pyro', 'Bow', 5, '🎆'],
  ['kazuha', 'Kazuha', 'Кадзуха', 'Inazuma', 'Anemo', 'Sword', 5, '🍁'],
  ['kuki-shinobu', 'Kuki Shinobu', 'Синобу', 'Inazuma', 'Electro', 'Sword', 4, '🩹'],
  ['raiden', 'Raiden Shogun', 'Рaiden', 'Inazuma', 'Electro', 'Polearm', 5, '⚡'],
  ['sara', 'Sara', 'Сара', 'Inazuma', 'Electro', 'Bow', 4, '🏹'],
  ['sayu', 'Sayu', 'Sayu', 'Inazuma', 'Anemo', 'Claymore', 4, '🦝'],
  ['thoma', 'Thoma', 'Тома', 'Inazuma', 'Pyro', 'Polearm', 4, '🔥'],
  ['heizou', 'Heizou', 'Хэйдзо', 'Inazuma', 'Anemo', 'Catalyst', 4, '👊'],
  ['kirara', 'Kirara', 'Kirara', 'Inazuma', 'Dendro', 'Sword', 4, '📦'],
  ['kokomi', 'Kokomi', 'Kokomi', 'Inazuma', 'Hydro', 'Catalyst', 5, '🐚'],
  ['tighnari', 'Tighnari', 'Tighnari', 'Sumeru', 'Dendro', 'Bow', 5, '🌿'],
  ['collei', 'Collei', 'Collei', 'Sumeru', 'Dendro', 'Bow', 4, '🌱'],
  ['nilou', 'Nilou', 'Nilou', 'Sumeru', 'Hydro', 'Sword', 5, '💃'],
  ['candace', 'Candace', 'Candace', 'Sumeru', 'Hydro', 'Polearm', 4, '🛡️'],
  ['layla', 'Layla', 'Layla', 'Sumeru', 'Cryo', 'Sword', 4, '🌙'],
  ['nahida', 'Nahida', 'Nahida', 'Sumeru', 'Dendro', 'Catalyst', 5, '🌿'],
  ['wanderer', 'Wanderer', 'Странник', 'Sumeru', 'Anemo', 'Catalyst', 5, '🎭'],
  ['faruzan', 'Faruzan', 'Faruzan', 'Sumeru', 'Anemo', 'Bow', 4, '📐'],
  ['sethos', 'Sethos', 'Sethos', 'Sumeru', 'Electro', 'Bow', 4, '⚡'],
  ['lyney', 'Lyney', 'Lyney', 'Fontaine', 'Pyro', 'Bow', 5, '🎩'],
  ['lynette', 'Lynette', 'Lynette', 'Fontaine', 'Anemo', 'Sword', 4, '🐱'],
  ['freminet', 'Freminet', 'Freminet', 'Fontaine', 'Cryo', 'Claymore', 4, '🤿'],
  ['neuvillette', 'Neuvillette', 'Neuvillette', 'Fontaine', 'Hydro', 'Catalyst', 5, '🌊'],
  ['furina', 'Furina', 'Furina', 'Fontaine', 'Hydro', 'Sword', 5, '🎭'],
  ['charlotte', 'Charlotte', 'Charlotte', 'Fontaine', 'Cryo', 'Catalyst', 4, '📷'],
  ['navia', 'Navia', 'Navia', 'Fontaine', 'Geo', 'Claymore', 5, '💎'],
  ['chevreuse', 'Chevreuse', 'Chevreuse', 'Fontaine', 'Pyro', 'Polearm', 4, '🔫'],
  ['clorinde', 'Clorinde', 'Clorinde', 'Fontaine', 'Electro', 'Sword', 5, '⚔️'],
  ['sigewinne', 'Sigewinne', 'Sigewinne', 'Fontaine', 'Hydro', 'Bow', 5, '🫧'],
  ['emilie', 'Emilie', 'Emilie', 'Fontaine', 'Dendro', 'Polearm', 5, '🌸'],
  ['elegg', 'Elegg', 'Elegg', 'Fontaine', 'Electro', 'Catalyst', 4, '⚡'],
  ['mualani', 'Mualani', 'Mualani', 'Natlan', 'Hydro', 'Catalyst', 5, '🏄'],
  ['kachina', 'Kachina', 'Kachina', 'Natlan', 'Geo', 'Polearm', 4, '⛏️'],
  ['kinich', 'Kinich', 'Kinich', 'Natlan', 'Dendro', 'Claymore', 5, '🦎'],
  ['xilonen', 'Xilonen', 'Xilonen', 'Natlan', 'Geo', 'Sword', 5, '🐆'],
  ['ororon', 'Ororon', 'Ororon', 'Natlan', 'Electro', 'Bow', 4, '🦇'],
  ['chasca', 'Chasca', 'Chasca', 'Natlan', 'Anemo', 'Bow', 5, '🌬️'],
  ['mavuika', 'Mavuika', 'Mavuika', 'Natlan', 'Pyro', 'Claymore', 5, '🔥'],
  ['citlali', 'Citlali', 'Citlali', 'Natlan', 'Cryo', 'Catalyst', 5, '🌙'],
  ['iansan', 'Iansan', 'Iansan', 'Natlan', 'Electro', 'Polearm', 4, '🏃'],
  ['ineffa', 'Ineffa', 'Ineffa', 'Nod-Krai', 'Electro', 'Polearm', 5, '⚡'],
  ['lauma', 'Lauma', 'Lauma', 'Nod-Krai', 'Dendro', 'Catalyst', 5, '🌿'],
  ['ayno', 'Ayno', 'Ayno', 'Nod-Krai', 'Cryo', 'Sword', 5, '❄️'],
  ['flynn', 'Flynn', 'Flynn', 'Nod-Krai', 'Hydro', 'Bow', 4, '🌊'],
  ['nefer', 'Nefer', 'Nefer', 'Nod-Krai', 'Dendro', 'Catalyst', 5, '🐫'],
  ['yagoda', 'Yagoda', 'Yagoda', 'Nod-Krai', 'Hydro', 'Catalyst', 4, '💧'],
  ['columbina', 'Columbina', 'Columbina', 'Nod-Krai', 'Hydro', 'Catalyst', 5, '🎭'],
  ['illugi', 'Illugi', 'Illugi', 'Nod-Krai', 'Geo', 'Claymore', 5, '🪨'],
  ['linnea', 'Linnea', 'Linnea', 'Nod-Krai', 'Anemo', 'Bow', 4, '🍃'],
  ['tartaglia', 'Tartaglia', 'Tartaglia', 'Snezhnaya', 'Hydro', 'Bow', 5, '🐳'],
  ['arlecchino', 'Arlecchino', 'Arlecchino', 'Snezhnaya', 'Pyro', 'Polearm', 5, '🎭'],
  ['nicole', 'Nicole', 'Nicole', 'Celestia', 'Electro', 'Sword', 5, '✨'],
];

function buildCharacter([id, name, nameRu, region, element, weapon, rarity, icon]) {
  const atk = rarity === 5 ? 280 + (name.length * 8) : 185 + name.length;
  return {
    id,
    name,
    nameRu,
    region,
    element,
    weapon,
    rarity,
    icon,
    baseStats: { atk, hp: 9000 + atk * 10, def: 650 + name.length * 5, em: 0 },
    constellations: DEFAULT_CONSTELLATIONS(name),
    skills: { auto: atk * 12, skill: atk * 18, burst: atk * 45 },
  };
}

/** Полный ростер персонажей Luna VI */
export const CHARACTERS = ROSTER.map(buildCharacter);

export const DEFAULT_CHARACTER_CONFIG = {
  level: 90,
  atkBonus: 0,
  hp: 0,
  def: 0,
  em: 0,
  critRate: 5,
  critDmg: 50,
  energyRecharge: 100,
  constellation: 0,
  artifacts: {
    flower: { set: 'gladiator', mainStat: 'HP', substats: [{ stat: 'CRIT Rate', value: 0 }, { stat: 'CRIT DMG', value: 0 }, { stat: 'ATK%', value: 0 }, { stat: 'EM', value: 0 }] },
    plume: { set: 'gladiator', mainStat: 'ATK', substats: [{ stat: 'CRIT Rate', value: 0 }, { stat: 'CRIT DMG', value: 0 }, { stat: 'ATK%', value: 0 }, { stat: 'EM', value: 0 }] },
    sands: { set: 'emblem', mainStat: 'ATK%', substats: [{ stat: 'CRIT Rate', value: 0 }, { stat: 'CRIT DMG', value: 0 }, { stat: 'EM', value: 0 }, { stat: 'ER', value: 0 }] },
    goblet: { set: 'crimson', mainStat: 'Pyro DMG', substats: [{ stat: 'CRIT Rate', value: 0 }, { stat: 'CRIT DMG', value: 0 }, { stat: 'ATK%', value: 0 }, { stat: 'EM', value: 0 }] },
    circlet: { set: 'crimson', mainStat: 'CRIT DMG', substats: [{ stat: 'CRIT Rate', value: 0 }, { stat: 'ATK%', value: 0 }, { stat: 'EM', value: 0 }, { stat: 'ER', value: 0 }] },
  },
};

export const FORMULA_TOOLTIPS = {
  critRate: 'CRIT Rate ограничен 100%. Формула: avg = base × (1 + CR×CD)',
  critDmg: 'CRIT DMG — множитель критического урона (базово 50%)',
  energyRecharge: 'ER влияет на восстановление энергии для Burst',
  dps: 'DPS = сумма урона навыков за ротацию / время ротации',
  setBonus: '2pc и 4pc бонусы суммируются при 4 предметах одного сета',
};

export function getCharacterById(id) {
  return CHARACTERS.find((c) => c.id === id);
}

/** Поиск по EN/RU имени */
export function matchCharacterSearch(character, query) {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  return (
    character.name.toLowerCase().includes(q) ||
    character.nameRu.toLowerCase().includes(q)
  );
}

export function calculateMockDps(character, config) {
  const mult = 1 + config.constellation * 0.08 + (config.critRate / 100) * (config.critDmg / 100);
  const levelMult = 1 + (config.level - 1) * 0.01;
  const skills = character.skills;

  const calcSkill = (base) => ({
    normal: Math.round(base * levelMult * mult * 0.7),
    crit: Math.round(base * levelMult * mult * (1 + config.critDmg / 100)),
  });

  return {
    auto: calcSkill(skills.auto),
    skill: calcSkill(skills.skill),
    burst: calcSkill(skills.burst),
    totalDps: Math.round((skills.auto + skills.skill + skills.burst) * mult * levelMult / 3),
    constellationAffected: config.constellation >= 2,
  };
}
