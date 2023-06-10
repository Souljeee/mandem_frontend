import TextButton from "../../../../common/text_button/TextButton"
import styles from "./ChoisingButtons.module.css"

function ChoisingButtons(){
    return (
        <div className={styles.backgroundColor}>
            <TextButton title={"Далее"}/>
        </div>
    )
}

export default ChoisingButtons