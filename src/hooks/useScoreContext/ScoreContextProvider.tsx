import { ScoreContext } from "./scoreContext"
import { useProviderScoreContext } from "./useProviderScoreContext"

interface ScoreContextProvider{
    children:React.ReactNode
}

export const ScoreContextProvider=({children}:ScoreContextProvider)=>{
    const context=useProviderScoreContext();
    return (<ScoreContext.Provider value={context}>{children}</ScoreContext.Provider>)
}