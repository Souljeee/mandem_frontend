import TextButton from "../../../../common/text_button/TextButton"
import ActionButton from "../../../../common/action_button/ActionButton"
import styles from "./ChoisingButtons.module.css"
import { useContext } from "react"
import { HomeContext } from "../../provider/HomeProvider"
import { candidates, getCurrentIndex, incrementCurrentIndex } from "../../data/cadidate.data"
import { LikesContext } from '../../../likes/providers/LikesProvider';
import LikesStorage from '../../../likes/data/likes.data'

function ChoisingButtons() {
    const { candidate, setCandidate } = useContext(HomeContext)
    const { likes, setLikes } = useContext(LikesContext)

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
                            let currentCandidate = candidates[getCurrentIndex()]
                            new LikesStorage().addLikes(currentCandidate)
                            incrementCurrentIndex()
                            setCandidate(currentCandidate)
                        }
                    }
                />
            </div>
        </div>
    )
}

export default ChoisingButtons