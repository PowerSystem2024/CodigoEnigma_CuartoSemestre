import { useAuth } from "../context/AuthContext.jsx"
import { Link } from "react-router-dom"
import { Container } from "../components/UI"

function HomePage() {
  const { isAuth, user } = useAuth()

  return (
    <Container className="min-h-screen flex items-center justify-center py-12">
      <div className="text-center space-y-12 max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="inline-block">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 animate-gradient">
              PERN Stack
            </h1>
          </div>
          <p className="text-3xl text-gray-300 font-light">
            Tu gestor de tareas personal
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-sky-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Descripción */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-xl p-10 border border-zinc-700/50">
            <p className="text-xl text-gray-200 leading-relaxed">
              Aplicación moderna desarrollada con{" "}
              <span className="text-sky-400 font-bold">PostgreSQL</span>,{" "}
              <span className="text-emerald-400 font-bold">Express</span>,{" "}
              <span className="text-blue-400 font-bold">React</span> y{" "}
              <span className="text-green-400 font-bold">Node.js</span>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        {isAuth ? (
          <div className="space-y-6 py-4">
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl p-6 border border-zinc-700">
              <p className="text-2xl text-white">
                ¡Hola de nuevo, <span className="text-sky-400 font-bold">{user?.name}</span>! 👋
              </p>
            </div>
            <Link
              to="/tareas"
              className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50"
            >
              Ir a mis Tareas →
            </Link>
          </div>
        ) : (
          <div className="space-y-8 py-4">
            <p className="text-2xl text-gray-200 font-light">
              Organiza tu día de manera inteligente ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to="/login"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-10 py-5 rounded-xl text-xl border-2 border-zinc-600 hover:border-sky-500 transition-all transform hover:scale-105"
              >
                Crear Cuenta
              </Link>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-sky-500/50 transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-5">📝</div>
              <h3 className="text-2xl font-bold text-white mb-3">Crea Tareas</h3>
              <p className="text-gray-400 text-lg">Organiza tus pendientes de forma simple</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-5">✏️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Edita y Gestiona</h3>
              <p className="text-gray-400 text-lg">Actualiza tus tareas en cualquier momento</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-emerald-500/50 transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-5">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-3">Seguro</h3>
              <p className="text-gray-400 text-lg">Tus datos protegidos con autenticación JWT</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomePage