const db = require('../../bin/bancodedados')

async function verificaEmail(usuario){
    const conn = await db.connect();
    const [verificaEmail] = await conn.query(`SELECT COUNT(email) AS email FROM users WHERE email = "${usuario.Email}";`);
    return verificaEmail;
}


async function postUsers(usuario){
    const conn = await db.connect();
    await conn.query(`INSERT INTO users (nome,telefone,email,senha) VALUES ("${usuario.Nome}","${usuario.Telefone}","${usuario.Email}","${usuario.Password}");`);
    const [getUser] = await conn.query(`SELECT * FROM users WHERE email = "${usuario.Email}";`);
    return getUser;
}

async function putUsers(id,usuario){
    const conn = await db.connect();
        const update = `UPDATE  users SET 
            nome = "${usuario.Nome}",
            telefone = "${usuario.Telefone}",
            email = "${usuario.Email}",
            senha = "${usuario.Password}"
            WHERE id = ${id};`;
        return await conn.query(update);
}

async function getUsers(email,password){
    const conn = await db.connect();
    const [rows] = await conn.query(`SELECT * FROM users WHERE email = "${email}";`);
    return rows;
}

async function getUsersAll(){
    const conn = await db.connect();
    const [rowsAll] = await conn.query(`SELECT * FROM users;`);
    return [rowsAll]
}

async function deleteUser(id){
    const conn = await db.connect();
    const [rowsDelete] = await conn.query(`DELETE FROM users WHERE id = ${id};`);
    return [rowsDelete]
}


module.exports = {postUsers, getUsers, getUsersAll, deleteUser, putUsers,verificaEmail}