const Basket = require("../models/Basket")

const route = require('express').Router()





route.post("/update", async (req, res) => {
    let { user_id, products } = req.body
    // console.log('wee',products);


    let isExists = await  Basket.findOneAndUpdate({ user_id: user_id }, { products: products })
    if (isExists) {
        return res.json({ message: "Cool" })
    } else {
        let basket = new Basket({ user_id: user_id, products: products })
        let result = await basket.save()

    }
})

route.post("/load", async (req,res) => {
    let {user_id  } = req.body

    let products = await Basket.findOne({user_id : user_id})

    if (products){
        return res.status(200).json({products   : products})
    }



})


module.exports = route