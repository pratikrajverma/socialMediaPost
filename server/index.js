const express = require('express');
const app = express();
var cors = require('cors')

const dbconnect = require('./config/DBconnect')
dbconnect();

const cloudinaryConnect = require('./config/cloudinary');
cloudinaryConnect();

app.use(express.json());

const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(cors({
    origin: '*',
    credentials: true,
}));

const profileRoute = require('./routes/profileRoute')
app.use('/api/v1', profileRoute);






const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log('server connected successfully at port ', port);
})


//default Route
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE...</h1>`);
})