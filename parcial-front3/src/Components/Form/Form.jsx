import React, {useState} from 'react'
import  Card from  '../Card/Card'
import './Form.css'

const Form = () => {

    const [mascota, setMascota] = useState({
        nombre: '',
        raza: '',
        edad: ''
    });

    const [error, setError] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const handleChange = (e, prop) => {
        setMascota({...mascota, [prop]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombreIsValid = mascota.nombre.length > 2 && (mascota.nombre === mascota.nombre.trim());
        const razaIsValid = mascota.raza.length > 5;

        if(!nombreIsValid || !razaIsValid){
            setError(true)
            return;
        }

        setIsLogged(true)
        setError(false)
        
    }


  return (
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' name='nombre' placeholder='Nombre Mascota' onChange={(e) => handleChange(e, 'nombre')}></input>
            <input type='text' name='raza'  placeholder='Raza Mascota' onChange={(e) => handleChange(e, 'raza')}></input>
            <input type='text' name='edad' placeholder='Edad Mascota'  onChange={(e) => handleChange(e, 'edad')}></input>
            <button>Submit</button>
            {
            error && <span style={{color: 'red'}}>Por favor chequea que la información sea correcta</span>
            }
        </form>
        {
            isLogged && <Card mascota={mascota}></Card>
        }
    </div>
    
  )
}

export default Form;
