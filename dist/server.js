"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const router_1 = __importDefault(require("./router"));
const db_1 = __importDefault(require("./config/db"));
// Conectar a base de datos
async function connectDB() {
    try {
        await db_1.default.authenticate();
        db_1.default.sync();
        console.log(colors_1.default.blue('Conexion exitosa a la BD'));
    }
    catch (error) {
        console.log(error);
        console.log(colors_1.default.red.bold('Hubo un error al conectar a la BD'));
    }
}
connectDB();
//Instancia de express
const server = (0, express_1.default)();
//Leer datos de formulario
server.use(express_1.default.json());
server.use('/api/products', router_1.default);
exports.default = server;
//# sourceMappingURL=server.js.map