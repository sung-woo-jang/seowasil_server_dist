import { User } from '../entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<User, "name" | "account" | "phoneNumber" | "email">>;
export declare class CreateUserDto extends CreateUserDto_base {
    password: string;
}
export {};
