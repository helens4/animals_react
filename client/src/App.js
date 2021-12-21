import {useEffect, useState} from 'react'
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';
import Header from './components/Header';
import axios from 'axios'
import style from './App.module.css'


function App() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {

    axios.get('http://localhost:4000/animals')
    .then(response => setAnimals(response.data))
    .catch(err => console.log(err))

  }, [])


  function addAnimal(e, type, age, color, name) {
    e.preventDefault()
    const newAnimal = {
      type,
      age,
      color,
      name
    }
    //console.log(newAnimal)
    axios.post('http://localhost:4000/animals', newAnimal)
    .then(response => setAnimals([...animals, response.data]))
    .catch(err => console.log(err))
  }


  return (
      <div className={style.App}>
        <Header name="Nasze ZOO" />
        <AnimalForm addAnimal={addAnimal} />
        <AnimalList animals={animals} />
      </div>
  );
}

export default App;
