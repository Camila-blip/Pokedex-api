const bancodedados = require('./SaveUsers');

exports.post = async (req, res, next) => {
    console.log(req.body)
    const Usuarios = await bancodedados.postUsers({
        Nome: req.body.Nome,
        Telefone: req.body.Telefone,
        Email: req.body.Email,
        Senha: req.body.Senha
    })
    console.log('controllerusuario',Usuarios)
    res.status(201).send(Usuarios);
};
exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
 };
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};