import TextButton from "../../../../common/text_button/TextButton"
import ActionButton from "../../../../common/action_button/ActionButton"
import styles from "./ChoisingButtons.module.css"
import { useContext } from "react"
import { HomeContext } from "../../provider/HomeProvider"
import { candidates, getCurrentIndex, incrementCurrentIndex } from "../../data/cadidate.data"

function ChoisingButtons() {
    const { candidate, setCandidate } = useContext(HomeContext)

    return (
        <div className={styles.backgroundColor}>
            <div className={styles.nextButton}>
                <TextButton
                    title={"Далее"}
                    onClick={
                        () => {
                            incrementCurrentIndex()
                            setCandidate(candidates[getCurrentIndex()])
                        }
                    }
                />
            </div>
            <div className={styles.likeButton}>
                <ActionButton
                    title={"Лайк"}
                    onClick={
                        () => {
                            incrementCurrentIndex()
                            setCandidate(candidates[getCurrentIndex()])
                        }
                    }
                />
            </div>
        </div>
    )
}

export default ChoisingButtons