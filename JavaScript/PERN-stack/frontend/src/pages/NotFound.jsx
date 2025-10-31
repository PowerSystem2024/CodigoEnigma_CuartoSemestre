import { Link } from 'react-router-dom'
import { Card } from '../components/UI'

function NotFound() {
  return (
    <div className='h-[calc(100vh-64px)] flex justify-center items-center flex-col'>
      <Card>
        <h3 className='text-4xl font-bold'>404</h3>
        <p className='text-xl text-center'>Página no encontrada</p>
        <Link to="/" className='text-blue-500'>Volver al inicio</Link>
      </Card>
    </div>
  )
}

export default NotFound