const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const ProductRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const ordersRoute = require("./routes/order")
const basketRoute = require("./routes/basket")
const cors = require("cors")



dotenv.config()
const app = express();
app.use(cors());

mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection seccessfull!'))
    .catch((err) => {
        console.log(err);
    });


app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", ProductRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/basket",basketRoute)

app.listen(process.env.PORT || 5000, () => {
    
    console.log('Backend server is running!');
});
