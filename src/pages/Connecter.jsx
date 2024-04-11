import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Connecter = () => {



  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };


    return (
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Socialize</span>
            <span className="title">Se connecter</span>
            <form onSubmit={handleSubmit}>
              <input required type="email" placeholder="email" />
              <input required type="password" placeholder="mot de passe" />
              <button>Se connecter</button>
              {err && <span>Something went wrong</span>}
            </form>
            <p>
            Vous n'avez pas de compte ?    <Link to="/inscrire">S'inscrire</Link>         </p>
          </div>
        </div>
      );
    };

export default Connecter;


