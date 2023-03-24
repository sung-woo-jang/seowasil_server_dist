"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const rxjs_1 = require("rxjs");
let SmsService = class SmsService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    makeSignature() {
        const message = [];
        const hmac = crypto.createHmac('sha256', this.configService.get('NCP_SENS_SECRET_KEY'));
        const space = ' ';
        const newLine = '\n';
        const method = 'POST';
        const timestamp = Date.now().toString();
        message.push(method);
        message.push(space);
        message.push(`/sms/v2/services/${this.configService.get('NCP_SENS_ID')}/messages`);
        message.push(newLine);
        message.push(timestamp);
        message.push(newLine);
        message.push(this.configService.get('NCP_SENS_ACCESS_KEY'));
        const signature = hmac.update(message.join('')).digest('base64');
        return signature.toString();
    }
    async sendSMS(phoneNumber, content, byteLength) {
        const body = {
            type: byteLength < 80 ? 'SMS' : 'LMS',
            contentType: 'COMM',
            countryCode: '82',
            from: `01076370624`,
            content: `${content} `,
            messages: [
                {
                    to: phoneNumber,
                },
            ],
        };
        const headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'x-ncp-apigw-timestamp': Date.now().toString(),
            'x-ncp-iam-access-key': this.configService.get('NCP_SENS_ACCESS_KEY'),
            'x-ncp-apigw-signature-v2': this.makeSignature(),
        };
        const options = {
            headers,
        };
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.configService.get('NCP_SENS_URI')}/${this.configService.get('NCP_SENS_ID')}/messages`, body, options));
            return response.status === 202;
        }
        catch (error) {
            return false;
        }
    }
};
SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], SmsService);
exports.SmsService = SmsService;
//# sourceMappingURL=sms.service.js.map