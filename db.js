const mongoose = require('mongoose');
const connecttoMongo = () => {
    const uri = "mongodb+srv://kaushik:kaushik@cluster0.uvixtgg.mongodb.net/spend";
    mongoose.connect(uri).then(() => {
        console.log("Connected to Mongo");
    })
        .catch((error) => {
            console.log(error);
        })
}
module.exports=connecttoMongo;