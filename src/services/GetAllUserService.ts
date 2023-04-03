import { getRepository } from "typeorm"
import { Usuario } from "../entities/Usuario"


class GetAllUserService{

    async execute(){
        const usuarios = await getRepository(Usuario)
        .createQueryBuilder('usuarios')
        .select()
        .getMany()

        return usuarios
    }
}
export {GetAllUserService}

