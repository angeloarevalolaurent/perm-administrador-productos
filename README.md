# 🚀 perm-administrador-productos

API hecha con Node.js, Express y TypeScript - Administrador de Productos

---

## 📁 Estructura del proyecto

```
rest-api-node-ts-server/
├── node_modules/
├── dist/
├── src/
│   ├── config/
│   │   ├── db.ts
│   │
│   ├── index.ts
│   ├── server.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
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

Instalar integración con TypeScript para Sequelize:

```
npm install sequelize-typescript
```

Instalar ORM Sequelize:

```
npm install --save sequelize
```

Instalar driver para PostgreSQL:

```
npm install --save pg pg-hstore
```

---

### 6. Instalar dotenv

```
npm install dotenv
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

## 🗄️ Base de datos Render

Se utiliza **PostgreSQL** desplegado en la nube.

---

## 🖥️ Conexión con DBeaver

Se utiliza DBeaver para administrar y visualizar la base de datos.

### 🔌 Configuración de conexión

Crear una nueva conexión PostgreSQL y completar:

* **Host:** (host de Render)
* **Port:** 5432
* **Database:** (nombre de la base de datos)
* **Username:** (usuario de Render)
* **Password:** (contraseña de Render)

También puedes usar directamente la `DATABASE_URL` proporcionada por Render.

### 🔐 Configuración SSL (Importante)

Activar SSL en la conexión:

* SSL: **Require**
* Desactivar validación estricta si es necesario

### 🎯 Uso

* Visualizar tablas
* Ejecutar consultas SQL
* Administrar datos

---

## 🛠️ Configuración de TypeScript

Inicializar configuración:

```
npx tsc --init
```

Reemplazar el contenido de `tsconfig.json` por:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ESNext"],
    "strict": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "declaration": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*.ts"]
}
```

---

## ▶️ Ejecutar el proyecto

Agregar en `package.json`:

```json
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts"
}
```

Ejecutar en desarrollo:

```
npm run dev
```

---

## ⚙️ Compilar el proyecto

```
npx tsc
```

---

## ▶️ Ejecutar versión compilada

```
node dist/index.js
```

---

## 🧠 Notas

* `express` permite crear el servidor y manejar rutas
* `sequelize` es un ORM para manejar bases de datos
* `pg` y `pg-hstore` permiten la conexión con PostgreSQL
* `dotenv` permite manejar variables de entorno
* `typescript` permite usar tipado estático
* `ts-node` ejecuta `.ts` sin compilar
* `nodemon` reinicia el servidor automáticamente
* `node_modules` contiene las dependencias
* `.env` contiene variables sensibles

---

## 📌 Estado del proyecto

🚧 Backend con Express + Sequelize + PostgreSQL
