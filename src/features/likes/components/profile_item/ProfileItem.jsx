import styles from "./ProfileItem.module.css"

const ProfileItem = ({likedProfile}) => {
    return <div className={styles.profileCard}>
        <img className={styles.photo} src={candidate.avatarPath} />
        <div className={styles.info}>{likedProfile.name}, {likedProfile.age} лет, {likedProfile.city}</div>
    </div>
}

export default ProfileItem