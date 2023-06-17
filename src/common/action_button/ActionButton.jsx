import styles from "./ActionButton.module.css"

function ActionButton({title, onClick}) {
    return (
        <div className={styles.buttonBackground}>
            <button className={styles.button} onClick={onClick}>
                <p className={styles.buttonText}>{title}</p>
            </button>
        </div>
    )
}

export default ActionButton