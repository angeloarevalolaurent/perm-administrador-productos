# 🚀 perm-administrador-productos

API hecha con Node.js, Express y TypeScript - Administrador de Productos

---

## 📁 Estructura del proyecto

```id="9b0h8y"
rest-api-node-ts-server/
├── src/
│   ├── index.ts
│   ├── server.ts
│
├── dist/
├── package.json
├── tsconfig.json
```

---

## ⚙️ Setup inicial

### 1. Inicializar proyecto Node

```id="r1y0q3"
npm init
```

---

### 2. Instalar TypeScript

```id="r8j4gm"
npm install -D typescript ts-node
```

---

### 3. Instalar nodemon

```id="g0s9j3"
npm install -D nodemon
```

---

### 4. Instalar Express

```id="n5yq2k"
npm install express
```

Instalar tipos de Express (TypeScript):

```id="bphw4d"
npm install -D @types/express
```

---

## 🛠️ Configuración de TypeScript

Inicializar configuración:

```id="qmt9q5"
npx tsc --init
```

Reemplazar el contenido de `tsconfig.json` por:

```json id="rj2n7p"
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ESNext"],
    "strict": false,
    "sourceMap": true,
    "esModuleInterop": true,
    "declaration": true
  },
  "include": ["src/**/*.ts"]
}
```

---

## ▶️ Ejecutar el proyecto

Agregar en `package.json`:

```json id="7zdy3a"
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts"
}
```

Ejecutar en desarrollo:

```id="a2v8oz"
npm run dev
```

---

## ⚙️ Compilar el proyecto

```id="6c84l2"
npx tsc
```

---

## ▶️ Ejecutar versión compilada

```id="yqk8l4"
node dist/index.js
```

---

## 🧠 Notas

* `express` permite crear el servidor y manejar rutas
* `@types/express` agrega tipado para TypeScript
* `typescript` permite usar tipado estático
* `ts-node` ejecuta `.ts` sin compilar
* `nodemon` reinicia el servidor automáticamente
* `tsc` compila el proyecto a JavaScript

---

## 📌 Estado del proyecto

🚧 Backend inicial con Express configurado
