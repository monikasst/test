const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    logo: {
        type: String,
    },  
    isDeleted: { 
        type: Boolean, 
        defaults: false 
    },  
});

module.exports = mongoose.model("country",CountrySchema);