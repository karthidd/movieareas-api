import express from "express";
import moviesRoutes from "./routes/movies.route.js"

const app = express();
const PORT = 6969;

app.get("/",(req,res)=>{
    res.json({msg:"hello"});
});

app.use('/movies',moviesRoutes);

app.listen(PORT,()=>{
console.log(`server is running`)
});
