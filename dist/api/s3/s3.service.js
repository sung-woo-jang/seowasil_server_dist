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
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const path_1 = require("path");
let S3Service = class S3Service {
    constructor() {
        AWS.config.update({
            region: 'ap-northeast-2',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        this.s3 = new AWS.S3();
    }
    async uploadImageToAWS_s3(file, idx) {
        const key = `${idx}-${Date.now()}${(0, path_1.extname)(file.originalname)}`;
        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            ACL: 'private',
            Key: key,
            Body: file.buffer,
        };
        return new Promise((resolve, reject) => {
            this.s3.putObject(params, (err) => {
                if (err)
                    reject(err);
                resolve(key);
            });
        });
    }
};
S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map