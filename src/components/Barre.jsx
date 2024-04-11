import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Barre = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='Navbar'>
      <span className="logo">Socialize</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Se déconnecter</button>
      </div>
    </div>
  )
}

export default Barre