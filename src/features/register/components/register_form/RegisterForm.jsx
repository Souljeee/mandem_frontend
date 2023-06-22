import styles from "./RegisterFrom.module.css"
import ActionButton from "../../../../common/action_button/ActionButton"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"

const RegisterForm = () => {
    const { user, setUser } = useContext(UserContext)

    const nav = useNavigate()

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [sex, setSex] = useState()
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const createUser = e => {
        e.preventDefault()

        setUser(
            {
                name: name,
                age: age,
                country: country,
                city: city,
                sex: sex,
                login: login,
                password: password,
            }
        )

        if (user != null) {
            nav('/auth')
        }
    }

    return <div className={styles.authContent}>
        <div className={styles.authTitle}>Регистрация</div>
        <form className={styles.authForm}>
            <input
                placeholder="Имя"
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <input
                placeholder="Возраст"
                onChange={e => setAge(e.target.value)}
                value={age}
            />
            <input
                placeholder="Страна"
                onChange={e => setCountry(e.target.value)}
                value={country}
            />
            <input
                placeholder="Город"
                onChange={e => setCity(e.target.value)}
                value={city}
            />
            <input
                placeholder="Пол"
                onChange={e => setSex(e.target.value)}
                value={sex}
            />
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
                title={'Зарегистрироваться'}
                onClick={
                    (e) => createUser(e)
                }
            />
        </form>
    </div>
}

export default RegisterForm
