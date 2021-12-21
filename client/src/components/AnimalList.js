import style from './AnimalList.module.css'
import { useNavigate } from 'react-router-dom'

function AnimalList({ animals }) {

    const navi = useNavigate()

    const renderAnimal = animals.map(animal => {
        return (
            <tr key={animal.id}>
                <td className={style.Cell}>{animal.type}</td> 
                <td className={style.Cell}>{animal.age}</td>
                <td className={style.Cell}> {animal.color}</td>
                <td className={style.Cell}>{animal.name}</td> 
                <td className={style.Cell}><button onClick={() => navi('/animal/' + animal.id)}>Więcej</button></td> 
            </tr>
        )
    })

    return (
        <div className={style.List}>
            Lista zwierząt: 
            <table border="1" className={style.Table}>
                <thead>
                    <th>Typ</th>
                    <th>Wiek</th>
                    <th>Kolor</th>
                    <th>Imię</th>
                </thead>
            {renderAnimal}
            </table>
        </div>
    )
}

export default AnimalList