import styles from "./ProfilePageContent.module.css"
import { interests } from "../../home/components/interest_chip/chips.data"
import InterestChip from "../../home/components/interest_chip/InterestChip"

const ProfilePageContent = () => {
    return <div className={styles.contentContainer}>
        <div className={styles.mainInfoContainer}>
            <div className={styles.photoContainer}>
                <img className={styles.photo} src='/women.avif' />
            </div>
            <div className={styles.name}>Виктория Петрова</div>
            <div className={styles.ageAndSex}>
                <div className={styles.age}>Возраст: 20 лет</div>
                <div className={styles.sex}>Пол: Женский</div>
            </div>
            <div className={styles.locaton}>Нахожусь: Краснодар, Россия</div>
            <div className={styles.phoneNumber}>Телефон: +79267568745</div>
            <div className={styles.interestsContainer}>
                <div className={styles.interestsTitle}>Интересы:</div>
                <div className={styles.chipContainer}>
                {interests.map(interest => (
                    <div className={styles.chip}>
                        <InterestChip key={interest.id} interest={interest} />
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutTitle}>О себе:</div>
                <div className={styles.aboutContent}>Я элегантная Мелисса и чувственная девушка, могу предложить приятное
                    времяпрепровождение для тебя, как твоя девушка. Вы не пожалеете о моей компании
                    , я полна очарования и готова поделиться всем, что заставит вас чувствовать себя прекрасно.
                    Не ждите, просто позвоните мне сейчас! Не пропустите ожидающее вас удовольствие!</div>
            </div>
        </div>
    </div>
}

export default ProfilePageContent