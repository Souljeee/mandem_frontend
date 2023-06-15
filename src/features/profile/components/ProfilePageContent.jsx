import styles from "./ProfilePageContent.module.css"

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
            </div>
        </div>
    </div>
}

export default ProfilePageContent