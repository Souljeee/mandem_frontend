import styles from "./AuthForm.module.css"
import ActionButton from "../../../../common/action_button/ActionButton"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"

const AuthForm = () => {
    const nav = useNavigate()

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    return <div className={styles.authContent}>
        <div className={styles.authTitle}>Войти</div>
        <form className={styles.authForm}>
            <input
                placeholder="Логин"
                onChange={e => setLogin(e.target.value)}
                value={login}
            />
            <input
                placeholder="Пароль"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <ActionButton
                title={'Войти'}
                onClick={
                    (e) => {
                        e.preventDefault()

                        let usersJson = localStorage.getItem('users')

                        let usersSaved = []

                        usersSaved = JSON.parse(usersJson)

                        let currentUser = usersSaved.find(e => e.login === login && e.password);
                
                        if(currentUser != undefined){
                            localStorage.setItem('currentUser', JSON.stringify(currentUser))
                            nav('/')
                        } else {
                            alert("Неверный логин или пароль")
                        }
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