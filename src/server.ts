import express from 'express'
import colors from 'colors'
import router  from './router' 
import db from './config/db'

// Conectar a base de datos
async function connectDB() {
    try{
        await db.authenticate()
        await db.sync()
       // console.log(colors.blue('Conexion exitosa a la BD' ));
    } catch (error) {
      //  console.log(error)
        console.log(colors.red.bold( 'Hubo un error al conectar a la BD'));
    }    
}

connectDB()


//Instancia de express
const server = express()

//Leer datos de formulario
server.use(express.json())

server.use('/api/products', router)


server.get('/api', (req, res) => {
    res.json({ msg: 'Bienvenido a la API de productos' })
})



export default server