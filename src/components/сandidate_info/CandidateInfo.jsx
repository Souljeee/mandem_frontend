import styles from "./CandidateInfo.module.css"

function CandidateInfo() {
    return (
        <div className={styles.allInfo}>
            <img className={styles.photo} src='/women.avif' />
            <p className={styles.shortInfo}>Екатерина, 20 лет, краснодар</p>
        </div>
    )
}

export default CandidateInfo