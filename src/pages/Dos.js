import React from 'react'
import Link from 'next/link'

const Dos = () => {
  return (
    <div>
      <h2>Dos</h2>
      <Link href="/Uno"><button className='bg-orange-400 p-2 border border-1'>Ir al Uno</button></Link>
    </div>
  )
}

export default Dos
