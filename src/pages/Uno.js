import React from 'react'
import Link from 'next/link'
import { useSelector , useDispatch } from 'react-redux'
import { addPuntos, aumentarPuntaje, guardarMiNombre, restaPuntos } from '@/redux/misSlice';




const Uno = () => {

    const dispatch = useDispatch();

    const miNombreAhora = useSelector(state => state.unValor.miNombre)
    const valorInicial = useSelector(state => state.counter.counterP)
    
    const modificarNombre = ()=>{
        dispatch(guardarMiNombre("Martin Setaro"))
    }

    const aumentar = ()=>{
        dispatch(addPuntos())
    }
    const restar = ()=>{
      dispatch(restaPuntos())
    }

  return (
    <div>
      <h2>Uno</h2>
      <h2>{miNombreAhora}</h2>
   <div>
      <p>Su puntaje es : {valorInicial}</p>
      <div>
          <button
            onClick={aumentar} className='bg-blue-400 p-2 border border-1'>+</button>
          <button
            onClick={restar} className='bg-blue-400 p-2 border border-1'>-</button>
      </div>
    </div> 


      <button
      className='bg-blue-400 p-2 border border-1'
      onClick={modificarNombre}
      >Modificar mi nombre</button>

      <Link href="/Dos"><button  className='bg-orange-400 p-2 border border-1'>Ir al dos</button></Link>
    </div>
  )
}

export default Uno
