import React from 'react'
import BarreLatérale from '../components/BarreLatérale'
import Chat from '../components/Chat'

const Accueil = () => {
  return (
    <div className='home'>
      <div className="container">
        <BarreLatérale/>
        <Chat/>
      </div>
    </div>
  )
}

export default Accueil