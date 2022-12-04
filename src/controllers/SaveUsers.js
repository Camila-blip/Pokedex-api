const db = require('../../bin/bancodedados')

async function postUsers(usuario){
    console.log("user", usuario)
    const conn = await db.connect();
    await conn.query('use master;');
    const sql = `INSERT INTO users (nome,telefone,email,senha) VALUES ("${usuario.Nome}","${usuario.Telefone}","${usuario.Email}","${usuario.Senha}");`;
    console.log("post", usuario.Nome)
    return await conn.query(sql);
}

async function getUsers(id){
    const conn = await db.connect();
    await conn.query('use master;');
    const [rows] = await conn.query(`SELECT * FROM users WHERE id = ${id};`);
    console.log("solo",rows)
    return rows;
}

async function getUsersAll(){
    const conn = await db.connect();
    await conn.query('use master;');
    const [rowsAll] = await conn.query(`SELECT * FROM users;`);
    console.log("all",rowsAll)
    return [rowsAll]
}

module.exports = {postUsers, getUsers, getUsersAll}