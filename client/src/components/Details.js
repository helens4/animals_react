import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 

function Details() {

    const navi = useNavigate()
    const [animal, setAnimal] = useState({}) 

    const { id } = useParams()


    useEffect(() => {

        axios.get('http://localhost:4000/animals/' + id)
        .then(response => setAnimal(response.data.data))
        .catch(err => console.log(err))
    
      }, [])
   

    return (
        <div>
            <h1>Szczegóły</h1>
            <h3>imię: {animal.name} </h3>
            <a href="#" onClick={() => navi('/')}>Powrót</a>
        </div>
    )
}

export default Details