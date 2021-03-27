const { Schema, model } = require('mongoose');

const RecetaSchema = new Schema({
    name: {type: String, required : true},
    description: {type: String, required : true},
    imgUrl: {type: String},
    id_api: {type: String, required : true}
},
{
    timestamps : true,
    versionKey : false
})

module.exports = model('Receta', RecetaSchema)