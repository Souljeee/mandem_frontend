import styles from "./CandidateInfo.module.css"
import { useContext } from "react"
import { HomeContext } from "../../provider/HomeProvider"

function CandidateInfo() {
    const {candidate, setCandidate} = useContext(HomeContext)

    return (
        <div className={styles.allInfo}>
            <img className={styles.photo} src={candidate.avatarPath} />
            <p className={styles.shortInfo}>{candidate.name}, {candidate.age} лет, {candidate.city}</p>
        </div>
    )
}

export default CandidateInfo