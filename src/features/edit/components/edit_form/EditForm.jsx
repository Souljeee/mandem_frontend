import { useState } from "react"
import styles from "./EditForm.module.css"
import ActionButton from "../../../../common/action_button/ActionButton"
import { useNavigate } from "react-router-dom"

const EditForm = () => {
    const nav = useNavigate()

    let currentUserJSON = localStorage.getItem('currentUser')
    let currentUser = JSON.parse(currentUserJSON)

    console.log(currentUser)

    const [name, setName] = useState(currentUser.name)
    const [age, setAge] = useState(currentUser.age)
    const [country, setCountry] = useState(currentUser.country)
    const [city, setCity] = useState(currentUser.city)
    const [sex, setSex] = useState(currentUser.sex)
    const [phone, setPhone] = useState(currentUser.phone != undefined ? currentUser.phone : undefined)
    const [about, setAbout] = useState(currentUser.about != undefined ? currentUser.about : undefined)

    return <div>
        <form className={styles.authForm}>
            <div className={styles.generalInfo}>
                <input
                    className={styles.name}
                    placeholder="Имя"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <input
                    className={styles.age}
                    placeholder="Возраст"
                    onChange={e => setAge(e.target.value)}
                    value={age}
                />
                <input
                    className={styles.sex}
                    placeholder="Пол"
                    onChange={e => setSex(e.target.value)}
                    value={sex}
                />
            </div>
            <div className={styles.geo}>
                <input
                    className={styles.country}
                    placeholder="Страна"
                    onChange={e => setCountry(e.target.value)}
                    value={country}
                />
                <input
                    className={styles.city}
                    placeholder="Город"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                />
            </div>
            <input
                placeholder="Номер телефона"
                onChange={e => setPhone(e.target.value)}
                value={phone}
            />
            <input
                placeholder="О себе"
                onChange={e => setAbout(e.target.value)}
                value={about}
                maxLength={5000}
                multiple={true}
                height={150}
            />
            <ActionButton
                className={styles.save}
                title={'Сохранить'}
                onClick={(e) => {
                    e.preventDefault()

                    let newUserObject = {
                        name: name,
                        age: age,
                        country: country,
                        city: city,
                        sex: sex,
                        phone: phone,
                        about: about,
                        login: currentUser.login,
                        password: currentUser.password,
                    }

                    let newUserJSON = JSON.stringify(newUserObject)

                    localStorage.setItem('currentUser', newUserJSON)

                    nav('/profiles')
                }}
            />
        </ form>
    </div>
}

export default EditForm