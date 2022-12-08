const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function postUsers(usuario){
    try{
        await prisma.users.create({
            data: {
                nome: usuario.Nome,
                email: usuario.Email,
                telefone: usuario.Telefone,
                senha: usuario.Password
            },
        })
        const getUser = await prisma.users.findMany({
            where: {email: usuario.Email}
        })       
        return getUser;
    }catch(err){
        console.log('err', err)
    }
    finally{
        await prisma.$disconnect()
    }
}

async function putUsers(id,usuario){
    try{
        const mensagem = `Dados alterados com sucesso!`;
        await prisma.users.update({
            where: { id: parseInt(id) },
            data:{
                nome: usuario.Nome,
                email: usuario.Email,
                telefone: usuario.Telefone,
                senha: usuario.Password
            }
        })
        return mensagem;
    }catch(err){
        console.log('err', err)
        const mensagem = "Email já existe!";
        return mensagem;
    }
    finally{
        await prisma.$disconnect()
    } 
}

async function getUsers(email){
    try{
        const getUser = await prisma.users.findMany({
            where: {email: email}           
        })
        return getUser;    
    }catch(err){
        console.log('err', err)
    }
    finally{
        await prisma.$disconnect()
    } 
}

async function getUsersAll(){
    try{
        const Getall = await prisma.users.findMany()
        return Getall;
    }catch(err){
        console.log('err', err)
    }
    finally{
        await prisma.$disconnect()
    } 
}

async function deleteUser(id){
    try{
        const mensagem = "Dados excluídos com sucesso!";
        await prisma.users.delete({
            where: { id: parseInt(id) }
        })   
        return mensagem;
    }catch(err){
        console.log('err', err)
        const mensagem = "Ops aconteceu algo!";
        return mensagem;
    }
    finally{
        await prisma.$disconnect()
    } 
}


module.exports = {postUsers, getUsers, getUsersAll, deleteUser, putUsers}