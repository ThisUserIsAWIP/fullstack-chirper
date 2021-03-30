import * as express from 'express';
import db from "../db";
let router = express.Router();



router.get("/:id?", async (req, res) => {
    let id = Number(req.params.id);
    console.log({id})
    if (!isNaN(id)) {
        let chirp = await db.chirps.GetChirpAuthor(id)
        
        res.json(chirp);
    } else {
        let allChirps = await db.chirps.GetChirpAuthors()
        res.json(allChirps);
    }
});

router.post("/", async (req, res) => {
    console.log('chirp router hit')
    let body = req.body
    let myChirp = await db.chirps.CreateChirp(body.userid, body.content);
    res.json(myChirp)
});

router.put("/:id", async (req, res) => {
    let id = Number(req.params.id);
    let body = req.body
    let chirp = await db.chirps.GetChirpAuthor(id);

    if (chirp.length === 0) {
        res.sendStatus(404);
        return;
    }

   await db.chirps.UpdateChirp(id, body.content);

    res.sendStatus(200);
});

router.delete("/:id", async (req, res) => {
    let id = Number(req.params.id);
    await db.chirps.DeleteChirp(id);
    res.sendStatus(200);
});


export default router;