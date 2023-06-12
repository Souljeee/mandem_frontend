import styles from "./TextButtom.module.css"

function TextButton({ title }) {
    return (
        <div className={styles.buttonBackground}>
            <button className={styles.button} onClick={() => console.log('CLICKED')}>
                <p className={styles.buttonText}>{title}</p>
            </button>
        </div>
    )
}

export default TextButton