"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicInterceptor = void 0;
const common_1 = require("@nestjs/common");
let PublicInterceptor = class PublicInterceptor {
    intercept(context, next) {
        var _a, _b;
        const request = context.switchToHttp().getRequest();
        const isPublic = ((_b = (_a = request.route) === null || _a === void 0 ? void 0 : _a.stack[0]) === null || _b === void 0 ? void 0 : _b.method) === 'public';
        if (isPublic) {
            return next.handle();
        }
    }
};
PublicInterceptor = __decorate([
    (0, common_1.Injectable)()
], PublicInterceptor);
exports.PublicInterceptor = PublicInterceptor;
//# sourceMappingURL=public.interceptor.js.map