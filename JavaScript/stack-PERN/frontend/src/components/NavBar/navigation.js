export const PublicRoutes = [

    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
];

export const PrivateRoutes = [

    { name: 'Perfil', path: '/perfil' },
    { name: 'Tareas', path: '/tareas' },
    { name: 'Crear Tarea', path: '/tareas/crear' },
    { name: 'Ver Tarea', path: '/tareas/:id' },
    { name: 'Editar Tarea', path: '/tareas/editar/:id' },

];