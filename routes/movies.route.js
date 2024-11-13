import express, { response } from "express";

const router = express.Router();

router.get("/",(req,res) =>{
   res.send("get all movie list"); 
});

router.post("/",(req,res) =>{
    res.send("create a movie list");
});

router.put("/",(req,res) =>{
    res.send("update a movie list");
});

router.delete("/",(req,res) =>{
    res.send("delete a movie list");
});

export default router;