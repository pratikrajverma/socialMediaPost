const express = require('express'); 
const app = express();
var cors = require('cors')   
 
const  dbconnect = require('./config/DBconnect')
dbconnect(); 

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials:true, 
}));

const profileRoute = require('./routes/profileRoute')
app.use('/api/v1',profileRoute);


app.use(cors())




const port = process.env.PORT || 4000;

app.listen(port, (req,res)=>{
    console.log('server connected successfully at port ',port);   
})
 

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE...</h1>`);
})