import styles from "./ProfileItem.module.css"

const ProfileItem = () => {
    return <div className={styles.profileCard}>
        <img className={styles.photo} src='/women.avif' />
        <div className={styles.info}>Екатерина, 20 лет, Краснодар</div>
    </div>
}

export default ProfileItem