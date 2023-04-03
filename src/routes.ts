import { Router,Request, Response} from 'express';
import { CreateUserController } from './Controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/',(request:Request, response:Response)=>{

    return response.json({mensagem:'Bem vindo'});
});

router.post('/usuarios',createUserController.handle);

export {router}