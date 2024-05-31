const mongoose = require('mongoose');
const connecttoMongo = () => {
    const uri = "mongodb+srv://kaushik:kaushik@cluster0.uvixtgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    mongoose.connect(uri).then(() => {
        console.log("Connected to Mongo");
    })
        .catch((error) => {
            console.log(error);
        })
}
module.exports=connecttoMongo;