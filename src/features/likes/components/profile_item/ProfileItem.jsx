import styles from "./ProfileItem.module.css"

const ProfileItem = ({likedProfile, onClick}) => {
    return <div className={styles.profileCard} onClick={onClick}>
        <img className={styles.photo} src={likedProfile.avatarPath} />
        <div className={styles.info}>{likedProfile.name}, {likedProfile.age} лет, {likedProfile.city}</div>
    </div>
}

export default ProfileItem