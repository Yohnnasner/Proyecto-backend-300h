const express = require ("express")
const app = express()
const port = 300

const mongoose = require("mongoose") ,

//conectar a mongoose

mongoose.connect("mongodb" , {
    useNewUrParser:true, 
    useUnifiedTopology:true
}). then(()=> {
        console.log("conexion exitosa a mongo")
}). catch((error)=>{
        console.log("error al conectarnos con mongo" + error)
})
    
  //Creamos un modelo de datos          
  
  const Schema=mongoose.Schema

  const usurioSchema = new Schema({
        email:{
                type:String,
                unique:true, //asegurar de que el campo sea unico
                require:true, //Requerido
        },
        edad: Number,
        fecharegistro:{
                type: Date,
                default:Date.now
        } // establecer una fecha por defecto
  })


const Usuario = mongoose.model("Usuario", usurioSchema)

// ahora veremos la funciones del CRUD

// //GAURDAR

const instancia = new Usuario

instancia.nombre = "Yohn"
instancia.edad = 45
instancia.email = "jhonnesmat@gmail.com"

instancia.save().then((respuesta) => {
        console.log(respuesta)
}).catch((err) =>{
        console.log(err)
})


