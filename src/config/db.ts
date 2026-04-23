import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import Product from "../models/Product.model";

dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    models: [Product] // 👈 importante
})

export default db