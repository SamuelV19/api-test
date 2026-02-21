# 📝 API RESTful de Gestión de Tareas (Tasks)

Prueba práctica para Analista de Desarrollo 2.

Este proyecto consiste en el desarrollo de una API RESTful para la gestión de tareas (CRUD), implementada en Laravel, junto con un frontend básico en HTML, CSS y JavaScript puro para consumir la API.

---

# 1. Tecnologías Utilizadas

## Backend
- PHP 8.1
- Laravel 10
- PostgreSQL
- Laravel Sanctum (autenticación)
- Patrón Repository
- Arquitectura MVC

## Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

---

# 2. Funcionalidades Implementadas

## API - Recurso: Tasks

Cada tarea contiene:

- `id`
- `title`
- `description`
- `status` (pending | completed)

### Operaciones CRUD

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | /api/tasks | Listar todas las tareas |
| GET | /api/tasks/{id} | Obtener una tarea específica |
| POST | /api/tasks | Crear una nueva tarea |
| PUT | /api/tasks/{id} | Actualizar una tarea |
| DELETE | /api/tasks/{id} | Eliminar una tarea |

---

# 3. Seguridad

La API implementa autenticación basada en tokens mediante Laravel Sanctum.

- Endpoint de login: `POST /api/login`
- Las rutas de tareas están protegidas mediante middleware `auth:sanctum`
- Se requiere enviar el token en el header:

```bash
Authorization: Bearer {token}
```

---

# 4. Validaciones

Las validaciones se implementan mediante `FormRequest`:

- El título es obligatorio.
- La descripción es obligatoria.
- El estado debe ser `pending` o `completed`.

En caso de error de validación, la API devuelve:

- Código HTTP: `422 Unprocessable Entity`
- Respuesta JSON estructurada con detalle de errores.

---

# 5. Manejo de Errores

La API maneja correctamente los siguientes códigos:

- `200 OK`
- `201 Created`
- `204 No Content`
- `401 Unauthorized`
- `404 Not Found`
- `422 Unprocessable Entity`

Los errores se devuelven siempre en formato JSON.

---

# 6. Base de Datos

Se utiliza PostgreSQL como motor de base de datos.

Las tareas se almacenan en la tabla `tasks`, creada mediante migraciones de Laravel.

---

# 7. Arquitectura

Se implementa el patrón MVC propio de Laravel:

- Model: `Task`
- Controller: `TaskController`
- Requests: `StoreTaskRequest`, `UpdateTaskRequest`
- Repository Pattern:
  - `TaskRepositoryInterface`
  - `TaskRepository`

El uso del patrón Repository permite desacoplar la lógica de acceso a datos del controlador.

---

# Frontend

El frontend permite:

- Login
- Listar tareas
- Crear tarea
- Editar tarea
- Eliminar tarea
- Mostrar errores de validación
- Manejar expiración de sesión

Está estructurado en:

```bash
frontend/
│
├── index.html (Login)
├── tasks.html (Listado)
├── create.html (Crear tarea)
├── edit.html (Editar tarea)
│
├── css/
└── js/
```


Se utiliza `localStorage` para almacenar el token de autenticación.

---

# 8. Instalación y Ejecución

## 8.1 Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/tasks-api-laravel.git
cd tasks-api-laravel
```

## 8.2️ Instalar dependencias
```bash
composer install
```

## 8.3 Configurar entorno

### Crear archivo .env:

```bash
cp .env.example .env
```
### Configurar conexión a PostgreSQL en el archivo .env.

## 8.4️ Generar clave

```bash
php artisan key:generate
```

## 8.5️ Ejecutar migraciones

```bash
php artisan migrate
```

## 8.6️ Crear usuario de prueba

```bash
php artisan tinker
```

```bash
use App\Models\User;

User::create([
    'name' => 'Admin',
    'email' => 'admin@test.com',
    'password' => bcrypt('123456')
]);
```

## 9 Ejecutar servidor backend

```bash
php artisan serve
```
## 9.1 Ejecutar Frontend

Desde la carpeta frontend:

```bash
php -S localhost:5500
```

Luego acceder a:

http://localhost:5500

