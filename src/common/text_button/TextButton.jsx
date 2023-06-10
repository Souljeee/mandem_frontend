import styles from "./TextButtom.module.css"

function TextButton({ title }) {
    return (
        <div className={styles.buttonBackground}>
            <button className={styles.button} onClick={print('CLICKED')}>
                <p>{title}</p>
            </button>
        </div>
    )
}

export default TextButton