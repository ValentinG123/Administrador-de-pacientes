import React, { Fragment, useState } from 'react'
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    //Crear state de Citas
    const [cita, setCita] = useState({
        mascota:'',
        dueño:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //

    const [error, setError] = useState(false)
    // FUncion que se ejecuta con input

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })

    }
    // Extraer los valores
    const {mascota, dueño, fecha, hora,sintomas} = cita;

    // cuando el usuario envia

    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(mascota.trim() === '' || dueño.trim() === '' || 
            fecha.trim() === '' || hora.trim() === '' ||
            sintomas.trim() === ''){
                setError(true)
            return;
        }

        // Eliminar msj Erorr

        setError(false);

        // Asignar ID
        cita.id = uuid();
        console.log(cita)
        //Crear la cita

        crearCita(cita)
        // Reiniciar form

        setCita({
            mascota:'',
            dueño:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    return (
        <Fragment>
            <h2>Crear cita</h2>
            { error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type= "text"
                    name= "mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}

                />
                     <label>Nombre Dueño</label>
                <input
                    type= "text"
                    name= "dueño"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={dueño}



                />
                        <label>Fecha</label>
                <input
                    type= "date"
                    name= "fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}


                />
                          <label>Hora</label>
                <input
                    type= "time"
                    name= "hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}



                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name='sintomas'
                    onChange={handleChange}
                    value={sintomas}

                   
                ></textarea>
                <button
                    type='submit'
                    className="u-full-width button-primary"


                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario
