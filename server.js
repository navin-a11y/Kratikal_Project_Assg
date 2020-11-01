const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./app');

console.log(process.env.DATABASE);
const mongouri = process.env.DATABASE;

// DataBase concection
mongoose.connect(mongouri, {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
});

mongoose.connection.on("connected", () => {
    console.log('Database is connected successfully');
});

mongoose.connection.on("error", (Error) => {
    console.log('Database is not connected');
});


const PORT = process.env.PORT;
app.listen(PORT);
console.log(`app is running on the port number: ${PORT}`);
