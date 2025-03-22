import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit() {
        //this will make prisma lazily connect to the databasse?
        this.$connect().then(()=> console.log("connected to the db ....")).catch((error)=> console.log(error));
    }

}