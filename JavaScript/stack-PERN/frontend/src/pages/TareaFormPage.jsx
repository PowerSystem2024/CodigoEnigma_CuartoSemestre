import { Card, Input, Label, Button } from "../components/UI"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTareas } from '../context/TareasContext.jsx'


function TareaFormPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      titulo: '',
      descripcion: ''
    }
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { errors: tareasErrors, loading, obtenerTareaById, crearNuevaTarea, actualizarTareaById, eliminarTareaById } = useTareas();
  const [postErrors, setPostErrors] = useState(null);
  const [loadingTarea, setLoadingTarea] = useState(false);
  const [tarea, setTarea] = useState(null);

  
  const isViewMode = id && !location.pathname.includes('/editar/');
  const isEditMode = id && location.pathname.includes('/editar/');
  const isCreateMode = !id;

  useEffect(() => {
    const cargarTarea = async () => {
      if (id) {
        try {
          setLoadingTarea(true);
          setPostErrors(null);
          const tareaObtenida = await obtenerTareaById(id);

          if (tareaObtenida) {
            setTarea(tareaObtenida);
            reset({
              titulo: tareaObtenida.titulo,
              descripcion: tareaObtenida.descripcion
            });
          } else {
            setPostErrors([{ message: 'Tarea no encontrada' }]);
            setTimeout(() => navigate('/tareas'), 2000);
          }
        } catch (error) {
          console.log('Error al cargar tarea:', error);
          setPostErrors([{ message: 'Error al cargar la tarea. Redirigiendo...' }]);
          setTimeout(() => navigate('/tareas'), 2000);
        } finally {
          setLoadingTarea(false);
        }
      }
    };
    cargarTarea();
  }, [id, reset, navigate, obtenerTareaById]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setPostErrors(null);
      if (isEditMode) {
        await actualizarTareaById(id, data);
        navigate('/tareas');
      } else if (isCreateMode) {
        await crearNuevaTarea(data);
        navigate('/tareas');
      }
    } catch (error) {
      console.log('Error completo:', error);
      if (error.response && error.response.data) {
        const errores = Array.isArray(error.response.data) ? error.response.data : [error.response.data];
        setPostErrors(errores);
      } else {
        setPostErrors([{ message: 'Error de conexión. Verifica que el servidor esté corriendo.' }]);
      }
    }
  });

  const handleEliminar = async () => {
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      try {
        await eliminarTareaById(id);
        navigate('/tareas');
      } catch (error) {
        console.log('Error al eliminar:', error);
        setPostErrors([{ message: 'Error al eliminar la tarea' }]);
      }
    }
  };

 
  if (isViewMode) {
    if (loadingTarea) {
      return (
        <Card>
          <p className="text-center text-gray-500">Cargando tarea...</p>
        </Card>
      );
    }

    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          {postErrors && postErrors.length > 0 && (
            <div className="mb-4">
              {postErrors.map((error, index) => (
                <div key={index} className='bg-red-500 text-white p-2 rounded mb-2'>
                  {error.message}
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <Link
                to="/tareas"
                className="text-sky-400 hover:text-sky-300 flex items-center gap-2"
              >
                ← Volver a tareas
              </Link>
              <span className="text-gray-500 text-sm">ID: {tarea?.id}</span>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-2">Título</h3>
              <h1 className="text-3xl font-bold text-white">{tarea?.titulo}</h1>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-2">Descripción</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {tarea?.descripcion}
              </p>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-700">
              <Button
                onClick={() => navigate(`/tareas/editar/${tarea.id}`)}
                className="flex-1"
              >
                Editar Tarea
              </Button>
              <button
                onClick={handleEliminar}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
              >
                Eliminar Tarea
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  

  return (
    <div>
      <Card>
        <h2 className="text-bold my-4">{isEditMode ? 'Editar Tarea' : 'Nueva Tarea'}</h2>

        {(loading || loadingTarea) && <p className="text-gray-500 mb-4">Cargando tarea...</p>}

        {postErrors && postErrors.length > 0 && (
          <div className="mb-4">
            {postErrors.map((error, index) => (
              <div key={index} className='bg-red-500 text-white p-2 rounded mb-2'>
                {error.message || JSON.stringify(error)}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <Label htmlFor="titulo">Título</Label>
          <Input
            type="text"
            placeholder="Título de la tarea"
            {...register("titulo", { required: "El título es requerido" })}
          />
          {errors.titulo && <span className='text-red-500 text-sm'>{errors.titulo.message}</span>}

          <Label htmlFor="descripcion">Descripción</Label>
          <Input
            type="text"
            placeholder="Descripción de la tarea"
            {...register("descripcion", { required: "La descripción es requerida" })}
          />
          {errors.descripcion && <span className='text-red-500 text-sm'>{errors.descripcion.message}</span>}

          <Button type="submit" disabled={loading}>
            {id ? 'Actualizar Tarea' : 'Guardar Tarea'}
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default TareaFormPage