import styles from "./About.module.css"
import InterestChip from "../interest_chip/InterestChip"
import { useContext } from "react"
import { HomeContext } from "../../provider/HomeProvider"

function About() {
    const {candidate, setCandidate} = useContext(HomeContext)
    
    return (
        <div className={styles.aboutMainContainer}>
            <div className={styles.chips}>
                {candidate.interests.map(interest => (
                    <div className={styles.chip}>
                        <InterestChip key={interest.id} interest={interest} />
                    </div>
                ))}
            </div>
            <div className={styles.textContainer}>
                <p>{candidate.about}</p>
            </div>
        </div>
    )
}

export default About