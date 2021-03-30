import * as express from 'express';
import chirpsRouter from './chirps';
import usersRouter from './users';
import db from '../db';

let router = express.Router();

router.use('/api/chirps', chirpsRouter);
router.use('/api/users', usersRouter);



// router.post('/api/chirps', async (req, res, next) => {
//     const chirpSubmission = req.body;
//     console.log(chirpSubmission)

// })
export default router;