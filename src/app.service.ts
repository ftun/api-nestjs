import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {
            author: "Felipe Tun",
            status: "ok",
        };
    }
}
