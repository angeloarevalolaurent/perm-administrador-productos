"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const db_1 = __importDefault(require("./config/db")); // 👈 FALTA ESTO
const colors_1 = __importDefault(require("colors"));
const port = process.env.PORT || 4000;
async function startServer() {
    try {
        await db_1.default.authenticate(); // 👈 INICIALIZA Sequelize
        console.log(colors_1.default.green.bold("Conexión exitosa a la BD"));
        server_1.default.listen(port, () => {
            console.log(colors_1.default.cyan.bold(`REST API en el puerto ${port}`));
        });
    }
    catch (error) {
        console.log(error);
    }
}
startServer();
//# sourceMappingURL=index.js.map