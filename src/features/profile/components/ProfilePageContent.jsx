import styles from "./ProfilePageContent.module.css"
import InterestChip from "../../home/components/interest_chip/InterestChip"
import { useNavigate } from "react-router-dom"

const ProfilePageContent = ({ profileInfo }) => {
    const nav = useNavigate()

    let currentUserJSON = localStorage.getItem('currentUser')

    let currentUser = JSON.parse(currentUserJSON)

    const handleEditButtonClick = (e) => {
        e.preventDefault()

        nav('/editProfile')
    }

    const handleExitButtonClick = (e) => {
        e.preventDefault()

        nav('/auth')
    }

    return <div className={styles.contentContainer}>
        <div className={styles.mainInfoContainer}>
            <div className={styles.photoContainer}>
                <img className={styles.photo} src={profileInfo.avatarPath} />
            </div>
            <div className={styles.nameAndEdit}>
                <div className={styles.name}>{profileInfo.name}</div>
                {
                    currentUser.name === profileInfo.name ? 
                    <div className={styles.profileButtons}>
                        <button className={styles.editButton} onClick={(e) => handleEditButtonClick(e)}>Редактировать</button>
                        <button className={styles.exitButton} onClick={(e) => handleExitButtonClick(e)}>Выйти</button>
                    </div> : <div></div>
            
                }
            </div>
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