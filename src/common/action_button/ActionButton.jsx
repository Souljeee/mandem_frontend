import styles from "./ActionButton.module.css"

function ActionButton({title}) {
    return (
        <div className={styles.buttonBackground}>
            <button className={styles.button} onClick={print('CLICKED')}>
                <p className={styles.buttonText}>{title}</p>
            </button>
        </div>
    )
}

export default ActionButton