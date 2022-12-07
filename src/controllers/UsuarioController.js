const bancodedados = require('./SaveUsers');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.post = async (req, res, next) => {
    const Cadastro = {
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        Email: req.body.Email,
        Password: req.body.Password
    }
    let QuantidadeEmail = await bancodedados.verificaEmail(Cadastro);
        QuantidadeEmail =  QuantidadeEmail[0].email;
    if (QuantidadeEmail === 0){
        let GetUsuarios = await bancodedados.postUsers(Cadastro) 
        res.status(201).send({user: GetUsuarios, token: jwt.sign(GetUsuarios[0],"PRIVATEKEY")});
    } 
    else{
        res.status(400).send("Email já existe!");
    }
};

exports.get = async (req, res, next) => {
    const  GetUsuariosAll =  await bancodedados.getUsersAll() 
    res.status(200).send(GetUsuariosAll);
 };

 exports.getById = async (req, res, next) => {
    let email = req.params.email;
    const  GetUsuarios =  await bancodedados.getUsers(email) 
    res.status(200).send({user: GetUsuarios, token: jwt.sign(GetUsuarios[0],"PRIVATEKEY")});
 };

exports.put = async (req, res, next) => {
    let id = req.params.id;
    const Cadastro = {
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        Email: req.body.Email,
        Password: req.body.Password
    }
    let QuantidadeEmail = await bancodedados.verificaEmail(Cadastro)
        QuantidadeEmail =  QuantidadeEmail[0].email
    if (QuantidadeEmail === 0){
        await bancodedados.putUsers(id,Cadastro)
        res.status(201).send(`Dados alterados com sucesso!`);
    } 
    else{
        res.status(400).send("Email já existe!");
    }
     
};

exports.delete = async (req, res, next) => {
    await bancodedados.deleteUser(req.params.id) 
    res.status(200).send(`Dados excluídos com sucesso!`);
};