import TextButton from "../../../../common/text_button/TextButton"
import ActionButton from "../../../../common/action_button/ActionButton"
import styles from "./ChoisingButtons.module.css"

function ChoisingButtons(){
    return (
        <div className={styles.backgroundColor}>
            <div className={styles.nextButton}><TextButton title={"Далее"}/></div>
            <div className={styles.likeButton}><ActionButton title={"Лайк"}/></div>
        </div>
    )
}

export default ChoisingButtons