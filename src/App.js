import './App.css';
import "./style.scss";
import Inscrire from "./pages/Inscrire";
import Connecter from './pages/Connecter';
import Accueil from './pages/Accueil';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
        return <Navigate to="/connecter" />;
      }
  
      return children
    };
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Accueil />
                </ProtectedRoute>
              }
            />
                <Route path="connecter" element={<Connecter />} />
                <Route path="inscrire" element={<Inscrire />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );

   
}

export default App;
