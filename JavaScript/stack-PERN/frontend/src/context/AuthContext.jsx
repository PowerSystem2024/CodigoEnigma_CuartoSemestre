/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import cliente from '../api/axios.js';

// 
export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = async (data) => {
        try {
            setErrors(null);
            const res = await cliente.post('/signin', data);
            console.log(res);
            setUser(res.data);
            setIsAuth(true);
            return res.data;
        } catch (error) {
            if (error.response && error.response.data) {
                if (Array.isArray(error.response.data)) {
                    setErrors(error.response.data);
                } else {
                    setErrors([error.response.data]);
                }
            } else {
                setErrors([{ message: 'Error de conexión. Verifica que el servidor esté corriendo.' }]);
            }
            throw error;
        }
    }

    const signup = async (data) => {
        try {
            setErrors(null);
            const res = await cliente.post('/signup', data);
            console.log(res);
            setUser(res.data);
            setIsAuth(true);
            return res.data;
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(Array.isArray(error.response.data) ? error.response.data : [error.response.data]);
            } else {
                setErrors([{ message: 'Error de red' }]);
            }
            throw error;
        }
    }

    const signout = async () => {
        try {
            await cliente.post('/signout');
            setUser(null);
            setIsAuth(false);
            Cookie.remove("token");
        } catch (error) {
            console.log('Error al cerrar sesión:', error);
        }
    }

    useEffect(() => {
        const checkAuth = async () => {
            const token = Cookie.get("token");
            if (token) {
                try {
                    const res = await cliente.get('/profile');
                    setUser(res.data);
                    setIsAuth(true);
                } catch (err) {
                    setUser(null);
                    setIsAuth(false);
                    Cookie.remove("token");
                    console.log('Error al obtener perfil:', err);
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuth, errors, loading, signup, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}