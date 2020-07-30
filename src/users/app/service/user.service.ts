import { Injectable, Logger, BadGatewayException, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegisterUserDto } from '../../domain/dto/register-user-dto';
import { User } from '../../domain/models/user.interface';
import *  as  bcrypt from "bcrypt";

@Injectable()
export class UserService {

    constructor(@InjectModel("User") private userModel: Model<User>) { }


    async registerUser(registerUserDto: RegisterUserDto): Promise<void> {

        const UserRegister = new this.userModel(registerUserDto);
        const session = await UserRegister.db.startSession();

        try {
            session.startTransaction();
            let pass = await bcrypt.hash(registerUserDto.password, 10);
            await this.userModel.create([{ "email": registerUserDto.email, "password": pass }], { session: session })
            await session.commitTransaction();
        } catch (error) {
            Logger.error(error);
            await session.abortTransaction();
            if (error.code === 11000) throw new ConflictException("Duplicated user");
            throw new BadGatewayException();
        } finally {
            session.endSession();
        }
    }

    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email: email });
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

}
