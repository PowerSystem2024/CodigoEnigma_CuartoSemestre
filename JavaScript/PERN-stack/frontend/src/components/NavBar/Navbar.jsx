import { Link, useLocation, useNavigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./navigation.js"
import { useAuth } from "../../context/AuthContext.jsx";


function Navbar({ children }) {

    const location = useLocation();
    const navigate = useNavigate();
    const { isAuth, signout, user } = useAuth();

    const handleNavClick = (e, path) => {
        // Si la ruta contiene parámetros dinámicos
        if (path.includes(':id')) {
            e.preventDefault();
            const id = prompt('Ingresa el ID de la tarea:');
            if (id) {
                const newPath = path.replace(':id', id);
                navigate(newPath);
            }
        }
    };

    return (
        <>
            <nav className="bg-zinc-950 flex justify-between px-20 py-7">
                <h1 className="text-white text-xl font-bold">
                    PROYECT PERN
                </h1>
                <ul className="flex gap-x-2 items-center">
                    {isAuth ? PrivateRoutes.map(({ name, path }) => (
                        <li className={`px-3 py-1 rounded ${location.pathname === path ? 'bg-sky-500 text-white' : 'text-gray-300 hover:text-white'}`} key={name} >
                            <Link to={path} onClick={(e) => handleNavClick(e, path)}>{name}</Link>
                        </li>
                    )) : PublicRoutes.map(({ name, path }) => (
                        <li className={`px-3 py-1 rounded ${location.pathname === path ? 'bg-sky-500 text-white' : 'text-gray-300 hover:text-white'}`} key={name} >
                            <Link to={path}>{name}</Link>
                        </li>
                    ))}
                    {isAuth && (
                        <>
                            <li className="flex items-center gap-x-2 px-3">
                                <img
                                    src={user?.gravatar || `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp`}
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full border-2 border-sky-500"
                                />
                                <span className="text-white font-medium">{user?.name}</span>
                            </li>
                            <li>
                                <button
                                    onClick={signout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Cerrar Sesión
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
}

export default Navbar