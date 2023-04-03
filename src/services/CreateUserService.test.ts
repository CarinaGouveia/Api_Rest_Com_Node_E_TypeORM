import createConnection from "../database";
import { CreateUserService } from "./CreateUserService";
import { getConnection } from "typeorm";

describe('CreateUserController',()=>{

    beforeAll(async () =>{
        const connection = await createConnection()
        await connection.runMigrations()
    })
    
    afterAll(async ()=>{
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    it('Deve retornar o id do usuário criado', async()=>{
        const createUserService = new CreateUserService()

     const result = await createUserService.execute({
            id:'69f59aa6-7ad5-4294-90da-bbd770357bf3',
            nome:'Algum usuário',
            email:'email@gmail.com'
        })

        expect(result).toHaveProperty('id')
    })

})   