import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
});

export const obtenerTareas = () => API.get('/tareas');

export const obtenerTarea = (id) => API.get(`/tareas/${id}`);

export const crearTarea = (tarea) => API.post('/tareas', tarea);

export const actualizarTarea = (id, tarea) => API.put(`/tareas/${id}`, tarea);

export const eliminarTarea = (id) => API.delete(`/tareas/${id}`);
