const mongoose = require('mongoose');

// importing DATABASE from config.env file 
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose.connect(DB).then(() => {
   console.log('Mongoose Connection Successfully Done...');
}).catch((error) => console.log('Error due to -', error));