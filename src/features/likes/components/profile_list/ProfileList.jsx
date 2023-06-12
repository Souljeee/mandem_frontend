import { Row, Col } from 'react-simple-flex-grid';
import styles from './ProfileList.module.css'
import "react-simple-flex-grid/lib/main.css";
import ProfileItem from "../profile_item/ProfileItem"

const ProfileList = () => {
    return <div className={styles.list}>
        <Row className={styles.row} gutter={10} justify={'start'}>
            {
                Array.apply(0, Array(10)).map(
                    element =>
                        <Col span={4}>
                            <ProfileItem key={element}/>
                        </Col>
                )
            }
        </Row>
    </div>
}

export default ProfileList