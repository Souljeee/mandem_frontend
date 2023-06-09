import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.aboutMainContainer}>
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