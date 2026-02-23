# Backend API - Portfolio Jenniffer Espinoza

## Stack Tecnológico
- **Framework**: ASP.NET Core 8.0+
- **Base de Datos**: SQL Server
- **ORM**: Entity Framework Core
- **Arquitectura**: Clean Architecture

---

## Endpoints Requeridos

### 1. GET `/api/projects`
Retorna todos los proyectos académicos con sus tecnologías.

**Response**:
```json
[
  {
    "id": 1,
    "title": "MiComunidad - Gestión de Recursos",
    "description": "Sistema web Full Stack para gestión de recursos comunitarios",
    "semester": 7,
    "type": "Web",
    "imageUrl": "/images/proyecto-gestion-recursos.png",
    "technologies": [
      { "id": 1, "name": "Angular 21", "category": "Frontend", "yearsOfExperience": 1 },
      { "id": 2, "name": "TypeScript 5.9", "category": "Frontend", "yearsOfExperience": 2 }
    ],
    "hoursInvested": 150,
    "githubUrl": "https://github.com/usuario/proyecto",
    "createdAt": "2025-02-01T00:00:00Z"
  }
]
```

---

### 2. GET `/api/technologies`
Retorna todas las tecnologías (22 total).

**Response**:
```json
[
  { "id": 1, "name": "C", "category": "Backend", "yearsOfExperience": 2 },
  { "id": 2, "name": "C++", "category": "Backend", "yearsOfExperience": 2 },
  { "id": 3, "name": "Java", "category": "Backend", "yearsOfExperience": 1 }
]
```

**Categorías**: Frontend, Backend, Database, Tools, Mobile

---

### 3. GET `/api/dashboard/stats`
Retorna estadísticas para gráficos del dashboard.

**Response**:
```json
{
  "totalProjects": 4,
  "totalTechnologies": 22,
  "totalHours": 500,
  "completedSemesters": 7,
  "projectsBySemester": [
    { "semester": 5, "count": 1 },
    { "semester": 7, "count": 2 },
    { "semester": 8, "count": 1 }
  ],
  "topTechnologies": [
    { "name": "React", "count": 3, "percentage": 25 },
    { "name": "TypeScript", "count": 3, "percentage": 25 }
  ],
  "hoursBySemester": [
    { "semester": 5, "hours": 90 },
    { "semester": 7, "hours": 250 },
    { "semester": 8, "hours": 160 }
  ],
  "projectsByType": [
    { "type": "Web", "count": 3, "percentage": 75 },
    { "type": "API", "count": 1, "percentage": 25 }
  ]
}
```

**Nota**: Los porcentajes se calculan automáticamente en el backend.

---

### 4. GET `/api/experience`
Retorna experiencias profesionales.

**Response**:
```json
[
  {
    "id": 1,
    "company": "N5 Now",
    "role": "Desarrolladora de Software",
    "period": "20 Feb 2025 - Actualidad",
    "project": "Sistema de Gestión de Formularios",
    "technologies": ["React", "TypeScript", "C# .NET", "MongoDB", "PostgreSQL"],
    "usage": "Desarrollo de interfaces y tablas CRUD + creación de controladores...",
    "isActive": true,
    "startDate": "2025-02-20T00:00:00Z",
    "endDate": null
  }
]
```

---

## Base de Datos (SQL Server)

### Tabla: Projects
```sql
CREATE TABLE Projects (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(1000) NOT NULL,
    Semester INT NOT NULL,
    Type NVARCHAR(50) NOT NULL,
    ImageUrl NVARCHAR(500),
    HoursInvested INT NOT NULL,
    GithubUrl NVARCHAR(500),
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE()
);
```

### Tabla: Technologies
```sql
CREATE TABLE Technologies (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Category NVARCHAR(50) NOT NULL,
    YearsOfExperience DECIMAL(3,1) NOT NULL
);
```

### Tabla: ProjectTechnologies
```sql
CREATE TABLE ProjectTechnologies (
    ProjectId INT NOT NULL,
    TechnologyId INT NOT NULL,
    PRIMARY KEY (ProjectId, TechnologyId),
    FOREIGN KEY (ProjectId) REFERENCES Projects(Id) ON DELETE CASCADE,
    FOREIGN KEY (TechnologyId) REFERENCES Technologies(Id) ON DELETE CASCADE
);
```

### Tabla: Experiences
```sql
CREATE TABLE Experiences (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Company NVARCHAR(200) NOT NULL,
    Role NVARCHAR(200) NOT NULL,
    Period NVARCHAR(100) NOT NULL,
    Project NVARCHAR(300),
    Technologies NVARCHAR(MAX) NOT NULL, -- JSON array
    Usage NVARCHAR(MAX) NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    StartDate DATETIME2 NOT NULL,
    EndDate DATETIME2 NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE()
);
```

---

## Configuración CORS

En `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:5173",  // Desarrollo
            "https://jenniffer-espinoza.vercel.app"  // Producción
        )
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

app.UseCors("AllowFrontend");
```

---

## URLs de Configuración

**Frontend**:
- Desarrollo: `http://localhost:5173`
- Producción: `https://jenniffer-espinoza.vercel.app`

**Backend**:
- Desarrollo: `http://localhost:5000/api`
- Producción: `https://api-portfolio-jenniffer.azurewebsites.net/api`

**Connection String** (`appsettings.json`):
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=PortfolioDB;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

---

## Datos Iniciales (Seed)

### Tecnologías (22):
C, C++, Java, POO, Angular, TypeScript, JavaScript, HTML, CSS, Spring Boot, React, Node.js, MongoDB, PostgreSQL, SQL Server, Git, Docker, ASP.NET Core, Elsa Workflows, New Relic, Android, Postman

### Proyectos (4):
1. **MiComunidad** - Semestre 7, Web, 150h, Tecnologías: Angular 21, TypeScript, ASP.NET Core, SQL Server
2. **Dashboard BI** - Semestre 7, Web, 100h, Tecnologías: React, Python, MongoDB
3. **Pagos Móviles Aeroméxico** - Semestre 8, Web, 160h, Tecnologías: Java 17, Spring Boot, MongoDB
4. **API E-commerce** - Semestre 5, API, 90h, Tecnologías: ASP.NET Core, SQL Server

### Experiencias (2):
1. **N5 Now** - Desarrolladora de Software (20 Feb 2025 - Actualidad)
2. **Aeroméxico** - Tester (20 Feb 2025 - Actualidad)

---

## Notas Importantes

- ✅ **Solo endpoints GET** (lectura únicamente)
- ✅ **Sin autenticación** (portfolio público)
- ✅ **CORS habilitado** para el frontend
- ✅ **Imágenes servidas desde frontend** (`/public/images`)

---

## Contacto
**Email**: jennifermarisolespinozagomez@gmail.com  
**LinkedIn**: [Jenniffer Espinoza](https://www.linkedin.com/in/jenniffer-marisol-espinoza-gomez-ab4b932b1)
