import  createConnection from "../database";
import { getConnection } from "typeorm";
import { GerAllUserController } from "./GetAllUserController";
import { FakeData } from "../utils/mocks/fakeData/fakeData";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { makeMockRequest } from "../utils/mocks/mockRequest";

describe('',()=>{

    beforeAll(async () =>{
        const connection = await createConnection()
        await connection.runMigrations()
    })
    
    afterAll(async ()=>{
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

        const fakeData = new FakeData()

        it('Deve retornar status 200 quando pegar todos os usuários', async()=>{

            await fakeData.execute()

            const getAllUserController =  new GerAllUserController()

            const request = makeMockRequest({})

            const response = makeMockResponse()

            await getAllUserController.handle(request, response)

            expect(response.state.status).toBe(200)

        })

})
