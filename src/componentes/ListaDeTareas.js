import React, { useState, useEffect } from 'react'
import '../hoja-de-estilos/ListaDeTareas.css'
import { TareaFormulario } from './TareaFormulario'
import { Tarea } from './Tarea'

export const ListaDeTareas = () => {

    // Recuperar las tareas almacenadas en localStorage al cargar la página
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const [tareas, setTareas] = useState(tareasGuardadas);

    // Almacenar las tareas en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = tarea => {

        if ( tarea.texto.trim() ) {

            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];

            setTareas(tareasActualizadas);
        };

    };

    const eliminarTarea = id => {

        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id );

        setTareas(tareasActualizadas);

    };

    const completarTarea = id => {

        const tareasActualizadas = tareas.map( tarea => {

            if ( tarea.id === id) {
                tarea.completada = !tarea.completada;
            };

            return tarea;

        } );

        setTareas(tareasActualizadas);

    };

  return (
    <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
            {
                tareas.map( (tarea) => 
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto} 
                        completada={tarea.completada} 
                        eliminarTarea={eliminarTarea} 
                        completarTarea={completarTarea} />
                )
            }

        </div>
    </>
  )
}