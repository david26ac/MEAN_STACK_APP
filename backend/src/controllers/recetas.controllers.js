const cntrlRecetas = {}
const Receta = require('../models/Receta')

cntrlRecetas.save = async (req, res) => {
    const recetas = await Receta.find()
    console.log(recetas)
    res.json(recetas)
    res.send('Recetas received')
}
cntrlRecetas.create = async (req, res) => {
    const newReceta = new Receta(req.body)
    console.log(newReceta)
    res.json(newReceta)
    await newReceta.save()
    res.send('Receta created')
}
module.exports = cntrlRecetas;