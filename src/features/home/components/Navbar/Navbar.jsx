import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.item}>
                <nav>
                    <Link id={styles.likesButton} to="/likes">Лайки</Link>
                    <Link id={styles.homeButton} to="/">Mandem</Link>
                    <Link id={styles.profileButton} to="/profile">Профиль</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar