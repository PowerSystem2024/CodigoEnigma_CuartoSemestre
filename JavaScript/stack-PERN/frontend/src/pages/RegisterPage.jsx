import { Card, Input, Button } from '../components/UI'
import { useForm } from 'react-hook-form'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { signup, errors: serverErrors } = useAuth()
  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = await signup(data)
      if (user) {
        navigate('/perfil')
      }
    } catch (error) {
      
      console.log('Error en registro:', error)
    }
  })

  console.log(errors);

  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
      <Card>
        <form onSubmit={onSubmit}>
          <h3 className='text-2xl font-bold'>Registro</h3>

          {serverErrors && Array.isArray(serverErrors) && serverErrors.map((error, index) => (
            <div key={index} className='bg-red-500 text-white p-2 rounded mb-2'>
              {error.message}
            </div>
          ))}

          <Input placeholder="Ingrese su nombre" {...register("name", { required: true })} />
          {errors.name && <span className='text-red-500'>Este campo es requerido</span>}
          <Input type="email" placeholder="Ingrese su email" {...register("email", { required: true })} />
          {errors.email && <span className='text-red-500'>Este campo es requerido</span>}
          <Input type="password" placeholder="Ingrese su contraseña" {...register("password", { required: true })} />
          {errors.password && <span className='text-red-500'>Este campo es requerido</span>}
          <Button type="submit">Registrarse</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>¿Ya tienes una cuenta? <Link to="/login" className='text-blue-500'>Inicia sesión</Link></p>
        </div>
      </Card>
    </div >

  )
}

export default RegisterPage