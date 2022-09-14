import * as authRepository from '../Repositories/authRepository';
import EncryptPassword from '../Utils/encryptPasswordBCRYPT';
import ValidatePassword from '../Utils/validatePasswordBCRYPT';
import GenerateToken from '../Utils/generateTokenJWT';
import { CreateUser } from '../Types/authType';
import Error from '../Error/error';

export async function SignUp(user: CreateUser) {
	const userFound = await authRepository.findByEmail(user.email);
	if (userFound !== null) throw new Error('Conflict', 'email alredy registred');

	const encryptedPassword = EncryptPassword(user.password);
	await authRepository.create({ ...user, password: encryptedPassword });
	return;
}

export async function SignIn(email: string, password: string) {
	const user = await authRepository.findByEmail(email);
	if (user === null) throw new Error('NotFound', 'email and/or password invalid');
	const isValid: boolean = ValidatePassword(password, user.password);
	if (!isValid) throw new Error('NotFound', 'email and/or password invalid');

	const token = GenerateToken(user);
	return token;
}