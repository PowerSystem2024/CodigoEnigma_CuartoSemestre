import { createContext, useState, useContext } from 'react';
import { obtenerTareas, obtenerTarea, crearTarea, actualizarTarea, eliminarTarea } from '../api/tareas.api.js';

export const TareasContext = createContext();

export const useTareas = () => {
    const context = useContext(TareasContext);
    if (!context) {
        throw new Error("useTareas must be used within a TareasProvider");
    }
    return context;
}

export function TareasProvider({ children }) {
    const [tareas, setTareas] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const cargarTareas = async () => {
        try {
            setLoading(true);
            setErrors(null);
            const res = await obtenerTareas();
            setTareas(res.data);
        } catch (error) {
            console.log('Error al cargar tareas:', error);
            if (error.response && error.response.data) {
                setErrors(Array.isArray(error.response.data) ? error.response.data : [error.response.data]);
            } else {
                setErrors([{ message: 'Error de conexión al cargar tareas' }]);
            }
        } finally {
            setLoading(false);
        }
    };

    const obtenerTareaById = async (id) => {
        try {
            setLoading(true);
            setErrors(null);
            const res = await obtenerTarea(id);
           
            return Array.isArray(res.data) ? res.data[0] : res.data;
        } catch (error) {
            console.log('Error al obtener tarea:', error);
            if (error.response && error.response.data) {
                setErrors(Array.isArray(error.response.data) ? error.response.data : [error.response.data]);
            } else {
                setErrors([{ message: 'Error de conexión al obtener tarea' }]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const crearNuevaTarea = async (tarea) => {
        try {
            setLoading(true);
            setErrors(null);
            const res = await crearTarea(tarea);
            setTareas([...tareas, res.data]);
            return res.data;
        } catch (error) {
            console.log('Error al crear tarea:', error);
            if (error.response && error.response.data) {
                setErrors(Array.isArray(error.response.data) ? error.response.data : [error.response.data]);
            } else {
                setErrors([{ message: 'Error de conexión al crear tarea' }]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const actualizarTareaById = async (id, tarea) => {
        try {
            setLoading(true);
            setErrors(null);
            const res = await actualizarTarea(id, tarea);
            setTareas(tareas.map(t => t.id === id ? res.data : t));
            return res.data;
        } catch (error) {
            console.log('Error al actualizar tarea:', error);
            if (error.response && error.response.data) {
                setErrors(Array.isArray(error.response.data) ? error.response.data : [error.response.data]);
            } else {
                setErrors([{ message: 'Error de conexión al actualizar tarea' }]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const eliminarTareaById = async (id) => {
        try {
            setLoading(true);
            setErrors(null);
            await eliminarTarea(id);
            setTareas(tareas.filter(t => t.id !== id));
        } catch (error) {
            console.log('Error al eliminar tarea:', error);
            if (error.response && error.response.data) {
                setErrors(Array.isArray(error.response.data) ? error.response.data : [error.response.data]);
            } else {
                setErrors([{ message: 'Error de conexión al eliminar tarea' }]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <TareasContext.Provider value={{
            tareas,
            errors,
            loading,
            cargarTareas,
            obtenerTareaById,
            crearNuevaTarea,
            actualizarTareaById,
            eliminarTareaById
        }}>
            {children}
        </TareasContext.Provider>
    );
}
