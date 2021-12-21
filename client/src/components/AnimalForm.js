
import {useState} from 'react'
import style from './AnimalForm.module.css'

function AnimalForm({ addAnimal }) {

    const [type, setType] = useState("")
    const [age, setAge] = useState(0)
    const [color, setColor] = useState("")
    const [name, setName] = useState("")

    return (
        <div className={style.All}>
            <form className={style.Form} onSubmit={(e) => addAnimal(e, type, age, color, name)}>
                <div className={style.Item}>
                <label htmlFor="type" className={style.Label}>typ</label>
                <input 
                    id="type"
                    type="text" 
                    value={type} 
                    onChange={e => setType(e.target.value)} 
                />
                </div>
                <div className={style.Item}>
                <label htmlFor="age" className={style.Label}>wiek</label>
                <input 
                    id="age"
                    type="text" 
                    value={age} 
                    onChange={e => setAge(e.target.value)} 
                /> 
                </div>
                <div className={style.Item}>
                <label htmlFor="color" className={style.Label}>kolor</label>
                <input
                    id="color"
                    type="text" 
                    value={color} 
                    onChange={e => setColor(e.target.value)} 
                />
                </div>
                <div className={style.Item}>
                <label htmlFor="name" className={style.Label}>imię</label>
                <input
                    id="name"
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                /> 
                </div>
                <input type="submit" value="dodaj" />
            </form>
        </div>
    )
}

export default AnimalForm