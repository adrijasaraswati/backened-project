import {app} from "./app.js" ;
import mongoose from "mongoose" ;
import connectDB from "./db/index.js" ;

connectDB() 
.then(() => {
    app.listen(process.env.PORT || 8000,() =>
    {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongodb connection failed ",error) ;
})