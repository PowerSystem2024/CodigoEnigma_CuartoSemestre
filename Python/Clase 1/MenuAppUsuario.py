from Usuario import Usuario
from UsuarioDAO import UsuarioDAO
from logger_base import logger

opcion = None
while opcion != 5:
    print('Opciones:')
    print('1. Listar usuarios')
    print('2. Agregar usuario')
    print('3. Actualizar usuario')
    print('4. Eliminar usuario')
    print('5. Salir')
    opcion = int(input('Seleccione una opción (1-5): '))

    if opcion == 1:
        usuarios = UsuarioDAO.seleccionar()
        for usuario in usuarios:
            logger.info(usuario)
    elif opcion == 2:
        username = input('Proporcione el username: ')
        password = input('Proporcione el password: ')
        usuario = Usuario(username=username, password=password)
        usuarios_insertados = UsuarioDAO.insertar(usuario)
        logger.info(f'Usuarios insertados: {usuarios_insertados}')
    elif opcion == 3:
        id_usuario = int(input('Proporcione el id del usuario a modificar: '))
        username = input('Proporcione el nuevo username: ')
        password = input('Proporcione el nuevo password: ')
        usuario = Usuario(id_usuario, username, password)
        usuarios_actualizados = UsuarioDAO.actualizar(usuario)
        logger.info(f'Usuarios actualizados: {usuarios_actualizados}')
    elif opcion == 4:
        id_usuario = int(input('Proporcione el id del usuario a eliminar: '))
        usuario = Usuario(id_usuario=id_usuario)
        usuarios_eliminados = UsuarioDAO.eliminar(usuario)
        logger.info(f'Usuarios eliminados: {usuarios_eliminados}')
else:
    logger.info('Salimos de la aplicación')
