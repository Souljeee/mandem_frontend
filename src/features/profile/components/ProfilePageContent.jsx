import styles from "./ProfilePageContent.module.css"
import InterestChip from "../../home/components/interest_chip/InterestChip"
import { useNavigate } from "react-router-dom"

const ProfilePageContent = ({ profileInfo }) => {
    const nav = useNavigate()

    let userJson = localStorage.getItem('currentUser')

    let userSaved = JSON.parse(userJson)

    const handleEditButtonClick = (e) => {
        e.preventDefault()

        nav('/editProfile')
    }

    return <div className={styles.contentContainer}>
        <div className={styles.mainInfoContainer}>
            <div className={styles.photoContainer}>
                <img className={styles.photo} src={profileInfo.avatarPath} />
            </div>
            <div className={styles.nameAndEdit}>
                <div className={styles.name}>{userSaved.name}</div>
                <button className={styles.editButton} onClick={(e) => handleEditButtonClick(e)}>Редактировать</button>
            </div>
            <div className={styles.ageAndSex}>
                <div className={styles.age}>Возраст: {userSaved.age} лет</div>
                <div className={styles.sex}>Пол: {userSaved.sex}</div>
            </div>
            <div className={styles.locaton}>Нахожусь: {userSaved.city}, {userSaved.country}</div>
            <div className={styles.phoneNumber}>Телефон: {userSaved.phone}</div>
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
                <div className={styles.aboutContent}>{userSaved.about}</div>
            </div>
        </div>
    </div>
}

export default ProfilePageContent