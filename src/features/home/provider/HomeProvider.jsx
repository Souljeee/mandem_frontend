import { useState } from "react"
import {candidates, getCurrentIndex} from "../data/cadidate.data"
import { createContext } from "react"

export const HomeContext = createContext();

const HomeProvider = ({children}) => {
    const [candidate, setCandidate] = useState(candidates[getCurrentIndex()])

    return (
        <HomeContext.Provider value={{candidate, setCandidate}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider