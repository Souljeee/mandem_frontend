import styles from "./TextButtom.module.css"

function TextButton({ title, onClick }) {
    return (
        <div className={styles.buttonBackground}>
            <button className={styles.button} onClick={onClick}>
                <p className={styles.buttonText}>{title}</p>
            </button>
        </div>
    )
}

export default TextButton