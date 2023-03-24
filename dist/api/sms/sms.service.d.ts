import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
export declare class SmsService {
    private httpService;
    private readonly configService;
    constructor(httpService: HttpService, configService: ConfigService);
    private makeSignature;
    sendSMS(phoneNumber: string, content: string, byteLength: number): Promise<any>;
}
