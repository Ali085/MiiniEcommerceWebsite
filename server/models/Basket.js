const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId  ,  },
    products: []
},
);

module.exports = mongoose.model("Basket", schema)