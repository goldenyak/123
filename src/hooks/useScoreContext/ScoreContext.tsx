import { Context, createContext } from "react"

export interface ScoreContext {
  totalScore: number,
  addScore: (score: number) => void
}

export const ScoreContext: Context<ScoreContext> =
  createContext<ScoreContext>({
    totalScore: 0,
    addScore: () => { }
  })