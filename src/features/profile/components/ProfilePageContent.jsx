import styles from "./ProfilePageContent.module.css"
import InterestChip from "../../home/components/interest_chip/InterestChip"

const ProfilePageContent = ({profileInfo}) => {
    return <div className={styles.contentContainer}>
        <div className={styles.mainInfoContainer}>
            <div className={styles.photoContainer}>
                <img className={styles.photo} src={profileInfo.avatarPath} />
            </div>
            <div className={styles.name}>{profileInfo.name} {profileInfo.surname}</div>
            <div className={styles.ageAndSex}>
                <div className={styles.age}>Возраст: {profileInfo.age} лет</div>
                <div className={styles.sex}>Пол: {profileInfo.sex}</div>
            </div>
            <div className={styles.locaton}>Нахожусь: {profileInfo.city}, {profileInfo.country}</div>
            <div className={styles.phoneNumber}>Телефон: {profileInfo.phone}</div>
            <div className={styles.interestsContainer}>
                <div className={styles.interestsTitle}>Интересы:</div>
                <div className={styles.chipContainer}>
                {profileInfo.interests.map(interest => (
                    <div className={styles.chip}>
                        <InterestChip key={interest.id} interest={interest} />
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutTitle}>О себе:</div>
                <div className={styles.aboutContent}>{profileInfo.about}</div>
            </div>
        </div>
    </div>
}

export default ProfilePageContent