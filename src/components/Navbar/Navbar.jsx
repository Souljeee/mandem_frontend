import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.item}>
                <nav>
                    <a id={styles.likesButton} href="/likes">Лайки</a>
                    <a id={styles.homeButton} href="/">Mandem</a>
                    <a id={styles.profileButton} href="/profile">Профиль</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar