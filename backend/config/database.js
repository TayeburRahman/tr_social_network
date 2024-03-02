const mongoose = require('mongoose');
 

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://social_network:XRGHHi7H6PUj3J2y@cluster0.yjiyu.mongodb.net/tr_social_network?retryWrites=true&w=majority');
        console.log(
            `DB connection successful! at ${new Date().toLocaleString()}`
        );
    } catch (err) {
        console.log("some things went")
        console.log(err);
    }
};

module.exports = connectDatabase;