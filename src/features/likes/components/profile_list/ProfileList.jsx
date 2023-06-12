import { Row, Col } from 'react-simple-flex-grid';
import styles from './ProfileList.module.css'
import "react-simple-flex-grid/lib/main.css";

const ProfileList = () => {
    return <div className={styles.list}>
        <Row gutter={10} justify={'start'}>
            <Col span={4}>
                <div className={styles.banana}>Test</div>
            </Col>
            <Col span={4}>
                <div className={styles.banana}>Test</div>
            </Col>
            <Col span={4}>
                <div className={styles.banana}>Test</div>
            </Col>
        </Row>
    </div>
}

export default ProfileList