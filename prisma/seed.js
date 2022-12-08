const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function postUsers(){
    const email = "usuario@outlook.com";
    try{
        await prisma.users.create({
            data: {
                nome: "Usuario",
                email: email,
                telefone: "(11) 98431-2712",
                senha: "1234"
            },
        })
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
//npx prisma db seed
postUsers()