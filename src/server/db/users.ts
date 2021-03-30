import { Query } from './index';
import { User } from '../../utilities';
const GetUsers = async () => Query('SELECT * FROM Users');
const GetUser = async (id: User['id']) => Query('SELECT * FROM Users WHERE id = ?', [id]);
const CreateUser = async (name: User['name']) => {
    Query(`INSERT INTO Users ( name ) VALUES (?)`, [name]);
    console.log(name)
};
const UpdateUser = async (id: User['id'], name: User['name']) => Query(`INSERT INTO Users SET ? `, [id, name]);
const DeleteUser = async (id: User['id']) => Query('DELETE FROM Users WHERE id = ?', [id]);

export default {
    GetUsers,
    GetUser,
    CreateUser,
    UpdateUser,
    DeleteUser
};