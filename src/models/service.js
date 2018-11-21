const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    description: {
        type: String
    },
    location: {
        type: mongoose.SchemaTypes.Mixed
    },
    user: {
        type: mongoose.SchemaTypes.Mixed
    }
})  

module.exports = mongoose.model('Service', serviceSchema);