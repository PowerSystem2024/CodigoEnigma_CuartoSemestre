import { useEffect } from 'react'
import { Card, Button } from '../components/UI'
import { useNavigate } from 'react-router-dom'
import { useTareas } from '../context/TareasContext.jsx'

function TareasPage() {
    const { tareas, loading, cargarTareas, eliminarTareaById } = useTareas();
    const navigate = useNavigate();

    useEffect(() => {
        cargarTareas();
    }, []);

    const handleEliminar = async (id) => {
        try {
            await eliminarTareaById(id);
        } catch (error) {
            console.log('Error al eliminar tarea:', error);
        }
    };

    if (loading) {
        return <div className="text-center py-8">Cargando tareas...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Mis Tareas</h1>
                <Button onClick={() => navigate('/tareas/crear')}>
                    Nueva Tarea
                </Button>
            </div>

            {tareas.length === 0 ? (
                <Card>
                    <p className="text-gray-500">No hay tareas todavía. Crea una nueva tarea.</p>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tareas.map((tarea) => (
                        <Card key={tarea.id} className="cursor-pointer hover:border-sky-500 transition-colors">
                            <div onClick={() => navigate(`/tareas/${tarea.id}`)}>
                                <h3 className="text-xl font-bold mb-2">{tarea.titulo}</h3>
                                <p className="text-gray-600 mb-4">{tarea.descripcion}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button onClick={() => navigate(`/tareas/editar/${tarea.id}`)}>
                                    Editar
                                </Button>
                                <button
                                    onClick={() => handleEliminar(tarea.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TareasPage
