import { useState } from "react"
import { createContext } from "react"
import LikesStorage from '../data/likes.data'

export const LikesContext = createContext();

const LikesProvider = ({children}) => {
    const [likes, setLikes] = useState(new LikesStorage().getAllLikes())

    return (
        <LikesContext.Provider value={{likes, setLikes}}>
            {children}
        </LikesContext.Provider>
    )
}

export default LikesProvider