import * as mysql from 'mysql';
import chirps from './chirps';
import users from './users';

export const Connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'chirpr_app',
password: 'chirpr_pass',
database: 'chirpr'
});

export const Query = (query: string, values?:Array<string | number>) => {
    const SQLstring = mysql.format(query, values)
    console.log(SQLstring)
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(SQLstring, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    users,
    chirps
}