import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    setCurrentRefreshToken(refreshToken: string, id: number): Promise<void>;
    removeRefreshToken(id: number): Promise<import("typeorm").UpdateResult>;
    getUserById(id: number): Promise<User>;
}
