# 🐧 Guía de Instalación de WSL (Windows Subsystem for Linux)

Esta guía te ayudará a instalar y configurar WSL en Windows 10 y Windows 11 paso a paso.

## 📋 Requisitos Previos

- **Windows 10**: Versión 2004 (Build 19041) o superior
- **Windows 11**: Cualquier versión
- Conexión a Internet activa
- Privilegios de administrador

## 🔍 Verificar Versión de Windows

1. Presiona `Win + R`
2. Escribe `winver` y presiona Enter
3. Verifica que tu versión cumple con los requisitos

## 🚀 Instalación Paso a Paso

### Método 1: Instalación Automática (Recomendado)

#### Paso 1: Abrir PowerShell como Administrador
1. Presiona `Win + X`
2. Selecciona **"Windows PowerShell (Administrador)"** o **"Terminal (Administrador)"**
3. Si aparece el control de cuentas de usuario, selecciona **"Sí"**

#### Paso 2: Instalar WSL
Ejecuta el siguiente comando:
```powershell
wsl --install
```

Este comando automáticamente:
- Habilitará las características necesarias de Windows
- Descargará e instalará el kernel de Linux más reciente
- Establecerá WSL 2 como predeterminado
- Instalará Ubuntu como distribución predeterminada

#### Paso 3: Reiniciar el Sistema
```powershell
Restart-Computer
```

### Método 2: Instalación Manual (Si el Método 1 no funciona)

#### Paso 1: Habilitar WSL
```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

#### Paso 2: Habilitar Plataforma de Máquina Virtual
```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

#### Paso 3: Descargar el Paquete de Actualización del Kernel
1. Visita: [Paquete de actualización del kernel de Linux en WSL2](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
2. Descarga e instala el archivo MSI

#### Paso 4: Establecer WSL 2 como Versión Predeterminada
```powershell
wsl --set-default-version 2
```

#### Paso 5: Reiniciar el Sistema
```powershell
Restart-Computer
```

## 📦 Instalación de Distribuciones Linux

### Opción 1: Microsoft Store (Recomendado)
1. Abre **Microsoft Store**
2. Busca tu distribución preferida:
   - [Ubuntu](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV)
   - [Ubuntu 22.04 LTS](https://apps.microsoft.com/store/detail/ubuntu-2204-lts/9PN20MSR04DW)
   - [Debian](https://apps.microsoft.com/store/detail/debian/9MSVKQC78PK6)
   - [openSUSE Leap](https://apps.microsoft.com/store/detail/opensuse-leap-155/9P6V7161C23R)
   - [Kali Linux](https://apps.microsoft.com/store/detail/kali-linux/9PKR34TNCV07)

### Opción 2: Línea de Comandos
```powershell
# Ver distribuciones disponibles
wsl --list --online

# Instalar una distribución específica
wsl --install -d Ubuntu
```

## ⚙️ Configuración Inicial

### Paso 1: Configurar Usuario y Contraseña
1. Abre la distribución desde el menú Inicio
2. Espera a que complete la instalación inicial
3. Crea tu nombre de usuario (sin espacios, minúsculas)
4. Establece una contraseña segura

### Paso 2: Actualizar el Sistema
```bash
sudo apt update && sudo apt upgrade -y
```

## 🔧 Comandos Útiles de WSL

### Gestión de Distribuciones
```powershell
# Listar distribuciones instaladas
wsl --list --verbose

# Establecer distribución predeterminada
wsl --set-default <NombreDistribución>

# Detener una distribución
wsl --terminate <NombreDistribución>

# Detener todas las distribuciones
wsl --shutdown

# Cambiar versión de WSL de una distribución
wsl --set-version <NombreDistribución> 2
```

### Acceso a Archivos
```powershell
# Acceder a archivos de WSL desde Windows
\\wsl$\<NombreDistribución>

# Abrir explorador en directorio actual (desde WSL)
explorer.exe .
```

## 🛠️ Solución de Problemas Comunes

### Error: "WslRegisterDistribution failed with error: 0x800701bc"
**Solución**: Actualizar el kernel de WSL2
```powershell
wsl --update
```

### Error: "The Windows Subsystem for Linux optional component is not enabled"
**Solución**: Ejecutar como administrador
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

### WSL no arranca después de actualización de Windows
**Solución**: Reiniciar el servicio LxssManager
```powershell
Get-Service LxssManager | Restart-Service
```

### Problemas de rendimiento
**Solución**: Verificar que estás usando WSL2
```powershell
wsl --list --verbose
# Si aparece "VERSION 1", cambiar a WSL2:
wsl --set-version <NombreDistribución> 2
```

## 🔗 Enlaces Útiles

- [Documentación Oficial de Microsoft WSL](https://docs.microsoft.com/en-us/windows/wsl/)
- [Microsoft Store - Distribuciones Linux](https://apps.microsoft.com/store/search?query=linux)
- [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) (Terminal mejorado)
- [Visual Studio Code con WSL](https://code.visualstudio.com/docs/remote/wsl)

## ✅ Verificación de Instalación Exitosa

Para confirmar que WSL está funcionando correctamente:

1. Abre PowerShell y ejecuta:
```powershell
wsl --list --verbose
```

2. Deberías ver algo similar a:
```
  NAME      STATE           VERSION
* Ubuntu    Running         2
```

3. Accede a tu distribución:
```powershell
wsl
```

4. Ejecuta un comando de prueba:
```bash
uname -a
```

¡Felicitaciones! 🎉 Ahora tienes WSL funcionando en tu sistema Windows.

---

## 📝 Notas Adicionales

- **Windows Terminal** es altamente recomendado para una mejor experiencia
- Puedes instalar múltiples distribuciones simultáneamente
- Los archivos de Windows son accesibles desde `/mnt/c/` en WSL
- Para mejor rendimiento, mantén los proyectos en el sistema de archivos de Linux

## 🆘 Soporte

Si encuentras problemas no cubiertos en esta guía:
- Consulta la [documentación oficial](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting)
- Visita el [repositorio de GitHub de WSL](https://github.com/Microsoft/WSL/issues)
- Revisa los [foros de la comunidad](https://github.com/Microsoft/WSL/discussions)