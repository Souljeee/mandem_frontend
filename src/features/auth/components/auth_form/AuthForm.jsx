import styles from "./AuthForm.module.css"
import ActionButton from "../../../../common/action_button/ActionButton"
import { Link, useNavigate } from 'react-router-dom'

const AuthForm = () => {
    const nav = useNavigate()

    return <div className={styles.authContent}>
        <div className={styles.authTitle}>Войти</div>
        <form className={styles.authForm}>
            <input placeholder="Логин" />
            <input placeholder="Пароль" />
            <ActionButton
                title={'Войти'}
                onClick={
                    () => {
                        nav('/')
                    }
                }
            />
        </form>
        <footer>
            <div>Нет аккаунта?</div>
            <Link to={'/register'} className={styles.register}>Зарегистрируйтесь прямо сейчас</Link>
        </footer>
    </div>
}

export default AuthForm