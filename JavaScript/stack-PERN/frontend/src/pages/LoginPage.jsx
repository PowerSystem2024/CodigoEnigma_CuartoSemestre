import { Card, Input, Button, Label } from "../components/UI"
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext.jsx'

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const user = await signin(data)
    if (user) {
      navigate('/perfil')
    }
  })

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <form onSubmit={onSubmit}>

          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Ingrese su email" {...register("email", { required: true })} />
          {errors.email && <span className='text-red-500'>Este campo es requerido</span>}
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" placeholder="Ingrese su contraseña" {...register("password", { required: true })} />
          {errors.password && <span className='text-red-500'>Este campo es requerido</span>}
          <Button type="submit">Iniciar Sesión</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>¿No tienes una cuenta? <Link to="/register" className='text-blue-500'>Regístrate</Link></p>
        </div>

      </Card>
    </div>
  )
}

export default LoginPage