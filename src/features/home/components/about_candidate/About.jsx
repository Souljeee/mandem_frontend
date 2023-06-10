import styles from "./About.module.css"
import { interests } from "../interest_chip/chips.data"
import InterestChip from "../interest_chip/InterestChip"

function About() {
    return (
        <div className={styles.aboutMainContainer}>
            <div className={styles.chips}>
                {interests.map(interest => (
                    <div className={styles.chip}>
                        <InterestChip key={interest.id} interest={interest} />
                    </div>
                ))}
                 {/* <InterestChip key={interests[0].id} interest={interests[0]} />
                 <InterestChip key={interests[1].id} interest={interests[1]} /> */}
            </div>
            <div className={styles.textContainer}>
                <p>Я элегантная Мелисса и чувственная девушка, могу предложить приятное
                    времяпрепровождение для тебя, как твоя девушка. Вы не пожалеете о моей компании
                    , я полна очарования и готова поделиться всем, что заставит вас чувствовать себя прекрасно.
                    Не ждите, просто позвоните мне сейчас! Не пропустите ожидающее вас удовольствие!</p>
            </div>
        </div>
    )
}

export default About