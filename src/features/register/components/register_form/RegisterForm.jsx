import styles from "./RegisterFrom.module.css"
import ActionButton from "../../../../common/action_button/ActionButton"
import { Link, useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const nav = useNavigate()
    
    return <div className={styles.authContent}>
    <div className={styles.authTitle}>Регистрация</div>
    <form className={styles.authForm}>
        <input placeholder="Имя" />
        <input placeholder="Возраст" />
        <input placeholder="Страна" />
        <input placeholder="Город" />
        <input placeholder="Пол" />
        <input placeholder="Логин" />
        <input placeholder="Пароль" />
        <ActionButton
            title={'Зарегистрироваться'}
            onClick={
                () => {
                    nav('/')
                }
            }
        />
    </form>
</div>
}

export default RegisterForm
