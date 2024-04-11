import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Inscrire = () => {




  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Créer un utilisateur 
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Création d'un nom d'image unique
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Mise à jour du profil
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });


            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };


    return (
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Socialize</span>
            <span className="title">S'inscrire</span>
            <form onSubmit={handleSubmit}>
              <input required type="text" placeholder="nom" />
              <input required type="email" placeholder="email" />
              <input required type="password" placeholder="mot de passe" />
              <input required style={{ display: "none" }} type="file" id="file" />
              <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
              </label>
              <button>S'inscrire</button>
            </form>
            <p>
            Vous avez un compte ?    <Link to="/Connecter">Se connecter</Link>         </p>
          </div>
        </div>
      );
    };

export default Inscrire;