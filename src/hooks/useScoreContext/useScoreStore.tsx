import { useContext } from "react";
import { ScoreContext } from "./scoreContext";

export const useDocumentEditor = (): ScoreContext => useContext(ScoreContext);
