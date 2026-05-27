/**
 * Корневой компонент: маршрутизация + глобальное состояние (Context).
 * Хранит сохранённых персонажей, команду и последние результаты расчёта.
 */
import { createContext, useContext, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import {
  CharacterSettingsPage,
  CharactersPage,
  HomePage,
  ResultsPage,
  TeamPage,
} from './pages';

const AppContext = createContext(null);

/** Хук для доступа к глобальному store из любой страницы */
export function useAppStore() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppStore must be used within AppProvider');
  return ctx;
}

function AppProvider({ children }) {
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [team, setTeam] = useState([null, null, null, null]);
  const [lastResults, setLastResults] = useState(null);
  const [comparisonBuilds, setComparisonBuilds] = useState([]);

  const value = useMemo(
    () => ({
      savedCharacters,
      team,
      lastResults,
      comparisonBuilds,

      /** Сохранить или обновить конфиг персонажа */
      saveCharacter: (entry) => {
        setSavedCharacters((prev) => {
          const idx = prev.findIndex((s) => s.characterId === entry.characterId);
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = entry;
            return next;
          }
          return [...prev, entry];
        });
      },

      setTeamSlot: (index, savedEntry) => {
        setTeam((prev) => {
          const next = [...prev];
          next[index] = savedEntry;
          return next;
        });
      },

      clearTeamSlot: (index) => {
        setTeam((prev) => {
          const next = [...prev];
          next[index] = null;
          return next;
        });
      },

      setLastResults,
      addComparisonBuild: (build) => setComparisonBuilds((prev) => [...prev, build]),
    }),
    [savedCharacters, team, lastResults, comparisonBuilds]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <main className="min-h-[calc(100vh-57px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/character/:id" element={<CharacterSettingsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </AppProvider>
    </BrowserRouter>
  );
}
