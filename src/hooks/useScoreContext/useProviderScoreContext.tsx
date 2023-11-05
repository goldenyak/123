'use client'
import { useState } from "react";
import { ScoreContext } from "./ScoreContext";

export function useProviderScoreContext():ScoreContext {
    const [totalScore,setTotalScore] = useState(0);
    const addScore = (score:number) => {setTotalScore((oldState) => oldState+score)}

    return {
        totalScore,
        addScore
    }
}