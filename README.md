# 🚀 perm-administrador-productos

API hecha con Node.js, Express y TypeScript - Administrador de Productos

---

## 📁 Estructura del proyecto

```
rest-api-node-ts-server/
├── dist/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── index.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## ⚙️ Setup inicial

### 1. Inicializar proyecto Node

```
npm init
```

---

### 2. Instalar TypeScript

```
npm install -D typescript ts-node
```

---

### 3. Instalar nodemon

```
npm install -D nodemon
```

---

### 4. Instalar Express

```
npm install express
```

Instalar tipos de Express (TypeScript):

```
npm install -D @types/express
```

---

### 5. Instalar Sequelize y PostgreSQL

Instalar integración con TypeScript:

```
npm install sequelize-typescript
```

Instalar ORM Sequelize:

```
npm install sequelize
```

Instalar driver para PostgreSQL:

```
npm install pg pg-hstore
```

---

### 6. Instalar dotenv

```
npm install dotenv
```

---

### 7. Instalar herramientas de testing

```
npm install -D supertest @types/supertest jest @types/jest ts-jest
```

Inicializar configuración de Jest con TypeScript:

```
npx ts-jest config:init
```

```

---

## 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```

DATABASE_URL=tu_url_de_render
PORT=3000

```

⚠️ No subir este archivo a GitHub.

Agregar a `.gitignore`:

```

.env

```

---

## 🗄️ Base de datos

Se utiliza PostgreSQL desplegado en la nube (Render).

---

## 🖥️ Conexión con DBeaver

Herramienta utilizada para administrar la base de datos.

### 🔌 Configuración

- Host: proporcionado por Render
- Port: 5432
- Database: nombre de la DB
- Username: usuario
- Password: contraseña

### 🔐 SSL

- SSL: Require
- Desactivar validación estricta si es necesario

---

## 🛠️ Configuración de TypeScript

Inicializar:

```

npx tsc --init

````

Configurar `tsconfig.json`:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ESNext"],
    "target": "ESNext",
    "moduleResolution": "nodenext",
    "module": "nodenext",
    "strict": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "declaration": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*.ts"]
}
````

### 🧠 Notas

* Necesario para `sequelize-typescript`
* Soporte para decorators
* Configuración moderna con NodeNext

---

## ▶️ Ejecutar el proyecto

Agregar en `package.json`:

```json
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts",
  "test": "jest"
}
```

Ejecutar:

```
npm run dev
```

---

## ⚙️ Compilar

```
npx tsc
```

---

## ▶️ Producción

```
node dist/index.js
```

---

## 🧠 Notas generales

* Express: servidor
* Sequelize: ORM
* pg: driver PostgreSQL
* dotenv: variables de entorno
* TypeScript: tipado
* nodemon: auto-reload

---

## 📌 Estado del proyecto

🚧 Backend con Express + Sequelize + PostgreSQL
