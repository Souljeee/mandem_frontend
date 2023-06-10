import styles from "./InterestChip.module.css"

function InterestChip({interest}){
    return(
        <div className={styles.chipBackground}>
            <p>{interest.title}</p>
        </div>
    )
}

export default InterestChip