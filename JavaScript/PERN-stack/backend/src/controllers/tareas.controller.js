import { pool } from '../db.js';

export const listarTareas = async (req, res, next) => {
    try {
        console.log(req.usuarioId);
        const resultado = await pool.query('SELECT * FROM tareas WHERE usuario_id = $1', [req.usuarioId]);
        return res.json(resultado.rows);
    } catch (error) {
        console.log('Error al listar tareas:', error);
        next(error);
    }
}

export const listarTarea = async (req, res, next) => {
    try {
        const resultado = await pool.query('SELECT * FROM tareas WHERE id = $1 AND usuario_id = $2', [req.params.id, req.usuarioId]);
        if (resultado.rows.length === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        console.log('Error al obtener tarea:', error);
        next(error);
    }
};

export const crearTarea = async (req, res, next) => {
    const { titulo, descripcion } = req.body;


    try {

        const resultado = await pool.query('INSERT INTO tareas (titulo, descripcion, usuario_id) VALUES ($1, $2, $3) RETURNING *', [titulo, descripcion, req.usuarioId]);
        res.json(resultado.rows[0]);
        console.log(resultado.rows[0]);
    }
    catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ message: 'La tarea ya existe' });
        }
        console.log(error);
        next(error);
    }


}

export const actualizarTarea = async (req, res, next) => {
    try {
        const { titulo, descripcion } = req.body;
        const id = req.params.id;
        const resultado = await pool.query('UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3 AND usuario_id = $4 RETURNING *', [titulo, descripcion, id, req.usuarioId]);
        if (resultado.rows.length === 0) {
            return res.status(404).json({ message: 'No existe una tarea con ese id' });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        console.log('Error al actualizar tarea:', error);
        if (error.code === '23505') {
            return res.status(409).json({ message: 'Ya existe una tarea con ese título' });
        }
        next(error);
    }
};

export const eliminarTarea = async (req, res, next) => {
    try {
        const resultado = await pool.query('DELETE FROM tareas WHERE id = $1 AND usuario_id = $2', [req.params.id, req.usuarioId]);
        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: 'No existe una tarea con ese id' });
        }
        return res.sendStatus(204);
    } catch (error) {
        console.log('Error al eliminar tarea:', error);
        next(error);
    }
};