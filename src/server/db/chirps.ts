import { Query } from './index';
import { Chirp } from '../../utilities';

const GetChirps = async () => Query('SELECT * FROM Chirps');
const GetChirpAuthor = async (id: Chirp['id']) => Query(`SELECT c.id, c.userid, c.content, c._created, u.name
FROM Chirps c
JOIN Users u
ON c.userid = u.id
WHERE c.id = ?`, [id])
const GetChirpAuthors = async () => Query(`SELECT c.id, c.userid, c.content, c._created, u.name
FROM Chirps c
JOIN Users u
ON c.userid = u.id;`)
const CreateChirp = async (userid: Chirp['userid'], content: Chirp['content']) => Query(`INSERT INTO Chirps ( userid, content ) VALUES (?, ?)`, [userid, content]);
const UpdateChirp = async (id: Chirp['id'], content: Chirp['content']) => Query(`UPDATE Chirps SET content= ? WHERE id = ?`, [content, id]);
const DeleteChirp = async (id: Chirp['id']) => Query('DELETE FROM Chirps WHERE id = ?', [id]);

export default {
    GetChirps,
    GetChirpAuthor,
    GetChirpAuthors,
    CreateChirp,
    UpdateChirp,
    DeleteChirp
};