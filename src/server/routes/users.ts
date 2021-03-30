import * as express from 'express';
import db from "../db";
let router = express.Router();



router.get("/:id?", async (req, res) => {
    let id = Number(req.params.id);
    console.log({id})
    if (!isNaN(id)) {
        let users = await db.users.GetUser(id)
       
        res.json(users);
    } else {
        let allusers = await db.users.GetUsers()
        
        res.json(allusers);
    }
});

router.post("/", async (req, res) => {
    console.log('users router hit')
    let body = req.body
    console.log(body)
    let myUser = await db.users.CreateUser(body.name);
    console.log(myUser);
    res.json(myUser);
});

router.put("/:id", (req, res) => {
    let id = Number(req.params.id);
    let users = db.users.GetUser(id);

    if (Object.keys(users).length === 0) {
        res.sendStatus(404);
        return;
    }

    db.users.UpdateUser(id, req.body);

    res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
    let id = Number(req.params.id);
    db.users.DeleteUser(id);
    res.sendStatus(200);
});


export default router;