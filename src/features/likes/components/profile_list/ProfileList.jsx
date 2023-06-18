import { Row, Col } from 'react-simple-flex-grid';
import styles from './ProfileList.module.css'
import "react-simple-flex-grid/lib/main.css";
import ProfileItem from "../profile_item/ProfileItem"
import { LikesContext } from '../../providers/LikesProvider';
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';

const ProfileList = () => {
    const { likes, setLikes } = useContext(LikesContext)
    const nav = useNavigate()

    return <div className={styles.list}>
        <Row className={styles.row} gutter={10} justify={'start'}>
            {
                likes.map(
                    likedProfile =>
                        <Col span={4}>
                            <ProfileItem 
                            key={likedProfile.id} 
                            likedProfile={likedProfile} 
                            onClick={() => nav('/profile/' + likedProfile.id)}
                            />
                        </Col>
                )
            }
        </Row>
    </div>
}

export default ProfileList