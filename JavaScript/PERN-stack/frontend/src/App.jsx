import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import TareasPage from "./pages/TareasPage"
import TareaFormPage from "./pages/TareaFormPage"
import NotFound from "./pages/NotFound"
import Navbar from "./components/NavBar/Navbar.jsx"
import { Container } from "./components/UI/Container.jsx"
import { ProtectedRoutes } from "./components/ProtectedRoutes.jsx"
import { useAuth } from "./context/AuthContext.jsx"

function App() {

  const { isAuth } = useAuth();
  console.log(isAuth);


  return (
    <Navbar>
      <Container className="py-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoutes isAllowed={isAuth} redirectTo="/login" />}>
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/tareas" element={<TareasPage />} />
            <Route path="/tareas/crear" element={<TareaFormPage />} />
            <Route path="/tareas/:id" element={<TareaFormPage />} />
            <Route path="/tareas/editar/:id" element={<TareaFormPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Navbar >
  )
}


export default App