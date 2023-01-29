const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDatabase = require("./ConnectDatabase/connectDatabase/connect");
const AuthRouter = require("./Router/authRouter");

const server = express();

server.use(express.json());

server.use(cors({
    origin : "*"
}));

server.use(morgan('tiny'));

server.get("/",(req,res)=>{
    res.send("HELLO WORLD!")
})
server.use("/auth",AuthRouter);


const port = process.argv[2] || 3004;

server.listen(port, async ()=>{
    try{
        await connectDatabase();
         console.log("server listening on port 3004");
    }
    catch(err){
        console.error(err.message);
    }
})