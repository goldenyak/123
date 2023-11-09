import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';

export const useScoreStore = (): ScoreContext => useContext(ScoreContext);
