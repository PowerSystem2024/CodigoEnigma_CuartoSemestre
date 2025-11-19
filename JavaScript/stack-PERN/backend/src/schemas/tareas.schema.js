import { z } from 'zod';

export const crearTareaSchema = z.object({
    titulo: z.string({
        required_error: 'El título es obligatorio',
        invalid_type_error: 'El título debe ser una cadena de texto',
    }).min(1, {
        message: 'El título debe tener al menos 1 carácter'
    }).max(255, {
        message: 'El título debe tener como máximo 255 caracteres'
    }),
    descripcion: z.string({
        required_error: 'La descripción es obligatoria',
        invalid_type_error: 'La descripción debe ser una cadena de texto',
    }).min(1, {
        message: 'La descripción debe tener al menos 1 carácter'
    }).max(255, {
        message: 'La descripción debe tener como máximo 255 caracteres'
    }),
});

export const actualizarTareaSchema = z.object({
    titulo: z.string({
        required_error: 'El título es obligatorio',
        invalid_type_error: 'El título debe ser una cadena de texto',
    }).min(1, {
        message: 'El título debe tener al menos 1 carácter'
    }).max(255, {
        message: 'El título debe tener como máximo 255 caracteres'
    }),
    descripcion: z.string({
        required_error: 'La descripción es obligatoria',
        invalid_type_error: 'La descripción debe ser una cadena de texto',
    }).min(1, {
        message: 'La descripción debe tener al menos 1 carácter'
    }).max(255, {
        message: 'La descripción debe tener como máximo 255 caracteres'
    }),
});
