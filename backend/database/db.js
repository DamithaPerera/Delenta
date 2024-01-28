const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = "mongodb+srv://damithaperera:5A9qohqCMtNDN8H9@cluster0.utxvljd.mongodb.net/?retryWrites=true&w=majority";
    const clientOptions = {serverApi: {version: '1', strict: true, deprecationErrors: true}};

    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;
