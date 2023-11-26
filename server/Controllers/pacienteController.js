const Paciente = require("../Models/Paciente");
const asyncHandler = require("express-async-handler");

const getAllPacientes = asyncHandler(async (req, res) => {
    const pacientes = await Paciente.find().exec();
    if (!pacientes) return res.status(204).json({'message': 'No se encontraron pacienes'})
    res.json(pacientes);
})

const crearPaciente = asyncHandler(async (req, res) => {
    const {rut_pac, nombre, numero_telefono, email} = req.body;

    if(!rut_pac || !nombre || !numero_telefono || !email){
        return res.status(400).json({message: "algun campo no tiene valor"})
    }

    //revisar duplicados
    const duplicado = await Paciente.findOne({rut_pac}).lean().exec();
    if (duplicado) {
        return res.status(409).json({message: "Rut duplicado"});
    }

    const pacienteObject = {rut_pac, nombre, numero_telefono, email};

    //crear y guardar usuario
    const user = await Paciente.create(pacienteObject)

    if (user){
        res.status(201).json({message: `Nuevo paciente ${nombre} creado`})
    } else {
        res.status(400).json({message: 'Datos invalidos'})
    }
})

module.exports = {
    getAllPacientes,
    crearPaciente
}