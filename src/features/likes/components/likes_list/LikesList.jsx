import styles from "./LikesList.module.css"
import ProfileList from "../profile_list/ProfileList"

const LikesList = () => {
    return <div>
        <div className={styles.pageTitle}>Понравившиеся</div>
        <ProfileList className={styles.profileLst}/>
    </div>
}

export default LikesList