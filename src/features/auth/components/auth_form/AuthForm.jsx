import styles from "./AuthForm.module.css"
import ActionButton from "../../../../common/action_button/ActionButton"
import { Link } from 'react-router-dom'

const AuthForm = () => {
    return <div className={styles.authContent}>
        <div className={styles.authTitle}>Войти</div>
        <form className={styles.authForm}>
            <input placeholder="Логин" />
            <input placeholder="Пароль" />
            <ActionButton title={'Войти'} />
        </form>
        <footer>
            <div>Нет аккаунта?</div>
            <Link to={'/profiles'} className={styles.register}>Зарегистрируйтесь прямо сейчас</Link>
        </footer>
    </div>
}

export default AuthForm