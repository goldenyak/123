'use client';
import { ScoreContext } from './ScoreContext';
import { useProviderScoreContext } from './useProviderScoreContext';

interface ScoreContextProvider {
  children: React.ReactNode;
}

export const ScoreContextProvider = ({ children }: ScoreContextProvider) => {
  const context = useProviderScoreContext();
  return (
    <ScoreContext.Provider value={context}>{children}</ScoreContext.Provider>
  );
};
