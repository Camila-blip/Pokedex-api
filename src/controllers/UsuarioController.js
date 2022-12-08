const bancodedados = require('../models/SaveUsers');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.post = async (req, res, next) => {
    const Cadastro = {
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        Email: req.body.Email,
        Password: req.body.Password
    }
    try{
        let GetUsuarios = await bancodedados.postUsers(Cadastro) 
        res.status(200).send({user: GetUsuarios, token: jwt.sign(GetUsuarios[0],"PRIVATEKEY")});
    }catch{
        res.status(400).send("Email já existe!");
    }
};

exports.get = async (req, res, next) => {
    const  GetUsuariosAll =  await bancodedados.getUsersAll() 
    res.status(200).send(GetUsuariosAll);
 };

 exports.getById = async (req, res, next) => {
    try{
        let email = req.params.email;
        const  GetUsuarios =  await bancodedados.getUsers(email) 
        res.status(200).send({user: GetUsuarios, token: jwt.sign(GetUsuarios[0],"PRIVATEKEY")});
    }catch{
        res.status(400).send("Sem registros!");
    }
 };

exports.put = async (req, res, next) => {
    let id = req.params.id;
    const Cadastro = {
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        Email: req.body.Email,
        Password: req.body.Password
    }
   
    const put = await bancodedados.putUsers(id,Cadastro)
    res.status(200).send(put);
};

exports.delete = async (req, res, next) => {
    const delet = await bancodedados.deleteUser(req.params.id) 
    res.status(200).send(delet);
};