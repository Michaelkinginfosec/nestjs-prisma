import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable(

)
export class UsersService {
    constructor (private primsa: PrismaService){}
    createUsers(data: Prisma.UserCreateInput){
        return this.primsa.user.create({data});
    }
    getUsers(){
        return this.primsa.user.findMany();
    }
    getUserById(id: number){
        return this.primsa.user.findUnique({where : {id}});
    }
    async updateUserById(id: number, data: Prisma.UserUpdateInput){
        const findUser = await this.getUserById(id);
        if(!findUser) throw new HttpException("User Not Found", 404);
        if(data.username) {
            const findUser = await this.primsa.user.findUnique({where: {username : data.username as string}, });
            if(findUser) throw new HttpException("Username Already In Use", 400);
        }
        return this.primsa.user.update({where : {id}, data});
    }

    async deleteUserById(id : number) {
        const findUser = await this.getUserById(id);
        if(!findUser) throw new HttpException("User Not Found", 404);
        return this.primsa.user.delete({where : {id}});

    }
}
