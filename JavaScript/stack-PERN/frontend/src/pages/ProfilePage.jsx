import { useAuth } from '../context/AuthContext.jsx'
import { Card, Container } from '../components/UI'

function ProfilePage() {
  const { user } = useAuth()

  return (
    <Container className="py-8">
      <Card className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Gravatar */}
          <div className="relative">
            <img
              src={user?.gravatar}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-sky-500 shadow-lg"
            />
          </div>

          {/* Información del usuario */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">{user?.name}</h1>
            <p className="text-gray-400 text-lg">{user?.email}</p>
          </div>

          {/* Detalles adicionales */}
          <div className="w-full border-t border-gray-700 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Nombre</p>
                <p className="text-white font-medium">{user?.name}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">{user?.email}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">ID de Usuario</p>
                <p className="text-white font-medium">{user?.id}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Fecha de Registro</p>
                <p className="text-white font-medium">
                  {user?.fecha_registro ? new Date(user.fecha_registro).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default ProfilePage