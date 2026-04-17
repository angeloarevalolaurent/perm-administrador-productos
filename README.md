# 🚀 perm-administrador-productos

API hecha con Node.js, Express y TypeScript - Administrador de Productos

---

## 📁 Estructura del proyecto

```
rest-api-node-ts-server/
├── src/
│   ├── index.ts
│   ├── server.ts
│
├── package.json
```

---

## ⚙️ Setup inicial

### 1. Inicializar proyecto Node

```
npm init
```

🔥 Diferencia:

```
npm init
```

👉 Te pide información como:

* nombre
* versión
* descripción

```
npm init -y
```

👉 Crea el `package.json` automáticamente sin hacer preguntas

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

## ▶️ Ejecutar el proyecto

Agregar en `package.json`:

```
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts"
}
```

Luego ejecutar:

```
npm run dev
```

---

## 🧠 Notas

* `typescript` permite usar tipado estático
* `ts-node` permite ejecutar archivos `.ts` sin compilarlos manualmente
* `nodemon` reinicia el servidor automáticamente al detectar cambios
* `--exec` se usa para indicar cómo ejecutar archivos TypeScript

---

## 📌 Estado del proyecto

🚧 En configuración inicial
